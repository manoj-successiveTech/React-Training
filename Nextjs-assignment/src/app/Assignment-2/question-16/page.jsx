// 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.



'use client'
import React, { useState, useMemo } from 'react';
import '@/app/styles/welcome2.css';


const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 70000 },
  ]);

  const updateSalaries = () => {
    const newSalaries = employees.map(employee => ({
      ...employee,
      salary: Math.floor(Math.random() * 100000) + 30000,
    }));
    setEmployees(newSalaries);
  };

  const averageSalary = useMemo(() => {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return employees.length > 0 ? totalSalary / employees.length : 0;
  }, [employees]);

  return (
    <div className="container">
      <h1>Employee Salary</h1>
      <p>Average Salary: ₹{averageSalary.toFixed(2)}</p>
    ``  <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;
