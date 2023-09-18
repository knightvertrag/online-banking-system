package com.wellsfargo.training.onlineBankingSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchCustomerExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.AccountRepository;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AccountService {

	@Autowired
	private AccountRepository accRepository;
	@Autowired
	private CustomerRepository custRepository;
	
//	@Autowired
//	public AccountService(AccountRepository accRepository, CustomerRepository custRepository) {
//		this.accRepository=accRepository;
//		this.custRepository=custRepository;
//	}
	
	
	public Account createAccount(Long custId,Account account) throws NoSuchCustomerExistsException {
		Optional<Customer> customer= custRepository.findById(custId);
		
		if(customer.isPresent()) {
			Customer loggedInCustomer=customer.get();
			account.setCustomer(loggedInCustomer);
//			loggedInCustomer.getAccounts().add(account);
			//custRepository.save(loggedInCustomer);
			return accRepository.save(account);
		}
		else {
			throw new NoSuchCustomerExistsException("Customer Not found with this Id : "+custId);
		}		
		
	}
	
	public ResponseEntity<List<Account>> getAllAccounts(Long custId){
		List<Account> accounts = accRepository.findByCustId(custId);
		if(accounts.isEmpty())
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(accounts);
		
	}
	
	public Optional<Account> getSingleAccount(long accNo){
		return accRepository.findByAccNo(accNo);
	}
	
	public void deleteAccount(Long accNo) {
		accRepository.deleteByAccNo(accNo);
	}
	
}
