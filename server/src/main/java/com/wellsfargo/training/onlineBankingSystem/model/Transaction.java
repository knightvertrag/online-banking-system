package com.wellsfargo.training.onlineBankingSystem.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int transId;
	
	@Column(nullable=false)
	private Long amount;
	
	@ManyToOne
	@JoinColumn(name="senderAccount" , nullable=false)
	private Account senderAccount;
	
	@ManyToOne
	@JoinColumn(name="receiverAccount" , nullable =false)
	private Account receiverAccount;
	
    @Column(nullable=false)	
	private LocalDateTime transactionTime;
    
    @Column()
    private String remarks;

	public Transaction() {
		// TODO Auto-generated constructor stub
	}

	public Transaction(int transId, Long amount, Account senderAccount, Account receiverAccount,
			LocalDateTime transactionTime, String remarks) {
		this.transId = transId;
		this.amount = amount;
		this.senderAccount = senderAccount;
		this.receiverAccount = receiverAccount;
		this.transactionTime = transactionTime;
		this.remarks = remarks;
	}

	public int getTransId() {
		return transId;
	}

	public void setTransId(int transId) {
		this.transId = transId;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public Account getSenderAccount() {
		return senderAccount;
	}

	public void setSenderAccount(Account senderAccount) {
		this.senderAccount = senderAccount;
	}

	public Account getReceiverAccount() {
		return receiverAccount;
	}

	public void setReceiverAccount(Account receiverAccount) {
		this.receiverAccount = receiverAccount;
	}

	public LocalDateTime getTransactionTime() {
		return transactionTime;
	}

	public void setTransactionTime(LocalDateTime transactionTime) {
		this.transactionTime = transactionTime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	
    
    
    
}
