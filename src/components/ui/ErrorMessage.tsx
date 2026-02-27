import {getErrorMessage} from '@/shared/utils/getErrorMessage';

import {Alert} from '@mui/material';

type ErrorMessageProps = {
  error?: unknown;
};

export function ErrorMessage({error}: ErrorMessageProps) {
  const errorMessage = getErrorMessage(error);
  return (
    <Alert
      severity='error'
      sx={{
        m: 4,
      }}
    >
      {errorMessage}
    </Alert>
  );
}
