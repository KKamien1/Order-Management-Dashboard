import {createRoute} from '@tanstack/react-router';

import {MainRoute} from './main.route';
import {PATHNAME} from '../../shared';

export const OrderRoute = createRoute({
  getParentRoute: () => MainRoute,
  path: PATHNAME.ORDER,
  component: function Order() {
    return <section>Order</section>;
  },
});
