"use client"

import { Container, Typography, Grid2, Button } from '@mui/material';
import Image from 'next/image';

export const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ color: '#000000', padding: 4 }}
      >
        Welcome to the Event Management App
      </Typography>
        
      <Typography
        variant="h6"
        align="center"
        sx={{ color: '#000000', mb: 4 }}
      >
        Discover and manage events with ease, use the navigation menu to explore ⬆
      </Typography>

      <Grid2 container spacing={4} justifyContent="center" alignItems="center">
        <Grid2 size={{ xs: 12, sm: 6, md: 4,}} display="flex" justifyContent="center">
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </a>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4,}} display="flex" justifyContent="center">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Home;
