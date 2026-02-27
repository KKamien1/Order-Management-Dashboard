import type {TOrders} from '@/schemas';
import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface MocksState {
  orders: TOrders;
  setOrders: (data: TOrders) => void;
}

const INITIAL_DATA: TOrders = [
  {
    id: crypto.randomUUID(),
    price: 100,
    country: 'USA',
    shipping: new Date('2026-03-01T00:00:00Z'),
  },
  {
    id: crypto.randomUUID(),
    price: 46,
    country: 'Poland',
    shipping: new Date('2026-03-03T00:00:00Z'),
  },
  {
    id: crypto.randomUUID(),
    price: 45.44,
    country: 'USA',
    shipping: new Date('2026-03-02T00:00:00Z'),
  },
];

export const useMocksStore = create<MocksState>()(
  devtools(
    persist(
      (set) => ({
        orders: INITIAL_DATA,
        setOrders: (data: TOrders) => set({orders: data}),
      }),
      {name: 'MocksStore'}
    )
  )
);
