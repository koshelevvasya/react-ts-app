import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../services/api';
import { User } from '../models/DomainModels';
import { CircularProgress } from '@mui/material';
import { SnackBarContext } from '../App';
import { useContext } from 'react';

export default function Home() {
  const { setSnackBar } = useContext(SnackBarContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    const loadUsers = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const users = await api.getUsers();
        setData(users);
      } catch (error: any) {
        console.log(error);
        setSnackBar(`Error fetching data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();
  }, [setSnackBar]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '60px'}}>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow
                key={row.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row" sx={{width: '60px'}}>
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}