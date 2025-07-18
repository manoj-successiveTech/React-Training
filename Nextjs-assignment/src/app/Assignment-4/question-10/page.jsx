// 10.Create a form with Material-UI text fields and implement form validation. 
// Ensure that error messages are displayed when the user enters invalid data.


'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  CssBaseline,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

// ✅ Registration Form Component
const FormWithValidation = ({ themeMode }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // ✅ Field-wise validation rules
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  // ✅ Handle field changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('✅ Form submitted successfully!\n' + JSON.stringify(formData, null, 2));
      setFormData({ fullName: '', email: '', password: '' });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 450,
        mx: 'auto',
        mt: 5,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: themeMode === 'light' ? '#fff' : '#121212',
      }}
    >
      {/* ✅ Question Description */}
      <Typography variant="body1" mb={2} sx={{ color: themeMode === 'light' ? '#333' : '#ddd' }}>
        <strong>Question-10:</strong> Create a form with Material-UI text fields and implement form validation. Ensure that error messages are displayed when the user enters invalid data.
      </Typography>

      {/* ✅ Heading */}
      <Typography variant="h5" mb={2}>Registration Form</Typography>

      {/* Full Name Field */}
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={!!errors.fullName}
        helperText={errors.fullName}
        fullWidth
        margin="normal"
      />

      {/* Email Field */}
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />

      {/* Password Field */}
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        fullWidth
        margin="normal"
      />

      {/* Submit Button */}
      <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
        Submit
      </Button>
    </Box>
  );
};

// ✅ App with Theme Toggle
const App = () => {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 🌗 Theme Toggle Button */}
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>

      {/* ✅ Render the Form */}
      <FormWithValidation themeMode={mode} />
    </ThemeProvider>
  );
};

export default App;
