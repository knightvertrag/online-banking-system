package com.wellsfargo.training.onlineBankingSystem.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.onlineBankingSystem.exception.InsufficientBalanceException;
import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchAccountExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Transaction;
import com.wellsfargo.training.onlineBankingSystem.repository.AccountRepository;
import com.wellsfargo.training.onlineBankingSystem.repository.TransactionRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TransactionService {
	@Autowired
	private  TransactionRepository transRepository;
	@Autowired
	private AccountRepository accRepository;
	@Autowired
	private AccountService accService;
	
	public Transaction createTransaction(Long amount, Long senderAccountNo , Long receiverAccountNo) throws NoSuchAccountExistsException, InsufficientBalanceException {
		Account senderAccount = accService.getSingleAccount(senderAccountNo).orElseThrow(()->
		new NoSuchAccountExistsException("Sender Account Not found"));
		
		Account receiverAccount = accService.getSingleAccount(receiverAccountNo).orElseThrow(()->
		new NoSuchAccountExistsException("Receiver Account Not found"));
		
		if(senderAccount.getBalance()<amount) {
			throw new InsufficientBalanceException("Insufficient Balance");
		}
		
		Transaction transaction = new Transaction();
		transaction.setAmount(amount);
		transaction.setReceiverAccount(receiverAccount);
		transaction.setSenderAccount(senderAccount);
		transaction.setTransactionTime(LocalDateTime.now());
		
		
		senderAccount.setBalance(senderAccount.getBalance()-amount);
		receiverAccount.setBalance(receiverAccount.getBalance()+amount);
		
		transRepository.save(transaction);
		accRepository.save(senderAccount);
		accRepository.save(receiverAccount);
		
		return transaction;
			
		
	}
	
	public List<Transaction> getTransactionHistoryByAccount(Long AccountNo){
		return transRepository.findBySenderAccountAccNoOrReceiverAccountAccNo(AccountNo, AccountNo);
	}

	
	
}
