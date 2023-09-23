package com.wellsfargo.training.onlineBankingSystem.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;

import jakarta.transaction.Transactional;


public interface CustomerService {

	public Customer registerCustomer(Customer c);
	
	public Optional<Customer> loginCustomer(Long cust_id);
	
	public Optional<Customer> fetchCustomerDetails(Long custId);


}
