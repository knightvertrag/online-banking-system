package com.wellsfargo.training.onlineBankingSystem.service;

import java.util.List;
import java.util.Optional;

import com.wellsfargo.training.onlineBankingSystem.exception.DeactivatedAccountException;
import com.wellsfargo.training.onlineBankingSystem.exception.InsufficientBalanceException;
import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchAccountExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.onlineBankingSystem.model.Admin;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.AdminRepository;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;

@Service
public class AdminService {
	
	@Autowired
	public AdminRepository adminRepository;
	
	@Autowired
	public CustomerService custService;
	
	@Autowired
	public CustomerRepository custRepository;

	@Autowired
	private AccountRepository accountRepository;
	
	public Optional<Admin> loginAdmin(Long adminId){
		return adminRepository.findById(adminId);
	}
	
	public List<Customer> getAllCustomers(){
		return custRepository.findAll();
	}

	public void addMoney(Long toAdd, Long accNo) throws NoSuchAccountExistsException, DeactivatedAccountException {
		Optional<Account> acc = accountRepository.findByAccNo(accNo);
		if (acc.isPresent())
		{
			if(acc.get().getIsActive()==0) {
				throw new DeactivatedAccountException("This account is not active");
			}
			acc.get().setBalance(acc.get().getBalance() + toAdd);
			accountRepository.save(acc.get());
		} else {
			throw new NoSuchAccountExistsException("Account not found with acc no: " + accNo);
		}
	}
	public void deductMoney(Long toAdd, Long accNo) throws NoSuchAccountExistsException, DeactivatedAccountException, InsufficientBalanceException {
		Optional<Account> acc = accountRepository.findByAccNo(accNo);
		if (acc.isPresent())
		{
			if(acc.get().getIsActive()==0) {
				throw new DeactivatedAccountException("This account is not active");
			}
			else if(acc.get().getBalance()<toAdd) {
				throw new InsufficientBalanceException("Insufficient Balance");
			}
			acc.get().setBalance(acc.get().getBalance() - toAdd);
			accountRepository.save(acc.get());
		} else {
			throw new NoSuchAccountExistsException("Account not found with acc no: " + accNo);
		}
	}
}
