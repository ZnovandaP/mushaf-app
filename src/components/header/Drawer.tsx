import * as React from 'react';
import {
  Drawer as MUIDrawer, Box, Typography, useMediaQuery, Divider, IconButton,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuDrawer from './menuDrawer/MenuDrawer';

type DrawerProps = {
  open: boolean,
  onCloseDrawer: () => void
};

const DrawerHeader = styled(Box)({
  height: '64px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 1.5rem',
});

export default function Drawer({ open, onCloseDrawer }: DrawerProps) {
  const theme = useTheme();
  const mdLessThan = useMediaQuery(theme.breakpoints.between('xs', 'lg'));

  return (
    <MUIDrawer
      elevation={0}
      open={open}
      onClose={onCloseDrawer}
      variant={mdLessThan ? 'temporary' : 'persistent'}
    >
      <Box sx={{ width: '300px' }}>
        <DrawerHeader>
          <Typography variant="h6" component="h2" color="primary" fontSize="18px">
            Mushaf App Menu
          </Typography>

          <IconButton onClick={onCloseDrawer}>
            <MenuOpenIcon color="primary" />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <MenuDrawer />
      </Box>
    </MUIDrawer>
  );
}
