import {Box} from '@mui/material';
import {useRouterState, Link} from '@tanstack/react-router';

interface NavItemProps {
  to: string;
  label: string;
}

export function NavItem({to, label}: NavItemProps) {
  const {location} = useRouterState();
  const isActive = location.pathname === to;

  return (
    <Box
      sx={{
        borderLeft: '2px solid',
        borderColor: isActive ? 'text.primary' : 'transparent',
        bgcolor: isActive ? 'action.hover' : 'transparent',
        transition: 'background 0.15s',
        '&:hover': {bgcolor: 'action.hover'},
      }}
    >
      <Link
        to={to}
        style={{
          display: 'block',
          padding: '1rem 2rem',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: isActive ? '#111' : '#aaa',
          transition: 'color 0.15s',
        }}
      >
        {label}
      </Link>
    </Box>
  );
}
