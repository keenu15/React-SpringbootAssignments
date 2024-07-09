package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.demo.dao.EmployeeDao;
import com.example.demo.entity.Employee;
import com.example.demo.exception.EmployeeNotFoundException;
import com.example.demo.repository.EmployeeRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	EmployeeRepo repo;
	
	public String addEmployee(Employee employee) {
		repo.save(employee);
		return "Employee Saved successfully";
	}
	
	public String updateEmployee(Employee employee) {
		repo.save(employee);
		return "Employee Updated successfully";
	}
	
	public String deleteEmployee(int employeeId) {
		 repo.deleteById(employeeId);
		 return "Employee Deleted successfully";
	}
	
	public Employee getEmployeeById(int employeeId) throws EmployeeNotFoundException{
		  Optional<Employee> optional = repo.findById(employeeId);
		  if(optional.isPresent())
				return optional.get();
			else
				throw new EmployeeNotFoundException("Employee Not Found ....");
	}
	
	public List<Employee> getAllEmployee(){
		return repo.findAll();
	}
	
	public List<Employee> getAllEmployeeBetweenSalaries(int initialSalary,int finalSalary){
		return repo.findByEmployeesBetweenSalaries(initialSalary, finalSalary);
	}
	
	public List<Employee> getAllEmployeeByDesignation(String employeeDesignation){
		return repo.findByEmployeesByDesignation(employeeDesignation);
	}

}
