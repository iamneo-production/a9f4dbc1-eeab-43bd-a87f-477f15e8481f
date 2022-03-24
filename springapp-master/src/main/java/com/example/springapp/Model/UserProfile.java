package com.example.springapp.Model;

import javax.persistence.*;

@Entity
@Table(name = "Userprofile",uniqueConstraints = @UniqueConstraint(columnNames = "profileid"))



public class UserProfile {
@Id
@GeneratedValue(strategy =  GenerationType.IDENTITY)
private int profileid;
private String Firstname;
private String Lastname;
private String Gender;
private String Age;
private String Dateofbirth;
private String Address;
private String Country;
private int Aadharnumber;

public UserProfile(){

}
    public int getProfileid() {
        return profileid;
    }

    public void setProfileid(int profileid) {
        this.profileid =profileid;
    }

    public String getLastname() {
        return Lastname;
    }

    public void setLastname(String lastname) {
        Lastname = lastname;
    }

    public String getFirstname() {
        return Firstname;
    }

    public void setFirstname(String firstname) {
        this.Firstname = firstname;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getAge() {
        return Age;
    }

    public void setAge(String age) {
        Age = age;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public int getAadharnumber() {
        return Aadharnumber;
    }

    public void setAadharnumber(int aadharnumber) {
        Aadharnumber = aadharnumber;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getDateofbirth() {
        return Dateofbirth;
    }

    public void setDateofbirth(String dateofbirth) {
        Dateofbirth = dateofbirth;
    }
}