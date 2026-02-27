import axios from 'axios';

// TODO: move to env variable
// Add interceptors for auth token and error handling
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
