package com.wellsfargo.training.onlineBankingSystem.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
public class Admin {
	
	@Id
	@Column(name = "Admin-Id")
    private Long adminId;
	
	@Column(nullable=false)
    private String firstName;
	
	@Column(nullable=false)
    private String lastName;
	
	@Column(nullable=false)
    private String phone;
	
	@Column(nullable=false)
	private String email;
	
	@Column(nullable=false)
	private String password;
	
	@Column(nullable=false)
	private String fatherName;
	
	@Column(nullable=false)
	private String aadhar;
	
	@Column(nullable=false)
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date dob;
}
