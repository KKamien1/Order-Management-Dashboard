import {RouterProvider} from '@tanstack/react-router';

import {appRouter} from './appRouter';

export function Router() {
  return <RouterProvider router={appRouter} />;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof appRouter;
  }
}
