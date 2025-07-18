// 13.install  Yup. Define a Yup validation schema for a more complex form. Include validation rules for fields like email, password, and phone number. Ensure that error messages are displayed for each validation rule.
// Implement real-time validation feedback using Material-UI's TextField component. Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well)

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password should not exceed 16 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[0-9]/, "Must include at least one number")
    .matches(/[@$!%*?&#]/, "Must include at least one special character"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      "Phone number must be valid (10 digits, optional country code)"
    ),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    alert("Form submitted:\n" + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" mb={3} align="center">
        Question-13: Registration Form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Page;
