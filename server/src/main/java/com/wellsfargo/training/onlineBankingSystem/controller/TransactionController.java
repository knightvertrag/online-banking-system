package com.wellsfargo.training.onlineBankingSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.onlineBankingSystem.exception.InsufficientBalanceException;
import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchAccountExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Transaction;
import com.wellsfargo.training.onlineBankingSystem.model.TransactionRequest;
import com.wellsfargo.training.onlineBankingSystem.service.TransactionService;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
	@Autowired
	private TransactionService transService;
	
	
	@PostMapping("/createTransaction")
	public ResponseEntity<Transaction> createTransaction(@Validated @RequestBody TransactionRequest transactionRequest) throws NoSuchAccountExistsException, InsufficientBalanceException{
		Long amount=transactionRequest.getAmount();
		Long senderAcc=transactionRequest.getSenderAccountNo();
		Long receiverAcc=transactionRequest.getReceiverAccountNo();
		Transaction newTransaction = transService.createTransaction(amount, senderAcc, receiverAcc);
		
		return ResponseEntity.ok(newTransaction);
		
	}
	
	@GetMapping("/transactions/{accNo}")
	public ResponseEntity<List<Transaction>> getTransactions(@PathVariable Long accNo) throws NoSuchAccountExistsException{
		List<Transaction> transactions=transService.getTransactionHistoryByAccount(accNo);
		return ResponseEntity.ok(transactions);
	}
	
}
