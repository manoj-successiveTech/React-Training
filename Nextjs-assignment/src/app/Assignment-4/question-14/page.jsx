// ✅ Question 14:
// Create a new form and implement form submission handling.
// Ensure that the form cannot be submitted if there are validation errors.
// Display a summary of errors if the user attempts to submit an invalid form.



"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  List,
  ListItem,
} from "@mui/material";


// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      "Phone number must be valid (10 digits, optional country code)"
    ),
});

// Reusable Formik field using MUI's TextField
const FormikTextField = ({ name, label, type = "text" }) => (
  <Field name={name}>
    {({ field, form }) => (
      <TextField
        {...field}
        type={type}
        label={label}
        fullWidth
        margin="normal"
        error={Boolean(form.touched[name] && form.errors[name])}
        helperText={form.touched[name] && form.errors[name]}
        onChange={(e) => {
          form.handleChange(e);
          form.validateField(name);
        }}
        onBlur={form.handleBlur}
      />
    )}
  </Field>
);

// Main Component
const Page = () => {
  const [submitErrors, setSubmitErrors] = useState([]);

  return (
    <div>
      <Typography variant="h6" align="center" mt={4} mb={2}>
        14. Create a new form and implement form submission handling. Ensure that the form
        cannot be submitted if there are validation errors. Display a summary of errors
        if the user attempts to submit an invalid form.
      </Typography>

      <Box
        sx={{
          maxWidth: 450,
          mx: "auto",
          mt: 3,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h5" mb={3} align="center">
          Registration Form
        </Typography>

        <Formik
          initialValues={{ email: "", password: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitErrors([]);
            alert("Form submitted:\n" + JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ handleSubmit, validateForm, isSubmitting }) => {
            // Custom submit handler to collect and show summary of errors
            const handleFormSubmit = async (e) => {
              e.preventDefault();
              const errors = await validateForm();
              if (Object.keys(errors).length > 0) {
                setSubmitErrors(Object.values(errors));
              } else {
                setSubmitErrors([]);
                handleSubmit();
              }
            };

            return (
              <Form noValidate onSubmit={handleFormSubmit}>
                {/* Error Summary */}
                {submitErrors.length > 0 && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">
                      Please fix the following errors:
                    </Typography>
                    <List dense>
                      {submitErrors.map((err, idx) => (
                        <ListItem key={idx}>• {err}</ListItem>
                      ))}
                    </List>
                  </Alert>
                )}

                {/* Fields */}
                <FormikTextField name="email" label="Email" />
                <FormikTextField name="password" label="Password" type="password" />
                <FormikTextField name="phone" label="Phone Number" />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{ mt: 3 }}
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </div>
  );
};

export default Page;
