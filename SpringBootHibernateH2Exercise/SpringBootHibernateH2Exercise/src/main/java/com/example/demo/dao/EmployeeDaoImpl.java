package com.example.demo.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employee;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {
    
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public String addEmployee(Employee employee) {
        entityManager.persist(employee);
        return "Employee added successfully";
    }

    @Override
    public String updateEmployee(Employee employee) {
        entityManager.merge(employee);
        return "Employee updated successfully";
    }

    @Override
    public String deleteEmployee(int employeeId) {
        Employee employee = getEmployeeById(employeeId);
        if (employee != null) {
            entityManager.remove(employee);
            return "Employee deleted successfully";
        }
        return "Employee not found";
    }

    @Override
    public Employee getEmployeeById(int employeeId) {
        return entityManager.find(Employee.class, employeeId);
    }

    @Override
    public List<Employee> getAllEmployee() {
        TypedQuery<Employee> query = entityManager.createQuery("SELECT e FROM Employee e", Employee.class);
        return query.getResultList();
    }

    @Override
    public List<Employee> getAllEmployeeBetweenSalaries(int initialSalary, int finalSalary) {
        TypedQuery<Employee> query = entityManager.createQuery("SELECT e FROM Employee e WHERE e.empsal BETWEEN :initialSalary AND :finalSalary", Employee.class);
        query.setParameter("initialSalary", initialSalary);
        query.setParameter("finalSalary", finalSalary);
        return query.getResultList();
    }

    @Override
    public List<Employee> getAllEmployeeByDesignation(String employeeDesignation) {
        TypedQuery<Employee> query = entityManager.createQuery("SELECT e FROM Employee e WHERE e.empdesg = :designation", Employee.class);
        query.setParameter("designation", employeeDesignation);
        return query.getResultList();
    }
}
