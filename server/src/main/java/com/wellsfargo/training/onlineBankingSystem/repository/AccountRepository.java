package com.wellsfargo.training.onlineBankingSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.training.onlineBankingSystem.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long>{
	@Query("SELECT a FROM Account a WHERE a.customer.cust_id=:custId ") 
	public List<Account> findAccountsByCustId(Long custId);
}
