package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Employee;
import com.example.demo.exception.EmployeeNotFoundException;

public interface EmployeeService {
	
	abstract String addEmployee(Employee employee);
	
	abstract String updateEmployee(Employee employee);
	
	abstract String deleteEmployee(int employeeId);
	
	abstract Employee getEmployeeById(int employeeId) throws EmployeeNotFoundException;
	
	abstract List<Employee> getAllEmployee();
	
	abstract List<Employee> getAllEmployeeBetweenSalaries(int initialSalary,int finalSalary);
	
	abstract List<Employee> getAllEmployeeByDesignation(String employeeDesignation);

}
