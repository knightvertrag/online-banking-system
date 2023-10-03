package com.wellsfargo.training.onlineBankingSystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class NoSuchCustomerExistsException extends Exception {
	
	private static final long serialVersionUID = 1L;

	public NoSuchCustomerExistsException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
	
}
