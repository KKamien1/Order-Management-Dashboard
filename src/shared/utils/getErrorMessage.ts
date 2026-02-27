import {AxiosError} from 'axios';
import {ZodError} from 'zod';
import {DEFAULT_ERROR_MESSAGE, ERROR_CODES} from '../consts';

export function getErrorMessage(
  error: unknown,
  defaultMsg: string = DEFAULT_ERROR_MESSAGE
): string {
  if (error instanceof AxiosError) {
    if (error.response?.data && typeof error.response.data === 'string') {
      return error.response.data;
    }
    if (
      error.response?.data &&
      typeof error.response.data === 'object' &&
      'code' in error.response.data
    ) {
      return (
        ERROR_CODES[error.response.data.code as keyof typeof ERROR_CODES] ||
        error.response.data.details ||
        error.response.data.code
      );
    }
  }

  if (error instanceof ZodError) {
    return error.issues
      .map((issue) => {
        const path = issue.path.length > 0 ? issue.path.join('.') : 'root';
        return `${path}: ${issue.message}`;
      })
      .join('\n');
  }

  return defaultMsg;
}
