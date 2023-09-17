package com.wellsfargo.training.onlineBankingSystem.model;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import jakarta.persistence.*;

@Entity
@Table(name="accounts")
public class Account {

	@SequenceGenerator(name="acc_seq",initialValue = 100,allocationSize = 1)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY,generator="acc_seq")
	@Column(name="account_no")
	private Long acc_no;
	
	@Column(nullable=false)
	private String log_pass;
	
	@Column(nullable=false)
	private String trans_pass;
	
	@Column(nullable=false)
	private long balance;
	
	@Column(nullable=false)
	private int isActive;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="cust_id",nullable=false)
	private Customer customer;
	
	
	
	

	public Account() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	

	public Account(Long acc_no, String log_pass, String trans_pass, long balance, int isActive, Customer customer) {
		this.acc_no = acc_no;
		this.log_pass = log_pass;
		this.trans_pass = trans_pass;
		this.balance = balance;
		this.isActive = isActive;
		this.customer = customer;
	}



	public Long getAcc_no() {
		return acc_no;
	}

	public void setAcc_no(Long acc_no) {
		this.acc_no = acc_no;
	}

	public String getLog_pass() {
		return log_pass;
	}

	public void setLog_pass(String log_pass) {
		
		Base64.Encoder encoder = Base64.getEncoder();  
        String normalString = log_pass;
        String encodedString = encoder.encodeToString(   // encrypt password in database field
        normalString.getBytes(StandardCharsets.UTF_8) );
        this.log_pass = encodedString;
	
	}

	public String getTrans_pass() {
		return trans_pass;
	}

	public void setTrans_pass(String trans_pass) {
		Base64.Encoder encoder = Base64.getEncoder();  
        String normalString = trans_pass;
        String encodedString = encoder.encodeToString(   // encrypt password in database field
        normalString.getBytes(StandardCharsets.UTF_8) );
        this.trans_pass = encodedString;
	}

	public long getBalance() {
		return balance;
	}

	public void setBalance(long balance) {
		this.balance = balance;
	}

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	
	
	
}
