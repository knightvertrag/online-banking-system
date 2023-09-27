package com.wellsfargo.training.onlineBankingSystem.controller;

import java.util.List;
import java.util.Optional;

import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchAccountExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchCustomerExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Admin;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.AccountRepository;
import com.wellsfargo.training.onlineBankingSystem.service.AccountService;
import com.wellsfargo.training.onlineBankingSystem.service.AdminService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/admin")
public class AdminController {
	
	@Autowired
	public AdminService adminService;
	
	@Autowired
	public AccountService accService;
	
	@Autowired
	public AccountRepository accRepository;
	
	@PostMapping("/loginAdmin")
	public Boolean loginAdmin(@Validated @RequestBody Admin admin ) throws NoSuchCustomerExistsException {
		Boolean isLoggedIn=false;
		Long adminId=admin.getAdminId();
		String password=admin.getPassword();
		
		Admin ad= adminService.loginAdmin(adminId).orElseThrow(()->
		new NoSuchCustomerExistsException("Admin Not Found for this ID::"));
		
		if(adminId.equals(ad.getAdminId()) && password.equals(ad.getPassword()))
				{
					isLoggedIn=true;
				}
		return isLoggedIn;
				
		
		
	}
	
	@GetMapping("/allCustomers")
	public ResponseEntity<List<Customer>> fetchAllCustomers(){
		List<Customer> customers=adminService.getAllCustomers();
		return ResponseEntity.ok(customers);
	}
	
	@PostMapping("/deactivateAccount/{accNo}")
	public ResponseEntity<String> deactivateCustomerAccount(@PathVariable (value="accNo") Long accNo) {
		Optional<Account> account=accService.getSingleAccount(accNo);
		
		if(account.isEmpty())
			return ResponseEntity.notFound().build();
		
		account.get().setIsActive(0);
		accRepository.save(account.get());
		
		return ResponseEntity.ok("Account with Account Number "+accNo+ " has been deactivated");
	}

	@GetMapping("/activateAccount/{accNo}")
	public ResponseEntity<String> activateCustomerAccount(@PathVariable (value="accNo") Long accNo) {
		Optional<Account> account=accService.getSingleAccount(accNo);

		if(account.isEmpty())
			return ResponseEntity.notFound().build();

		account.get().setIsActive(1);
		accRepository.save(account.get());

		return ResponseEntity.ok("Account with Account Number "+accNo+ " has been activated");
	}

	@PostMapping("/deposit/{accNo}/{amnt}")
	public ResponseEntity<String> depositMoney(@PathVariable (value="accNo") Long accNo, @PathVariable (value="amnt") Long amount) {
		try {
			adminService.addMoney(amount, accNo);
		} catch (NoSuchAccountExistsException e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>("Failed to deposit amount: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Amount deposited Successfully", HttpStatus.OK);
	}

	@PostMapping("/withdraw/{accNo}/{amnt}")
	public ResponseEntity<String> withdrawMoney(@PathVariable (value="accNo") Long accNo, @PathVariable (value="amnt") Long amount) {
		try {
			adminService.deductMoney(amount, accNo);
		} catch (NoSuchAccountExistsException e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>("Failed to withdraw amount: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Amount withdrawn Successfully", HttpStatus.OK);
	}
}
