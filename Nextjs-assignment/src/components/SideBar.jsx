'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  AppBar as MuiAppBar,
  Toolbar,
  CssBaseline,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

const drawerWidth = 280;

const assignments = [
  { name: 'Assignment 1', path: '/Assignment-1', questions: 6 },    //  assignment-1 total questions(6) path here .
  { name: 'Assignment 2', path: '/Assignment-2', questions: 19 },   //  assignment-2 total questions(19) path here .
  { name: 'Assignment 3', path: '/Assignment-3', questions: 6 },    //  assignment-3 total questions(6) path here .
  { name: 'Assignment 4', path: '/Assignment-4', questions: 14 },   //  assignment-4 total questions(14) path here .
   { name: 'Assignment 5', path:'/Assignment-5', questions: 10 },  //  assignment-5 total questions(14) path here .
];

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [expandedAssignment, setExpandedAssignment] = useState(null);
  const pathname = usePathname();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const toggleAssignment = (assignmentPath) => {
    setExpandedAssignment(prev =>
      prev === assignmentPath ? null : assignmentPath
    );
  };

  return (
    <>    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <h2 style={{ flexGrow: 1, color: 'white' }}>React Assignments</h2>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerOpen}
            sx={open ? { display: 'none' } : {}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {assignments.map((assignment, index) => (
            <React.Fragment key={assignment.name}>
              <ListItemButton onClick={() => toggleAssignment(assignment.path)}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}

                <ListItemText primary={assignment.name} />
                {expandedAssignment === assignment.path ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={expandedAssignment === assignment.path} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Array.from({ length: assignment.questions }, (_, qIndex) => (
                    <ListItemButton
                      key={qIndex}
                      sx={{ pl: 4 }}
                      component={Link}
                      href={`${assignment.path}/question-${qIndex + 1}`}
                      selected={pathname === `${assignment.path}/question-${qIndex + 1}`}
                    >
                      <ListItemText primary={`Question ${qIndex + 1}`} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>

    </>

  );
}
