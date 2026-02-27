import {createRoute} from '@tanstack/react-router';

import {MainRoute} from './main.route';
import {PATHNAME} from '../../shared';

export const DashboardRoute = createRoute({
  getParentRoute: () => MainRoute,
  path: PATHNAME.DASHBOARD,
  component: function Dashboard() {
    return <section>Dashboard</section>;
  },
});
