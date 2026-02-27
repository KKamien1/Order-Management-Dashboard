import {createRoute} from '@tanstack/react-router';

import {MainRoute} from './main.route';
import {PATHNAME} from '../../shared';
import {Orders} from '@/pages';

export const OrderRoute = createRoute({
  getParentRoute: () => MainRoute,
  path: PATHNAME.ORDER,
  component: Orders,
});
