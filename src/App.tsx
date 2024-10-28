import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const AuthContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (state: boolean) => {}
});

export const SnackBarContext = React.createContext({
  setSnackBar: (state: string | null) => {}
});

export default function App() {
  const defaultIsAuthenticated = !!localStorage.getItem('token');

  const [isAuthenticated, setIsAuthenticated] = useState(defaultIsAuthenticated);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    setError(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <SnackBarContext.Provider value={{ setSnackBar: setError }}>
          <RouterProvider router={router} />
        </SnackBarContext.Provider>
      </AuthContext.Provider>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}