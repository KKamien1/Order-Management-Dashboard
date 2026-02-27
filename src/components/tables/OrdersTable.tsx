import type {TOrder, TOrders} from '@/schemas';
import {Button} from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDeleteOrder} from '@/hooks';

type OrdersTableProps = {
  data: TOrders;
  onEdit: (order: TOrder) => void;
};

export function OrdersTable({data, onEdit}: OrdersTableProps) {
  const {mutate, isPending} = useDeleteOrder();

  const handleDelete = (id: string) => {
    mutate(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell align='right'>Country</TableCell>
            <TableCell align='right'>Shipping</TableCell>
            <TableCell align='right'>Actions</TableCell>
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
                {new Date(row.shipping).toLocaleDateString()}
              </TableCell>
              <TableCell align='right'>
                <Button onClick={() => handleDelete(row.id)}>
                  {isPending ? 'Deleting' : 'Remove'}
                </Button>
                <Button onClick={() => onEdit(row)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
