package com.wellsfargo.training.onlineBankingSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.service.AdminService;

@RestController
@RequestMapping(value="/admin")
public class AdminController {
	
	@Autowired
	public AdminService adminService;
	
	@GetMapping("/allCustomers")
	public ResponseEntity<List<Customer>> fetchAllCustomers(){
		List<Customer> customers=adminService.getAllCustomers();
		return ResponseEntity.ok(customers);
	}

}
