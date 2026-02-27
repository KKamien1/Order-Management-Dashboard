import {
  DashboardRoute,
  IndexRoute,
  MainRoute,
  OrderRoute,
  RootRoute,
} from '@/routes';
import {createRouter} from '@tanstack/react-router';

const mainTree = MainRoute.addChildren([
  DashboardRoute,
  IndexRoute,
  OrderRoute,
]);

const routeTree = RootRoute.addChildren([mainTree]);

export const appRouter = createRouter({
  routeTree: routeTree,
});
