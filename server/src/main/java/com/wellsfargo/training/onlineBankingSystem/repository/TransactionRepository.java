package com.wellsfargo.training.onlineBankingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wellsfargo.training.onlineBankingSystem.model.Transaction;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import java.util.List;


@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

	public List<Transaction> findBySenderAccountAccNoOrReceiverAccountAccNo(Long accNo, Long accNo1);
	
}
