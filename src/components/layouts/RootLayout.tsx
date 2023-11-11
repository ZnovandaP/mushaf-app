import * as React from 'react';
import {
  Alert as MUIAlert, AlertProps, AlertTitle, Box, Snackbar, SlideProps, Slide,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../header/Index';
import CsContainer from '../cscontainer/CsContainer';
import queryClient from '../../utils/queryClient';
import { getAllSurah } from '../../service/quranService';
import ScrollToTop from '../helper/ScrollToTop';
import Footer from '../footer/Footer';
import useOpenSnackbar from '../../hooks/UseOpenSnackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MUIAlert elevation={6} ref={ref} variant="filled" {...props} />);

function SlideUp(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export const loader = () => queryClient.fetchQuery({
  queryKey: ['QuranMenu'],
  queryFn: getAllSurah,
});

export default function RootLayout() {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const { isOpen, dispatch } = useOpenSnackbar();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: 'CLOSE' });
  };

  return (
    <>
      <ScrollToTop />
      <Header drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />

      <Box
        component="main"
        sx={{
          mt: '6rem',
          ml: {
            lg: drawerIsOpen ? '300px' : '0px',
          },
          mb: '4rem',
          minHeight: 'calc(100vh - 10rem)',
        }}
      >
        <CsContainer>
          <Outlet />
        </CsContainer>
      </Box>

      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={SlideUp}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          <AlertTitle>Informasi</AlertTitle>
          Fitur pencarian masih dalam tahap pengembangan!
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
}
