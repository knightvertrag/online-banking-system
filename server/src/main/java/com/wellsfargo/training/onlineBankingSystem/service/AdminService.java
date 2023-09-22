package com.wellsfargo.training.onlineBankingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;

@Service
public class AdminService {
	
	@Autowired
	public CustomerService custService;
	
	@Autowired
	public CustomerRepository custRepository;
	
	public List<Customer> getAllCustomers(){
		return custRepository.findAll();
	}

}
