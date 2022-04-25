package com.example.springapp.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "profile_table")
public class Profile {
    @Id
    @GeneratedValue
    private int profileId ;
    private String firstName;
    private String middleName;
    private String lastName;
    private String address;
    private String email;
    private String mobile;
}
