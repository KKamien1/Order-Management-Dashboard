import {api} from '@/api';
import {OrdersSchema} from '@/schemas';
import {API_PATH, MOCKS_DELAY} from '@/shared';
import {useMocksStore} from '@/store';

const fetchAllOrders = () =>
  api.get(API_PATH.ORDERS).then((response) => {
    OrdersSchema.parse(response.data);
    return response.data;
  });

const mockAllOrders = () => {
  const {orders} = useMocksStore.getState();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, MOCKS_DELAY);
  });
};

export const getAllOrders =
  import.meta.env.VITE_USE_MOCKS === 'true' ? mockAllOrders : fetchAllOrders;
