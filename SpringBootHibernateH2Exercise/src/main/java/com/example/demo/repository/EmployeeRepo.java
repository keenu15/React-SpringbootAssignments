package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

	@Query("SELECT e FROM Employee e WHERE e.empsal BETWEEN :initialSalary AND :finalSalary")
	List<Employee> findByEmployeesBetweenSalaries(@Param("initialSalary") int initialSalary, @Param("finalSalary") int finalSalary);

	@Query("SELECT e FROM Employee e WHERE e.empdesg = :employeeDesignation")
	List<Employee> findByEmployeesByDesignation(@Param("employeeDesignation") String employeeDesignation);
}
