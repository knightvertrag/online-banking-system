package com.wellsfargo.training.onlineBankingSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchCustomerExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.service.CustomerService;

@RestController
@RequestMapping(value="/api")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/register")
	public ResponseEntity<String> createCustomer(@Validated @RequestBody Customer customer){
		try {
			
			
			Customer registeredCustomer = customerService.registerCustomer(customer);
			if(registeredCustomer!=null) {
				return ResponseEntity.ok("Registration Successfull");
				}
			else
				return ResponseEntity.badRequest().body("Registration Failed");
		}
		catch(Exception e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An Error Occured : "+e.getMessage());
		}
	}
	
	@PostMapping("/loginCustomer")
	public Boolean loginCustomer(@Validated @RequestBody Customer customer) throws NoSuchCustomerExistsException {
		Boolean isLoggedIn=false;
		Long cust_id=customer.getCust_id();
		String password=customer.getPassword();
		
		Customer c= customerService.loginCustomer(cust_id).orElseThrow(()->
		new NoSuchCustomerExistsException("Customer Not Found for this ID::"));
		
		if(cust_id.equals(c.getCust_id()) && password.equals(c.getPassword()))
				{
					isLoggedIn=true;
				}
		return isLoggedIn;
	}
	
	

}
