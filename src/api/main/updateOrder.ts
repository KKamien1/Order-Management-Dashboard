import {API_PATH, MOCKS_DELAY} from '@/shared';
import {api} from '../api';
import {useMocksStore} from '@/store';
import type {TOrder} from '@/schemas';

export const updateOrderApi = async (order: TOrder) => {
  const url = `${API_PATH.ORDERS}/${order.id}`;
  const {data} = await api.put(url, order);
  return data;
};

const updateOrderMock = (order: TOrder) => {
  const {updateOrder} = useMocksStore.getState();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updateOrder(order));
    }, MOCKS_DELAY);
  });
};

export const updateOrder =
  import.meta.env.VITE_USE_MOCKS === 'true' ? updateOrderMock : updateOrderApi;
