import type {TOrders} from '@/schemas';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type OrdersTableProps = {
  data: TOrders;
};

export function OrdersTable({data}: OrdersTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell align='right'>Country</TableCell>
            <TableCell align='right'>Shipping</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component='th' scope='row'>
                {row.price}
              </TableCell>
              <TableCell align='right'>{row.country}</TableCell>
              <TableCell align='right'>
                {row.shipping.toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
