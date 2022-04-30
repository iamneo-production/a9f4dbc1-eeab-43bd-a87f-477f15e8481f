package com.example.passportmanagement.services;
import com.example.passportmanagement.Repository.CustomerRepository;
import com.example.passportmanagement.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository ;
    //Post Method Service
    public Customer saveCustomer (Customer customer){
        return customerRepository.save(customer);
    }
    public List<Customer> saveAllCustomer(List<Customer> profiles){
        return customerRepository.saveAll(profiles);
    }
    //Get Method Service
    public List<Customer> getAllCustomer (List<Customer> profiles){
        return customerRepository.findAll();
    }
    public Customer getProfileById (int profileId){
        return customerRepository.findById(profileId).orElse(null);
    }
    //Delete Method Service
    public String deleteById(int profileId){
        customerRepository.deleteById(profileId);
        return "Deleted" ;
    }
    //Update Method Service
    public Customer updateCustomer(Customer customer) {
        Customer customerData = customerRepository.findById(Integer.valueOf(customer.getId())).orElse(null);
        customerData.setName(customer.getName());
        customerData.setLastname(customer.getLastname());
        customerData.setAddress(customer.getAddress());
        customerData.setAadhar_no(customer.getAadhar_no());
        customerData.setFather_name(customer.getFather_name());
        customerData.setMother(customer.getMother());
        customerData.setPhone_number(customer.getPhone_number());
        customerData.setAge(customer.getAge());
        customerData.setDob(customer.getDob());
        customerData.setGender(customer.getGender());
        customerData.setNationality(customer.getNationality());
        return customerRepository.save(customerData);
    }



}