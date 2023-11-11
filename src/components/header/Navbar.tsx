import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar, Stack, Toolbar, Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ButtonOpenDrawer from '../button/ButtonOpenDrawer';
import ButtonChangeTheme from '../button/ButtonChangeTheme';
import ButtonSearch from '../button/ButtonSearch';

type NavbarProps = {
  drawerIsOpen: boolean,
  onOpenDrawer: () => void
};

const HeadRouteLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'underline',
    textDecorationStyle: 'wavy',
    textDecorationThickness: '2px',
    textUnderlineOffset: '4px',
  },
}));

export default function Navbar({ drawerIsOpen, onOpenDrawer }: NavbarProps) {
  const theme = useTheme();

  return (
    <AppBar
      elevation={3}
      component="nav"
      sx={{
        backgroundColor: theme.palette.background.paper,
        pl: {
          md: drawerIsOpen ? '300px' : '0px',
        },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          px: {
            xs: '1.25rem',
            sm: '2rem',
            md: '2.5rem',
            lg: '3.5rem',
            xl: '5rem',
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
          <Stack direction="row" alignItems="center" gap={1}>
            <ButtonOpenDrawer drawerIsOpen={drawerIsOpen} onOpenDrawer={onOpenDrawer} />
            <Typography
              variant="h6"
              component="h1"
            >
              <HeadRouteLink to="/">Mushaf App</HeadRouteLink>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={2}>
            <ButtonSearch />
            <ButtonChangeTheme />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>

  );
}
