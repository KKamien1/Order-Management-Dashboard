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
