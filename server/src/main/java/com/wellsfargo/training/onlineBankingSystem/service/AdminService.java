package com.wellsfargo.training.onlineBankingSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.onlineBankingSystem.model.Admin;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.AdminRepository;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;

@Service
public class AdminService {
	
	@Autowired
	public AdminRepository adminRepository;
	
	@Autowired
	public CustomerService custService;
	
	@Autowired
	public CustomerRepository custRepository;
	
	public Optional<Admin> loginAdmin(Long adminId){
		return adminRepository.findById(adminId);
	}
	
	public List<Customer> getAllCustomers(){
		return custRepository.findAll();
	}

}
