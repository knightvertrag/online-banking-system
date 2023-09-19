package com.wellsfargo.training.onlineBankingSystem.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.training.onlineBankingSystem.model.Account;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{
	@Query("SELECT a FROM Account a WHERE a.customer.custId=:custId ")
	public List<Account> findByCustId(Long custId);
	
	public Optional<Account> findByAccNo(Long accNo);
	public void deleteByAccNo(Long accNo);
	
}
