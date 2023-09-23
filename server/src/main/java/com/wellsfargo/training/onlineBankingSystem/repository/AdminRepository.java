package com.wellsfargo.training.onlineBankingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wellsfargo.training.onlineBankingSystem.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{

}
