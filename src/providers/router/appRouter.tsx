import {createRouter} from '@tanstack/react-router';
import {RootRoute} from '../../routes/root.route';
import {MainRoute} from '../../routes/main/main.route';
import {IndexRoute} from '../../routes/main/index.route';
import {DashboardRoute} from '../../routes/main/dashboard.route';
import {OrderRoute} from '../../routes/main/order.route';

const mainTree = MainRoute.addChildren([IndexRoute, DashboardRoute, OrderRoute]);
const routeTree = RootRoute.addChildren([mainTree]);

export const appRouter = createRouter({
  routeTree: routeTree,
});
