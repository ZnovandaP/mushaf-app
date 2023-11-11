import * as React from 'react';
import { Chip, List } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router-dom';
import QuranMenu from './QuranMenu';
import ListItemLink from '../../routingComponent/ListItemLink';
import DoaMenu from './DoaMenu';

export default function MenuDrawer() {
  const { pathname } = useLocation();

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        pt: 0,
      }}
      component="ul"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemLink
        selected={pathname === '/'}
        primary="Beranda"
        icon={<HomeIcon />}
        to="/"
      />

      <QuranMenu />

      <DoaMenu />

      <ListItemLink
        selected={pathname.includes('asmaul-alhusna')}
        primary="Asmaul-AlHusna"
        icon={<HomeIcon />}
        to="asmaul-alhusna"
      >
        <Chip
          variant="outlined"
          label="Bonus"
          color="secondary"
          size="small"
        />
      </ListItemLink>
    </List>
  );
}
