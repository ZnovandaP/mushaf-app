import * as React from 'react';
import DarkModeContextProvider from './darkMode/DarkModeContext';
import OpenSnakbarContextProvider from './openSnackbar/OpenSnackbarContext';

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeContextProvider>
      <OpenSnakbarContextProvider>
        {children}
      </OpenSnakbarContextProvider>
    </DarkModeContextProvider>
  );
}
