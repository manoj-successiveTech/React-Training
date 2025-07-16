// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

'use client'
import React, { useState } from 'react';
import '@/app/styles/welcome2.css';

const PersonForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
    
    <div className='question'>Question-2<br/>Create a functional component called PersonForm.Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
            Render three input fields for the user to enter their first name, last name, and age.As the user types, update the respective state variables.
            Display the entered information below the input fields.</div>

        <div className="container">
        <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
            type="text"
            id="age"
            value={age}
            onChange={handleAgeChange}
            />
        </div>
        <div className="info-display">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
        </div>
        </div>
        </>

  );
};

export default PersonForm;