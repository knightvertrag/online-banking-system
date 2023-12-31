package com.wellsfargo.training.onlineBankingSystem.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchCustomerExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;
import com.wellsfargo.training.onlineBankingSystem.service.CustomerService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/api")
public class CustomerController {
	
	@Autowired
	private CustomerRepository custRepository;
	
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
		Long cust_id=customer.getCustId();
		String password=customer.getPassword();
		
		Customer c= customerService.loginCustomer(cust_id).orElseThrow(()->
		new NoSuchCustomerExistsException("Customer Not Found for this ID::"));
		
		if(cust_id.equals(c.getCustId()) && password.equals(c.getPassword()))
				{
					isLoggedIn=true;
				}
		return isLoggedIn;
	}
	
	@GetMapping("/userDetails/{custId}")
	public ResponseEntity<Customer> getCustomerDetails(@PathVariable Long custId){
		Optional<Customer> customer= customerService.fetchCustomerDetails(custId);
		 return ResponseEntity.ok(customer.get());
	}
	
	@PutMapping("/updateDetails/{id}")
	public ResponseEntity<Customer> updateCustomerById(@PathVariable(value = "id") Long custId, @Validated @RequestBody Customer c) throws NoSuchCustomerExistsException{
		Customer customer = customerService.loginCustomer(custId).orElseThrow(()-> new
				NoSuchCustomerExistsException("Customer Not Found for this ID: "+custId));
		//update the product with new values
		customer.setAadhar(c.getAadhar());
		customer.setDob(c.getDob());
		customer.setEmail(c.getEmail());
		customer.setFatherName(c.getFatherName());
		customer.setFirstName(c.getFirstName());
		customer.setLastName(c.getLastName());
		customer.setPhone(c.getPhone());
	
		
		final Customer updatedCustomer = custRepository.save(customer);
		return ResponseEntity.ok().body(updatedCustomer);
	}
	
	

}
