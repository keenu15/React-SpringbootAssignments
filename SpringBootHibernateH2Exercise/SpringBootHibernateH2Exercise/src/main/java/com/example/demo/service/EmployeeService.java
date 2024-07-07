package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Employee;

public interface EmployeeService {
	
	abstract String addEmployee(Employee employee);
	
	abstract String updateEmployee(Employee employee);
	
	abstract String deleteEmployee(int employeeId);
	
	abstract Employee getEmployeeById(int employeeId);
	
	abstract List<Employee> getAllEmployee();
	
	abstract List<Employee> getAllEmployeeBetweenSalaries(int initialSalary,int finalSalary);
	
	abstract List<Employee> getAllEmployeeByDesignation(String employeeDesignation);

}
