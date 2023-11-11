import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import useSetTheme from '../../hooks/useSetTheme';

const themeConfig = (isDarkMode: boolean) => createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#00AD7C',
    },
    background: {
      default: isDarkMode ? '#1c1917' : '#fafaf9',
      paper: isDarkMode ? '#292524' : '#f5f5f4',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: 'Poppins, arial, sans-serif',
    fontSize: 14,
    allVariants: {
      fontFamily: 'Poppins, arial, sans-serif',
    },
    h1: {
      fontFamily: 'Zilla Slab, Times New Roman, serif',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Zilla Slab, Times New Roman, serif',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Zilla Slab, Times New Roman, serif',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Zilla Slab, Times New Roman, serif',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Zilla Slab, Times New Roman, serif',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'Zilla Slab, Times New Roman, serif',
      fontWeight: 'bold',
    },
  },
});

export default function CustomTheme({ children }: Partial<ThemeProviderProps>) {
  const { isDarkMode } = useSetTheme();
  return (
    <ThemeProvider theme={themeConfig(isDarkMode)}>{children}</ThemeProvider>
  );
}
