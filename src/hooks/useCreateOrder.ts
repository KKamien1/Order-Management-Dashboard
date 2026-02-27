import {createOrder} from '@/api/main/createOrder';
import type {TOrder} from '@/schemas';
import {API_PATH} from '@/shared';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (order: TOrder) => createOrder(order),
    onSuccess: () =>
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === API_PATH.ORDERS,
      }),
  });
};
