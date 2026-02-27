import {createRoute} from '@tanstack/react-router';

import {MainRoute} from './main.route';
import {PATHNAME} from '../../shared';
import {Dashboard} from '@/pages';

export const DashboardRoute = createRoute({
  getParentRoute: () => MainRoute,
  path: PATHNAME.DASHBOARD,
  component: Dashboard,
});
