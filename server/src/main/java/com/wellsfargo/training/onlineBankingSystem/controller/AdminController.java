package com.wellsfargo.training.onlineBankingSystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.AccountRepository;
import com.wellsfargo.training.onlineBankingSystem.service.AccountService;
import com.wellsfargo.training.onlineBankingSystem.service.AdminService;

@RestController
@RequestMapping(value="/admin")
public class AdminController {
	
	@Autowired
	public AdminService adminService;
	
	@Autowired
	public AccountService accService;
	
	@Autowired
	public AccountRepository accRepository;
	
	@GetMapping("/allCustomers")
	public ResponseEntity<List<Customer>> fetchAllCustomers(){
		List<Customer> customers=adminService.getAllCustomers();
		return ResponseEntity.ok(customers);
	}
	
	@GetMapping("/deactivateAccount/{accNo}")
	public ResponseEntity<String> deactivateCustomerAccount(@PathVariable (value="accNo") Long accNo) {
		Optional<Account> account=accService.getSingleAccount(accNo);
		
		if(account.isEmpty())
			return ResponseEntity.notFound().build();
		
		account.get().setIsActive(0);
		accRepository.save(account.get());
		
		return ResponseEntity.ok("Account with Account Number "+accNo+ " has been deactivated");
	}

}
