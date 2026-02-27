import {ErrorMessage, Loading} from '@/components';
import {useStatsOrders} from '@/hooks';
import {Box, Card, Typography} from '@mui/material';

export function Dashboard() {
  const {data, isLoading, isError, error} = useStatsOrders();

  if (isError) return <ErrorMessage error={error} />;
  if (isLoading) return <Loading />;

  return (
    <section style={{marginTop: '16px'}}>
      <Box display='flex' flexDirection='column' gap={2}>
        {data?.map(({label, value}) => (
          <Card variant='outlined' key={label}>
            <Typography align='center' variant='subtitle1' gutterBottom>
              {label}
            </Typography>
            <Typography align='center' variant='h3' gutterBottom>
              {value}
            </Typography>
          </Card>
        ))}
      </Box>
    </section>
  );
}
