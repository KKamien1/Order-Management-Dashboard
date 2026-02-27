import {api} from '@/api';
import {OrdersSchema} from '@/schemas';
import {API_PATH} from '@/shared';

const fetchAllOrders = () =>
  api.get(API_PATH.ORDERS).then((response) => {
    OrdersSchema.parse(response.data);
    return response.data;
  });

const mockAllOrders = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  });

export const getAllOrders =
  import.meta.env.VITE_USE_MOCKS === 'true' ? mockAllOrders : fetchAllOrders;
