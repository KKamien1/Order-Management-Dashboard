import {createRoute, redirect} from '@tanstack/react-router';

import {MainRoute} from './main.route';
import {PATH} from '../../shared';

export const IndexRoute = createRoute({
  getParentRoute: () => MainRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({to: PATH.DASHBOARD});
  },
});
