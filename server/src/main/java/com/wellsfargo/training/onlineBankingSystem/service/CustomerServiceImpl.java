package com.wellsfargo.training.onlineBankingSystem.service;

import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository crepo;

    public Customer registerCustomer(Customer c) {
        return crepo.save(c);
    }

    public Optional<Customer> loginCustomer(Long cust_id){
        return crepo.findById(cust_id);
    }
}
