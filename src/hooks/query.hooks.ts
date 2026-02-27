import {getAllOrders} from '@/api';
import type {TOrder} from '@/schemas';
import {API_PATH} from '@/shared';
import {useQuery} from '@tanstack/react-query';

export function useOrders() {
  return useQuery({
    queryKey: [API_PATH.ORDERS],
    queryFn: getAllOrders,
    refetchOnWindowFocus: false,
  });
}

export function useStatsOrders() {
  return useQuery({
    queryKey: [API_PATH.ORDERS],
    queryFn: getAllOrders,
    select: (orders) => {
      const totalOrders = orders.length;
      const totalRevenue = orders.reduce(
        (sum: number, order: TOrder) => sum + order.price,
        0
      );
      const uniqueCountries = new Set(
        orders.map((order: TOrder) => order.country)
      ).size;

      return [
        {label: 'Orders', value: totalOrders},
        {label: 'Revenue', value: totalRevenue},
        {label: 'Countries', value: uniqueCountries},
      ];
    },

    refetchOnWindowFocus: false,
  });
}
