import axios from 'axios';

// TODO: move to env variable
// Add interceptors for auth token and error handling

if (
  !import.meta.env.VITE_API_URL &&
  import.meta.env.VITE_USE_MOCKS !== 'true'
) {
  throw new Error('VITE_API_URL is not defined');
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
