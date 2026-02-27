import {getAllOrders} from '@/api';
import {PATHNAME} from '@/shared';
import {useQuery} from '@tanstack/react-query';

export function useOrders() {
  return useQuery({
    queryKey: [PATHNAME.ORDER],
    queryFn: getAllOrders,
    refetchOnWindowFocus: false,
  });
}
