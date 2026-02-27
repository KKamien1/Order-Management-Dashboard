import {getErrorMessage} from '@/shared/utils/getErrorMessage';

import {Alert} from '@mui/material';

type ErrorMessageProps = {
  isError: boolean;
  error?: unknown;
};

export function ErrorMessage({isError, error}: ErrorMessageProps) {
  const errorMessage = getErrorMessage(error);
  return isError ? (
    <Alert
      severity='error'
      sx={{
        mb: 4,
      }}
    >
      {errorMessage}
    </Alert>
  ) : null;
}
