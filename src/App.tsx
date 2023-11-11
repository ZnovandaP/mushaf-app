import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CssBaseline } from '@mui/material';
// * custom routing
import router from './router/Router';
import CustomTheme from './components/theme/Theme';

import ContextProvider from './context/ContextProvider';
import queryClient from './utils/queryClient';

import './assets/font/font.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <CustomTheme>
          <CssBaseline />
          <RouterProvider router={router} />
        </CustomTheme>
      </ContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
