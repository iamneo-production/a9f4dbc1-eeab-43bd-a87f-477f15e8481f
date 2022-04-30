package com.example.passportmanagement.controllers;

import com.example.passportmanagement.model.Customer;
import com.example.passportmanagement.model.DocumentModel;
import com.example.passportmanagement.services.AdminService;
import com.example.passportmanagement.services.CustomerService;
import com.example.passportmanagement.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class AdminController {
    @Autowired
    private DocumentService documentService;
    @Autowired
    private CustomerService customerService ;
    @Autowired
    private AdminService adminService ;
    //To View Documents-Endpoint
    @GetMapping("/admin/getDocument/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        DocumentModel fileDB = documentService.getFile(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }
    @GetMapping("admin/viewSmartCard/{profileId}")
    public Customer findProfileById(@PathVariable int profileId) {
        return customerService.getProfileById(profileId);
    }
    @PutMapping("admin/editSmartCard")
    public Customer updateProduct(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }

    @GetMapping("approve/{id}")
    public boolean approve(@PathVariable("id") Long id) {
        return adminService.approve(id);
    }
    @GetMapping("reject/{id}")
    public boolean reject(@PathVariable("id") Long id) {
        return adminService.reject(id);
    }
}
