import {ErrorMessage, Loading, OrderModalForm} from '@/components';
import {OrdersTable} from '@/components/tables/OrdersTable';
import {useOrders} from '@/hooks';
import type {TOrder} from '@/schemas';
import {Box, Button} from '@mui/material';
import {useState} from 'react';

export function Orders() {
  const {data, isLoading, isError, error} = useOrders();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<TOrder | undefined>();

  if (isError) return <ErrorMessage error={error} />;
  if (isLoading) return <Loading />;

  const handleClose = () => {
    setModalOpen(false);
    setSelectedOrder(undefined);
  };

  const handleEdit = (order: TOrder) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  return (
    <section style={{marginTop: '16px'}}>
      <Box display='flex' justifyContent='flex-end'>
        <Button onClick={() => setModalOpen(true)}>Add</Button>
      </Box>
      <OrdersTable data={data} onEdit={handleEdit} />
      <OrderModalForm
        key={selectedOrder?.id ?? (modalOpen ? 'create' : '')}
        open={modalOpen}
        onClose={handleClose}
        order={selectedOrder}
      />
    </section>
  );
}
