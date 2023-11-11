import * as React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Drawer from './Drawer';

type HeaderProps = {
  drawerIsOpen: boolean,
  setDrawerIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function Header({ drawerIsOpen, setDrawerIsOpen } : HeaderProps) {
  const handleOpenDrawer = () => {
    setDrawerIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Box component="header">
      <Navbar drawerIsOpen={drawerIsOpen} onOpenDrawer={handleOpenDrawer} />
      <Drawer open={drawerIsOpen} onCloseDrawer={handleCloseDrawer} />
    </Box>
  );
}
