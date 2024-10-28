import { drawerWidth } from './NaviagationBar';
import { AppBar, Button, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem('token');

    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App header
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}