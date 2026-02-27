export const INITIAL_DATA = [];

export const PATHNAME = {
  DASHBOARD: 'dashboard',
  ORDER: 'order',
} as const;

export const PATH = {
  ROOT: '/',
  DASHBOARD: `/${PATHNAME.DASHBOARD}`,
  ORDER: `/${PATHNAME.ORDER}`,
} as const;

export const QUERY_KEY = {
  DASHBOARD: PATHNAME.DASHBOARD,
} as const;

export const DEFAULT_ERROR_MESSAGE =
  'An error occurred while fetching data. Please try again later.';
