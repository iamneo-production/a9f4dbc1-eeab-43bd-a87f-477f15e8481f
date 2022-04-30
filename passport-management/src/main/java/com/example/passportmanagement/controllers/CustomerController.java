package com.example.passportmanagement.controllers;
import com.example.passportmanagement.model.Customer;
import com.example.passportmanagement.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService ;
    @PostMapping("/addProfile")
    public Customer addProduct(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }
    @PostMapping("/addProfiles")
    public List<Customer> addProducts(@RequestBody List<Customer> profiles) {
        return customerService.saveAllCustomer(profiles);
    }
    @GetMapping("/profileById/{profileId}")
    public Customer findProfileById(@PathVariable int profileId) {
        return customerService.getProfileById(profileId);
    }
    @PutMapping("/update")
    public Customer updateProduct(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }
    @DeleteMapping("/delete/{profileId}")
    public String deleteProfile(@PathVariable int profileId) {
        return customerService.deleteById(profileId);
    }
}
