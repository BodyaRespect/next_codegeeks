// src/app/layout.tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>{children}</main>
    </ThemeProvider>
  );
}
