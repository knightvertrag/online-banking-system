package com.wellsfargo.training.onlineBankingSystem;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wellsfargo.training.onlineBankingSystem.controller.TransactionController;
import com.wellsfargo.training.onlineBankingSystem.exception.DeactivatedAccountException;
import com.wellsfargo.training.onlineBankingSystem.exception.IncorrectTransactionPasswordException;
import com.wellsfargo.training.onlineBankingSystem.exception.InsufficientBalanceException;
import com.wellsfargo.training.onlineBankingSystem.exception.NoSuchAccountExistsException;
import com.wellsfargo.training.onlineBankingSystem.model.Account;
import com.wellsfargo.training.onlineBankingSystem.model.Customer;
import com.wellsfargo.training.onlineBankingSystem.model.Transaction;
import com.wellsfargo.training.onlineBankingSystem.model.TransactionRequest;
import com.wellsfargo.training.onlineBankingSystem.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.exceptions.misusing.NotAMockException;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;

import static javax.management.Query.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
public class TransactionControllerTest {

    private MockMvc mockMvc;

    @Mock
    private TransactionService transactionService;

    @InjectMocks
    private TransactionController transactionController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();
    }

    @Test
    public void testCreateTransaction() throws Exception {
        Customer senderCustomer = Mockito.mock(Customer.class);
        Customer recieverCustomer = Mockito.mock(Customer.class);
        Account sender = new Account();
        sender.setBalance(200000L);
        sender.setIsActive(1);
        sender.setAccNo(100L);
        sender.setTransPassword("password");
        sender.setCustomer(senderCustomer);

        Account receiver = new Account();
        receiver.setBalance(300000L);
        receiver.setIsActive(1);
        receiver.setAccNo(101L);
        receiver.setTransPassword("password");
        receiver.setCustomer(recieverCustomer);

        Transaction transaction = new Transaction();
        transaction.setAmount(1000L);
        transaction.setReceiverAccount(receiver);
        transaction.setSenderAccount(sender);
        transaction.setRemarks("Remarks");
        transaction.setTransId(1);
        LocalDateTime time = LocalDateTime.now();
        transaction.setTransactionTime(time);

        TransactionRequest transactionRequest = new TransactionRequest();
        transactionRequest.setAmount(100L);
        transactionRequest.setRemarks("Remarks");
        transactionRequest.setReceiverAccountNo(101L);
        transactionRequest.setSenderAccountNo(100L);
        transactionRequest.setTransPassword("password");
        when(transactionService.createTransaction(transactionRequest.getAmount(), transactionRequest.getSenderAccountNo(), transactionRequest.getReceiverAccountNo(), transactionRequest.getTransPassword(), transactionRequest.getRemarks())).thenReturn(transaction);

        mockMvc.perform(post("/transactions/createTransaction")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(transactionRequest)))
                .andExpect(status().isOk());


    }
}
