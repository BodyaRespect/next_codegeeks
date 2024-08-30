// src/app/page.tsx

import { Container, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the Event Management App
      </Typography>
      
      <Typography variant="h6" align="center" paragraph>
        Discover and manage events with ease. Use the navigation menu to explore:
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Button
            href="/events"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            View Events
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            href="/events/create"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
          >
            Create Event
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            variant="contained"
            color="success"
            size="large"
          >
            Vercel
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Grid>
      </Grid>
    </Container>
  );
}
