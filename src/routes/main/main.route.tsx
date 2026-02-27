import {Box} from '@mui/material';

import {Link, Outlet, createRoute} from '@tanstack/react-router';

import {RootRoute} from '../root.route';
import {PATH} from '../../shared';

export const MainRoute = createRoute({
  getParentRoute: () => RootRoute,
  id: 'main',

  component: function MainLayout() {
    return (
      <>
        <Box
          display='flex'
          flexDirection='column'
          mx={1}
          px={2}
          minHeight={'100%'}
        >
          <nav>
            <Link to={PATH.DASHBOARD}>Dashboard</Link>
            <Link to={PATH.ORDER}>Order</Link>
          </nav>
          <Outlet />
        </Box>
      </>
    );
  },
});
