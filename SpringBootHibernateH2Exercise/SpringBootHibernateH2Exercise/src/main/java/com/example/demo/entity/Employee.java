package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empid;
    private String empname;
    private int empsal;
    private String empdesg;

    // Getters and Setters

    public int getEmpid() {
        return empid;
    }

    public void setEmpid(int empid) {
        this.empid = empid;
    }

    public String getEmpname() {
        return empname;
    }

    public void setEmpname(String empname) {
        this.empname = empname;
    }

    public int getEmpsal() {
        return empsal;
    }

    public void setEmpsal(int empsal) {
        this.empsal = empsal;
    }

    public String getEmpdesg() {
        return empdesg;
    }

    public void setEmpdesg(String empdesg) {
        this.empdesg = empdesg;
    }

    public Employee() {
        super();
    }

    public Employee(String empname, int empsal, String empdesg) {
        super();
        this.empname = empname;
        this.empsal = empsal;
        this.empdesg = empdesg;
    }
}
