import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#000000',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid #333333',
      }}
    >
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#ffffff' }}
          >
            Event Management App 🥷
          </Typography>

          <Button
            color="inherit"
            component={Link}
            href="/"
            sx={{
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#333333',
              },
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            href="/events"
            sx={{
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#333333',
              },
            }}
          >
            Events
          </Button>

          <Button
            color="inherit"
            component={Link}
            href="/events/create"
            sx={{
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#333333',
              },
            }}
          >
            Create
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
