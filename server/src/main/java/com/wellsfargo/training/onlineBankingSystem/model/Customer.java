package com.wellsfargo.training.onlineBankingSystem.model;

import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.util.Base64;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;


@Entity
public class Customer {

	@SequenceGenerator(name="customer_seq",initialValue = 1000,allocationSize = 1)
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY,generator="customer_seq")
    private Long cust_id;
	
	@Column(nullable=false)
    private String firstName;
	
	@Column(nullable=false)
    private String lastName;
	
	@Column(nullable=false)
    private String phone;
	
	@Column(nullable=false)
	private String email;
	
	private String password;
	
	@Column(nullable=false)
	private String fatherName;
	
	@Column(nullable=false)
	private String aadhar;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date dob;
	
	
	
	
	public Customer() {
		// TODO Auto-generated constructor stub
	}



	public Long getCust_id() {
		return cust_id;
	}



	public void setCust_id(Long cust_id) {
		this.cust_id = cust_id;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		Base64.Encoder encoder = Base64.getEncoder();  
        String normalString = password;
        String encodedString = encoder.encodeToString(   // encrypt password in database field
        normalString.getBytes(StandardCharsets.UTF_8) );
        this.password = encodedString;
	}



	public String getFatherName() {
		return fatherName;
	}



	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}



	public String getAadhar() {
		return aadhar;
	}



	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}



	public Date getDob() {
		return dob;
	}



	public void setDob(Date dob) {
		this.dob = dob;
	}
	
	
	
	

	

	
	

}
