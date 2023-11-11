import * as React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type ButtonOpenDrawerProps = {
  drawerIsOpen: boolean,
  onOpenDrawer: () => void
};

export default function ButtonOpenDrawer({
  drawerIsOpen,
  onOpenDrawer,
}: ButtonOpenDrawerProps) {
  return (
    !drawerIsOpen
    && (
    <IconButton onClick={onOpenDrawer}>
      <MenuIcon color="primary" />
    </IconButton>
    )
  );
}
