export const PATHNAME = {
  DASHBOARD: 'dashboard',
  ORDER: 'orders',
} as const;

export const PATH = {
  ROOT: '/',
  DASHBOARD: `/${PATHNAME.DASHBOARD}`,
  ORDER: `/${PATHNAME.ORDER}`,
} as const;

export const DEFAULT_ERROR_MESSAGE =
  'An error occurred while fetching data. Please try again later.';
