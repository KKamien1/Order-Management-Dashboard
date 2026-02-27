import {Box} from '@mui/material';

import {Link, Outlet, createRootRouteWithContext} from '@tanstack/react-router';

export const RootRoute = createRootRouteWithContext()({
  component: function RootLayout() {
    return (
      <Box display='flex' flexDirection='column' minHeight='100vh'>
        <h1>Order Management Dashboard</h1>
        <Outlet />
      </Box>
    );
  },
  notFoundComponent: () => {
    return (
      <main>
        <p>
          Page not found. The page you are looking for does not exist or has
          been moved.
        </p>
        <Link to='/'>Back to Home</Link>
      </main>
    );
  },
});
