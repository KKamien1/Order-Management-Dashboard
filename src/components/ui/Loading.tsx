import {Box, CircularProgress} from '@mui/material';

export function Loading() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '200px', // optional fallback
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <CircularProgress />
      <Box mt={4}>Loading data ...</Box>
    </Box>
  );
}
