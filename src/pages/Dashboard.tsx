import {ErrorMessage, Loading} from '@/components';
import {useStatsOrders} from '@/hooks';
import {Box, Card, Typography} from '@mui/material';

export function Dashboard() {
  const {data, isLoading, isError, error} = useStatsOrders();

  if (isError) return <ErrorMessage error={error} />;

  return (
    <section style={{marginTop: '16px'}}>
      {isLoading ? (
        <Loading />
      ) : (
        <Box flexDirection='column' gap={2}>
          {data?.map((stat) => (
            <Card variant='outlined'>
              <Typography align='center' variant='subtitle1' gutterBottom>
                {stat.label}
              </Typography>
              <Typography align='center' variant='h3' gutterBottom>
                {stat.value}
              </Typography>
            </Card>
          ))}
        </Box>
      )}
    </section>
  );
}
