import {API_PATH, MOCKS_DELAY} from '@/shared';
import {api} from '../api';
import {useMocksStore} from '@/store';
import type {TId} from '@/schemas';

export const deleteOrderApi = async (id: TId) => {
  const url = `${API_PATH.ORDERS}/${id}`;
  const {data} = await api.delete(url);
  return data;
};

const deleteOrderMock = (id: TId) => {
  const {deleteOrder} = useMocksStore.getState();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(deleteOrder(id));
    }, MOCKS_DELAY);
  });
};

export const deleteOrder =
  import.meta.env.VITE_USE_MOCKS === 'true' ? deleteOrderMock : deleteOrderApi;
