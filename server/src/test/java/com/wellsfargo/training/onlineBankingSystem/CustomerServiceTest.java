package com.wellsfargo.training.onlineBankingSystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;
import com.wellsfargo.training.onlineBankingSystem.service.CustomerService;

public class CustomerServiceTest {

	@Mock
	public CustomerRepository custRepository;
	
	@InjectMocks
	public CustomerService custService;
	
	@BeforeEach
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void RegisterCustomer_Success() {
		//customer to be registered
		Customer customer=new Customer();
		
		//set the custId;
		customer.setCustId(1L);
		
		when(custRepository.save(any(Customer.class))).thenReturn(customer);
		
		//Act
		Customer registeredCustomer= custService.registerCustomer(customer);
		
		//Assert
		assertNotNull(registeredCustomer);  //should be not null
		assertEquals(1L, registeredCustomer.getCustId()); // custId should be same
		verify(custRepository,times(1)).save(any(Customer.class)); //should be saved only once		
		
	}
	
	@Test
	public void LoginCustomer_Success() {
		Long custId=1L;
		Customer registeredCustomer=new Customer();
		registeredCustomer.setCustId(custId);
		
		when(custRepository.findById(custId)).thenReturn(Optional.of(registeredCustomer));
		
		//Act
		
		Optional<Customer> loggedInCustomer = custService.loginCustomer(custId);
		
		//Assert
		assertTrue(loggedInCustomer.isPresent());
		assertEquals(custId, loggedInCustomer.get().getCustId());
		verify(custRepository,times(1)).findById(custId);
	}
	
	@Test
	public void fetchCustomerDetails_Success() {
		Long custId=1L;
		Customer customer=new Customer();
		customer.setCustId(custId);
		
		when(custRepository.findById(custId)).thenReturn(Optional.of(customer));
		
		//Act
		Optional<Customer> loggedCustomer=custService.fetchCustomerDetails(custId);
		
		//Assert
		assertTrue(loggedCustomer.isPresent());
		assertEquals(custId,loggedCustomer.get().getCustId());
		verify(custRepository,times(1)).findById(custId);
	}
	
	
	
}
