package com.wellsfargo.training.onlineBankingSystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/greet")
    public String greet() {
        return "Greetings from Citizen's Bank";
    }
}
