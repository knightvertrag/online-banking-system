package com.wellsfargo.training.onlineBankingSystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wellsfargo.training.onlineBankingSystem.controller.AccountController;
import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchCustomerExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;
import com.wellsfargo.training.onlineBankingSystem.service.AccountService;

@SpringBootTest
public class AccountControllerTest{
	
	private MockMvc mockMvc;
	
	@InjectMocks
	private AccountController accController;
	
	@Mock
	private AccountService accService;
	
	@Mock
	private CustomerRepository custRepository;
	
	@BeforeEach
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		mockMvc=MockMvcBuilders.standaloneSetup(accController).build();
	}
	
	@Test
	public void testCreateAccount() throws Exception {
		
		Long custId=1L;
		Account account = new Account();
		Customer customer = new Customer();
		
		account.setBalance(100);
		account.setIsActive(1);
		account.setTransPassword("transpassword");
		account.setAccNo(100L);
		
		customer.setAadhar("123456789012");
		customer.setCustId(custId);
		customer.setDob(null);
		customer.setEmail("satyam@example.com");
		customer.setFatherName("father");
		customer.setFirstName("satyam");
		customer.setLastName("pareek");
		customer.setPassword("password");
		customer.setPhone("9876543211");
		
		account.setCustomer(customer);
		
		when(accService.createAccount(eq(custId), any(Account.class))).thenReturn(account);
		
		mockMvc.perform(post("/accounts/createAccount/{custId}",custId)
				.contentType(MediaType.APPLICATION_JSON)
				.content(new ObjectMapper().writeValueAsString(account)))
				.andExpect(status().isOk())
				.andExpect(content().string("New Account Created Successfully"));
		
		
		
	}
	
	@Test
	public void testGetAllAccounts() throws Exception {
	
		Long custId=1L;
		Customer customer=new Customer();
		
		List<Account> accounts = new ArrayList<>();
		Account a1= new Account();
		Account a2= new Account();
		
		a1.setBalance(100);
		a1.setIsActive(1);
		a1.setTransPassword("transpassword");
		a1.setAccNo(100L);
		
		a2.setBalance(1000);
		a2.setIsActive(1);
		a2.setTransPassword("transpassword");
		a2.setAccNo(101L);
		
		customer.setAadhar("123456789012");
		customer.setCustId(custId);
		customer.setDob(null);
		customer.setEmail("satyam@example.com");
		customer.setFatherName("father");
		customer.setFirstName("satyam");
		customer.setLastName("pareek");
		customer.setPassword("password");
		customer.setPhone("9876543211");
		
		
		
		a1.setCustomer(customer);
		a2.setCustomer(customer);
		
		accounts.add(a1);
		accounts.add(a2);
		
		customer.setAccounts(accounts);
		
		when(custRepository.findById(eq(custId))).thenReturn(Optional.of(customer));
		when(accService.getAllAccounts(eq(custId))).thenReturn(accounts);
		
		mockMvc.perform(get("/accounts/getAccounts/{custId}",custId))
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.size()").value(accounts.size()))
				.andExpect(jsonPath("$[0].balance").value(accounts.get(0).getBalance()));	
		
		
	}

		
	
}
