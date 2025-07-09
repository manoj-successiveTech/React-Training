// 11.Design a modal dialog component using Material-UI's Dialog component. 
// Use it to display additional information or capture user input within your app.


'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from '@mui/material';

const ModalDialogExample = () => {
  // ✅ State for controlling dialog open/close
  const [open, setOpen] = useState(false);

  // ✅ State to store form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // ✅ Open dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // ✅ Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  // ✅ Handle input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ Submit form inside modal
  const handleSubmit = () => {
    alert('Form submitted!\n' + JSON.stringify(formData, null, 2));
    setOpen(false);
    setFormData({ name: '', email: '' }); // Reset form
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* ✅ Question Description */}
      <Typography align="center" mb={4}>
        <strong>Question-11:</strong> Design a modal dialog component using Material-UI's Dialog component.
        Use it to display additional information or capture user input within your app.
      </Typography>

      {/* ✅ Button to open modal */}
      <Box textAlign="center">
        <Button variant="contained" onClick={handleOpen}>
          Open Dialog
        </Button>
      </Box>

      {/* ✅ MUI Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Your Information</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModalDialogExample;
