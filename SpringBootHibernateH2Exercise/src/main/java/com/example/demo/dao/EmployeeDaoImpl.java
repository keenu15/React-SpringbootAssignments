//package com.example.demo.dao;
//
//import java.util.List;
//
//import org.springframework.stereotype.Repository;
//
//import com.example.demo.entity.Employee;
//
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.PersistenceContext;
//import jakarta.persistence.TypedQuery;
//
//@Repository
//public class EmployeeDaoImpl implements EmployeeDao{
//	
//	@PersistenceContext
//	EntityManager entitymanager;
//
//	@Override
//	public String addEmployee(Employee employee) {
//		entitymanager.persist(employee);
//		return "Employee added successfully";
//	}
//
//	@Override
//	public String updateEmployee(Employee employee) {
//		entitymanager.merge(employee);
//		return "Employee updated successfully";
//	}
//
//	@Override
//	public String deleteEmployee(int employeeId) {
//		entitymanager.remove(getEmployeeById(employeeId));
//		return "Employee deleted successfully";		
//	}
//
//	@Override
//	public Employee getEmployeeById(int employeeId) {
//		return entitymanager.find(Employee.class,employeeId);
//	}
//
//	@Override
//	public List<Employee> getAllEmployee() {
//		TypedQuery<Employee> employees = entitymanager.createQuery("select e from Employee e",Employee.class);
//		return employees.getResultList();
//	}
//
//	@Override
//	public List<Employee> getAllEmployeeBetweenSalaries(int initialSalary, int finalSalary) {
//		TypedQuery<Employee> employees = entitymanager.createQuery("select e from Employee e where e.empsal between ?1 and ?2",Employee.class);
//		employees.setParameter(1, initialSalary);
//		employees.setParameter(2, finalSalary);
//		return employees.getResultList();
//	}
//
//	@Override
//	public List<Employee> getAllEmployeeByDesignation(String employeeDesignation) {
//		TypedQuery<Employee> employees = entitymanager.createQuery("select e from Employee e where e.empdesg=?1",Employee.class);
//		employees.setParameter(1, employeeDesignation);
//		return employees.getResultList();
//	}
//
//}
