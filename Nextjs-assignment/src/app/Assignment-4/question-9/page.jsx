// 9.Implement a responsive sidebar navigation using Material-UI's Drawer component and include it as part of the layout.js 
// so that the sidebar appears consistently across all pages. 
// The sidebar should include links that allow users to navigate between different sections of your web app.


'use client';
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Page = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: 'center',
      }}
    >
      <Box maxWidth={600}>
        <Typography variant="h5" gutterBottom>
          Question-9
        </Typography>

        <Typography variant="body1">
          ✅ This page is part of a web application with a responsive sidebar layout.
          <br />
          The sidebar is implemented using Material-UI's <strong>Drawer</strong> component and is integrated in the <code>layout.js</code> file.
          <br />
          The sidebar appears consistently across all pages and provides navigation links to different sections of the application.
        </Typography>
      </Box>
    </Box>
  );
};

export default Page;




















// import React from 'react'

// const Page = () => {
//   return (
//     <>
//     <div>Question-9</div>
//     <p>9.Implement a responsive sidebar navigation using Material-UI's Drawer component and include it as part of the layout.js so that the sidebar appears consistently across all pages. 
//         The sidebar should include links that allow users to navigate between different sections of your web app.</p>
//     </>
//   )
// }

// export default Page