package com.wellsfargo.training.onlineBankingSystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchAccountExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.service.AccountService;

@RestController
@RequestMapping(value="/accounts")
public class AccountController {

	@Autowired
	private AccountService accService;
	
	@PostMapping("/createAccount/{custId}")
	public ResponseEntity<String> createAccount(@PathVariable Long custId ,@RequestBody Account account){
try {
			
			
			Account newAccount= accService.createAccount(custId,account);
			if(newAccount!=null) {
				return ResponseEntity.ok("New Account Created Successfully");
				}
			else
				return ResponseEntity.badRequest().body("Account Creation Failed");
		}
		catch(Exception e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An Error Occured : "+e.getMessage());
		}
	}
	
	@GetMapping("/getAccounts/{custId}")
	public ResponseEntity<List<Account>> getAllAccounts(@PathVariable Long custId){
		return accService.getAllAccounts(custId);
	}
	
	
	@DeleteMapping("/deleteAccount/{accNo}")
		public ResponseEntity<String> deleteAccount(@PathVariable(value="accNo") Long accNo){
		Optional<Account> account=accService.getSingleAccount(accNo);
		
		if(account.isEmpty())
			return ResponseEntity.notFound().build();
		
		accService.deleteAccount(accNo);
		return ResponseEntity.ok("Account with Account Number "+accNo+ " has been deleted");
	}
	}

