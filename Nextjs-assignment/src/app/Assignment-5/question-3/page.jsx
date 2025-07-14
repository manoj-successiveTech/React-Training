// 3. Enhance your Next.js component that fetches data from a public API by adding a loading indicator, such as a spinner. This indicator should be visible while the data is being fetched and hidden once the data has loaded successfully. Ensure the loading state is properly managed on the client side, especially when implementing retry functionality. Use the native fetch function and integrate this loading feedback seamlessly with the error handling and data display in your component.

'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Paper,
} from '@mui/material';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API URL

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // <-- Change if needed

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch users. Please try again.');
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <div>Question 3. Enhance your Next.js component that fetches data from a public API by adding a loading indicator, such as a spinner. This indicator should be visible while the data is being fetched and hidden once the data has loaded successfully. 
Ensure the loading state is properly managed on the client side, especially when implementing retry functionality. 
Use the native fetch function and integrate this loading feedback seamlessly with the error handling and data display in your component.
</div>
   
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Fetched Users List
      </Typography>

      {loading ? (
        <CircularProgress sx={{ display: 'block', mx: 'auto' }} />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Paper elevation={3} sx={{ mt: 2 }}>
          <List>
            {users.map((user) => (
              <ListItem key={user.id}>
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
     </>
  );
};

export default UsersPage;
