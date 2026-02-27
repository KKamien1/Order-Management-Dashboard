import {updateOrder} from '@/api/main/updateOrder';
import type {TOrder} from '@/schemas';
import {API_PATH} from '@/shared';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (order: TOrder) => updateOrder(order),
    onSuccess: () =>
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === API_PATH.ORDERS,
      }),
  });
};
