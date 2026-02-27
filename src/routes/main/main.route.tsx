import {Box} from '@mui/material';

import {Outlet, createRoute} from '@tanstack/react-router';

import {RootRoute} from '@/routes/root.route';
import {PATH} from '@/shared';
import {NavItem} from '@/components';

const NAV_ITEMS = [
  {to: PATH.DASHBOARD, label: 'Dashboard'},
  {to: PATH.ORDER, label: 'Orders'},
] as const;

export const MainRoute = createRoute({
  getParentRoute: () => RootRoute,
  id: 'main',

  component: function MainLayout() {
    return (
      <Box display='flex' minHeight='100vh'>
        <Box
          component='nav'
          sx={{
            width: 200,
            flexShrink: 0,
            borderRight: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'column',
            pt: 4,
          }}
        >
          <Box display='flex' flexDirection='column' gap={0.5}>
            {NAV_ITEMS.map(({to, label}) => (
              <NavItem key={to} to={to} label={label} />
            ))}
          </Box>
        </Box>

        <Box component='main' flex={1} p={3} overflow='auto'>
          <Outlet />
        </Box>
      </Box>
    );
  },
});
