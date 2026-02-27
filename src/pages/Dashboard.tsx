import {ErrorMessage, Loading} from '@/components';
import {useOrders} from '@/hooks';

export function Dashboard() {
  const {data, isLoading, isError, error} = useOrders();

  if (isError) return <ErrorMessage isError={isError} error={error} />;

  return (
    <section style={{marginTop: '16px'}}>
      {isLoading ? <Loading /> : <div>{JSON.stringify(data)}</div>}
    </section>
  );
}
