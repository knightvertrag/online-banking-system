package com.wellsfargo.training.onlineBankingSystem.model;

public class TransactionRequest {

	private Long amount;
	private Long senderAccountNo;
	private Long receiverAccountNo;
	public TransactionRequest() {
		// TODO Auto-generated constructor stub
	}
	public TransactionRequest(Long amount, Long senderAccountNo, Long receiverAccountNo) {
		this.amount = amount;
		this.senderAccountNo = senderAccountNo;
		this.receiverAccountNo = receiverAccountNo;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	public Long getSenderAccountNo() {
		return senderAccountNo;
	}
	public void setSenderAccountNo(Long senderAccountNo) {
		this.senderAccountNo = senderAccountNo;
	}
	public Long getReceiverAccountNo() {
		return receiverAccountNo;
	}
	public void setReceiverAccountNo(Long receiverAccountNo) {
		this.receiverAccountNo = receiverAccountNo;
	}
	
	
}
