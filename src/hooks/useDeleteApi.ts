import {deleteOrder} from '@/api/main/deleteOrder';
import type {TId} from '@/schemas';
import {API_PATH} from '@/shared';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useDeleteApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: TId) => deleteOrder(id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === API_PATH.ORDERS,
      }),
  });
};
