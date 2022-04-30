package com.example.passportmanagement.services;

import com.example.passportmanagement.Repository.CustomerRepository;
import com.example.passportmanagement.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminService {
    @Autowired
    private CustomerRepository customerRepository ;

    public boolean approve(Long id) {
        Customer l=customerRepository.findById(id);
        l.setApplicationApprove("app");
        customerRepository.save(l);
        return true;
    }
    public boolean reject(Long id) {
        Customer l=customerRepository.findById(id);
        l.setApplicationApprove("rej");
        customerRepository.save(l);
        return false;
    }
}
