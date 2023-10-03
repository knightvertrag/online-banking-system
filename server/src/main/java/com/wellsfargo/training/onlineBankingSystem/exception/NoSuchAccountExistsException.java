package com.wellsfargo.training.onlineBankingSystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoSuchAccountExistsException extends Exception {
	
	private static final long serialVersionUID = 1L;

	public NoSuchAccountExistsException(String message) {
		// TODO Auto-generated constructor stub
		super(message);
	}

	
	
	

}
