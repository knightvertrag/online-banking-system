package com.wellsfargo.training.onlineBankingSystem.repository;

import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
}
