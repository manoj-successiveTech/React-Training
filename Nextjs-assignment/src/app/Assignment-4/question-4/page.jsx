// 4.Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.


"use client";

import "@/app/styles/welcome4.css";
import Input from "@/components/InputComponent";
import React, { useState } from "react";

const Page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      setMessage("❌ Both fields are required.");
      return;
    }

    if (password.includes(" ")) {
      setMessage("❌ Password must not contain spaces.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    setMessage("✅ Passwords match! Form submitted.");
  };

  return (
    <div className="form-wrapper">
      <div className="content-container">
        <p className="instruction">
          4. Build a registration form with two password fields. Implement
          controlled components for both password inputs. Add a validation rule to
          ensure that the two passwords match before allowing the form submission.
        </p>

        <div className="form-container">
          <h2 className="form-title">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
          {message && <div className="form-message">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default Page;
