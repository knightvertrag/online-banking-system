package com.wellsfargo.training.onlineBankingSystem;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wellsfargo.training.onlineBankingSystem.controller.AdminController;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Admin;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.AccountRepository;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;
import com.wellsfargo.training.onlineBankingSystem.service.AccountService;
import com.wellsfargo.training.onlineBankingSystem.service.AdminService;

@SpringBootTest
public class AdminControllerTest {

private MockMvc mockMvc;
	
	@InjectMocks
	private AdminController adminController;
	
	@Mock
	private AccountService accService;
	@Mock
	private AdminService adminService;
	@Mock
	private AccountRepository accRepository;
	
	@Mock
	private CustomerRepository custRepository;
	
	@BeforeEach
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		mockMvc=MockMvcBuilders.standaloneSetup(adminController).build();
	}
	
	@Test
	public void testLoginAdmin() throws Exception {
		Long adminId=1L;
		Admin admin = new Admin();
		admin.setAdminId(adminId);
		admin.setPassword("password");
		
		when(adminService.loginAdmin(eq(adminId))).thenReturn(Optional.of(admin));
		
		mockMvc.perform(post("/admin/loginAdmin")
		.contentType(MediaType.APPLICATION_JSON)
		.content(new ObjectMapper().writeValueAsString(admin)))
		.andExpect(status().isOk())
		.andExpect(content().string("true"));
		
	}
	
	@Test
	public void testFetchAllCustomers() throws Exception {
		Customer customer1=new Customer();
		Customer customer2=new Customer();
		
		customer1.setAadhar("123456789012");
		customer1.setCustId(1L);
		customer1.setDob(null);
		customer1.setEmail("satyam@example.com");
		customer1.setFatherName("father");
		customer1.setFirstName("satyam");
		customer1.setLastName("pareek");
		customer1.setPassword("password");
		customer1.setPhone("9876543211");
		
		customer2.setAadhar("123456789012");
		customer2.setCustId(1L);
		customer2.setDob(null);
		customer2.setEmail("satyam@example.com");
		customer2.setFatherName("father");
		customer2.setFirstName("satyam");
		customer2.setLastName("pareek");
		customer2.setPassword("password");
		customer2.setPhone("9876543211");
		
		List<Customer> customers= new ArrayList<Customer>();
		customers.add(customer1);
		customers.add(customer2);
		
		when(adminService.getAllCustomers()).thenReturn(customers);
		
		mockMvc.perform(get("/admin/allCustomers"))
		.andExpect(status().isOk())
		.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		.andExpect(jsonPath("$.size()").value(customers.size()));
		
		
		
	}
	
	@Test
	public void testDeactivateCustomerAccount() throws Exception {
		Long accNo=100L;
		Account acc = new Account();
		
		acc.setBalance(100);
		acc.setIsActive(1);
		acc.setTransPassword("transpassword");
		acc.setAccNo(accNo);
		
		
		when(accService.getSingleAccount(accNo)).thenReturn(Optional.of(acc) );
		mockMvc.perform(get("/admin/deactivateAccount/{accNo}",accNo))
		.andExpect(status().isOk())
		.andExpect(content().string("Account with Account Number "+accNo+" has been deactivated"));
		
		Mockito.verify(accRepository).save(any(Account.class));
		
	}

	
}

