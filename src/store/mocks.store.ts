import type {TId, TOrder, TOrders} from '@/schemas';
import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface MocksState {
  orders: TOrders;
  createOrder: (order: TOrder) => void;
  updateOrder: (order: TOrder) => void;
  deleteOrder: (id: TId) => void;
}

const INITIAL_DATA: TOrders = [
  {
    id: crypto.randomUUID(),
    price: 80,
    country: 'USA',
    shipping: new Date('2026-03-01T00:00:00Z'),
  },
  {
    id: crypto.randomUUID(),
    price: 25,
    country: 'Poland',
    shipping: new Date('2026-03-03T00:00:00Z'),
  },
  {
    id: crypto.randomUUID(),
    price: 70,
    country: 'Holland',
    shipping: new Date('2026-03-02T00:00:00Z'),
  },
];

export const useMocksStore = create<MocksState>()(
  devtools(
    persist(
      (set) => ({
        orders: INITIAL_DATA,
        createOrder: (order: TOrder) =>
          set((state) => ({
            orders: [...state.orders, order],
          })),
        updateOrder: (order: TOrder) =>
          set((state) => ({
            orders: state.orders.map((o) => (o.id === order.id ? order : o)),
          })),
        deleteOrder: (id: TId) =>
          set((state) => ({
            orders: state.orders.filter((order) => order.id !== id),
          })),
      }),
      {name: 'MocksStore'}
    )
  )
);
