package com.wellsfargo.training.onlineBankingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.onlineBankingSystem.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
