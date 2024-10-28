import Box from '@mui/material/Box';
import { drawerWidth } from './NaviagationBar';
import { Toolbar } from '@mui/material';
import * as React from 'react';

export default function PageContent({children}: {children: JSX.Element}) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />

      {children}
    </Box>
  );
}