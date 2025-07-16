//15. Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

'use client'
import React, { useState, useMemo } from 'react';
import '@/app/styles/welcome2.css';

const StudentList = () => {
  const [students, setStudents] = useState(['Anany', 'Aryan', 'Manoj']);

  const memoizedStudents = useMemo(() => students, [students]);

  const addStudent = () => {
    const newStudent = `Student${students.length + 1}`;
    setStudents([...students, newStudent]);
  };

  return (
    <div className='container'>
      <h1>Student List</h1>
      <ul>
        {memoizedStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;