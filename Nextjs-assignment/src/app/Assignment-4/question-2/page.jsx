// 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.
"use client";

import React, { useState } from "react";
import "@/app/styles/welcome4.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    agree: false,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-wrapper">
      <div className="content-container">
        {/* Instruction Paragraph OUTSIDE the form */}
        <p className="instruction">
          2. Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. 
          Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.
        </p>

        {/* Actual Form Below */}
        <form className="styled-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Simple Controlled Form</h2>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              I agree to the terms
            </label>
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
