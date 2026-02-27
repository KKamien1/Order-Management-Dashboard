import {API_PATH, MOCKS_DELAY} from '@/shared';
import {api} from '../api';
import {useMocksStore} from '@/store';
import type {TOrder} from '@/schemas';

export const createOrderApi = async (order: TOrder) => {
  const {data} = await api.post(API_PATH.ORDERS, order);
  return data;
};

const createOrderMock = (order: TOrder) => {
  const {createOrder} = useMocksStore.getState();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(createOrder(order));
    }, MOCKS_DELAY);
  });
};

export const createOrder =
  import.meta.env.VITE_USE_MOCKS === 'true' ? createOrderMock : createOrderApi;
