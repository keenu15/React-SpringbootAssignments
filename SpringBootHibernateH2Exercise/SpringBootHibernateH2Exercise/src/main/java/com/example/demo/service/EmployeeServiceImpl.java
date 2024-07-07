package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.EmployeeDao;
import com.example.demo.entity.Employee;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
    
    @Autowired
    private EmployeeDao dao;

    @Override
    public String addEmployee(Employee employee) {
        return dao.addEmployee(employee);
    }

    @Override
    public String updateEmployee(Employee employee) {
        return dao.updateEmployee(employee);
    }

    @Override
    public String deleteEmployee(int employeeId) {
        return dao.deleteEmployee(employeeId);
    }

    @Override
    public Employee getEmployeeById(int employeeId) {
        return dao.getEmployeeById(employeeId);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return dao.getAllEmployee();
    }

    @Override
    public List<Employee> getAllEmployeeBetweenSalaries(int initialSalary, int finalSalary) {
        return dao.getAllEmployeeBetweenSalaries(initialSalary, finalSalary);
    }

    @Override
    public List<Employee> getAllEmployeeByDesignation(String employeeDesignation) {
        return dao.getAllEmployeeByDesignation(employeeDesignation);
    }
}
