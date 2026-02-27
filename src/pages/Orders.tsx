import {ErrorMessage, Loading} from '@/components';
import {OrdersTable} from '@/components/tables/OrdersTable';
import {useOrders} from '@/hooks';

export function Orders() {
  const {data, isLoading, isError, error} = useOrders();

  if (isError) return <ErrorMessage error={error} />;

  return (
    <section style={{marginTop: '16px'}}>
      {isLoading ? <Loading /> : <OrdersTable data={data} />}
    </section>
  );
}
