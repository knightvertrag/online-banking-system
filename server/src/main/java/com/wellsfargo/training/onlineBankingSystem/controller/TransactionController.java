package com.wellsfargo.training.onlineBankingSystem.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.onlineBankingSystem.exception.InsufficientBalanceException;
import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchAccountExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Transaction;
import com.wellsfargo.training.onlineBankingSystem.service.TransactionService;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

	private TransactionService transService;
	
	
	@PostMapping("/createTransaction")
	public ResponseEntity<Transaction> createTransaction(@Validated @RequestParam Long amount , @RequestParam Long senderAcc , @RequestParam Long receiverAcc) throws NoSuchAccountExistsException, InsufficientBalanceException{
		
		Transaction newTransaction = transService.createTransaction(amount, senderAcc, receiverAcc);
		
		return ResponseEntity.ok(newTransaction);
		
	}
	
}
