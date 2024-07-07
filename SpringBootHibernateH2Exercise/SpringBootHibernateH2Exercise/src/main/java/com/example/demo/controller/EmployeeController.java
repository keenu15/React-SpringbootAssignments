package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeService service;

    @PostMapping("/addemployee")
    public String addEmployee(@RequestBody Employee employee) {
        return service.addEmployee(employee);
    }

    @PutMapping("/updateemployee")
    public String updateEmployee(@RequestBody Employee employee) {
        return service.updateEmployee(employee);
    }

    @DeleteMapping("/deleteemployee/{id}")
    public String deleteEmployee(@PathVariable("id") int employeeId) {
        return service.deleteEmployee(employeeId);
    }

    @GetMapping("/getemployee/{id}")
    public Employee getEmployeeById(@PathVariable("id") int employeeId) {
        return service.getEmployeeById(employeeId);
    }

    @GetMapping("/getemployees")
    public List<Employee> getAllEmployee() {
        return service.getAllEmployee();
    }

    @GetMapping("/getemployeesbetween/{isalary}/{fsalary}")
    public List<Employee> getAllEmployeeBetweenSalaries(@PathVariable("isalary") int initialSalary, @PathVariable("fsalary") int finalSalary) {
        return service.getAllEmployeeBetweenSalaries(initialSalary, finalSalary);
    }

    @GetMapping("/getemployeesbydesignation/{designation}")
    public List<Employee> getAllEmployeeByDesignation(@PathVariable("designation") String employeeDesignation) {
        return service.getAllEmployeeByDesignation(employeeDesignation);
    }
}
