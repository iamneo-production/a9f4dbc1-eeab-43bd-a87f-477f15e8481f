package com.example.passportmanagement.model;


import javax.persistence.*;


@Entity
@Table(name="Customer_table")
public class Customer {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String lastname;
    private String father_name;
    private String mother;
    private String phone_number;
    private String age;
    private String dob;
    private String gender;
    private String nationality;
    private String aadhar_no;
    private String address;
    @Column(length = 3000)
    private String applicationApprove;
    public Customer() {
    }

    public Customer(int id, String name, String lastname, String father_name, String mother, String phone_number, String age, String dob, String gender, String nationality, String aadhar_no, String address, String applicationApprove) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.father_name = father_name;
        this.mother = mother;
        this.phone_number = phone_number;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.nationality = nationality;
        this.aadhar_no = aadhar_no;
        this.address = address;
        this.applicationApprove = applicationApprove;
    }

    public String getApplicationApprove() {
        return applicationApprove;
    }

    public void setApplicationApprove(String applicationApprove) {
        this.applicationApprove = applicationApprove;
    }

    public Integer getId() {
        return id;
    }

    public void setId(String id) {
        this.id = Integer.parseInt(id);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getAadhar_no() {
        return aadhar_no;
    }

    public void setAadhar_no(String aadhar_no) {
        this.aadhar_no = aadhar_no;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFather_name() {
        return father_name;
    }

    public void setFather_name(String father_name) {
        this.father_name = father_name;
    }

    public String getMother() {
        return mother;
    }

    public void setMother(String mother) {
        this.mother = mother;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }



    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", age='" + age + '\'' +
                ", dob='" + dob + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", nationality='" + nationality + '\'' +
                ", aadhar_no='" + aadhar_no + '\'' +
                ", address='" + address + '\'' +
                ", father_name='" + father_name + '\'' +
                ", mother='" + mother + '\'' +
                ", gender='" + gender + '\'' +

                '}';
    }
}
