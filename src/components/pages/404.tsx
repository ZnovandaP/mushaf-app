import * as React from 'react';
import {
  Box, Stack, Typography, styled,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRouteError } from 'react-router-dom';
import imageNotFoundLight from '../../assets/ilustration/404-light.svg';
import imageNotFoundDark from '../../assets/ilustration/404-dark.svg';
import LinkRouter from '../routingComponent/LinkRouter';
import { DarkModeStateContext } from '../../context/darkMode/DarkModeContext';
import useDocumentTitle from '../../hooks/useDocumentTitle';

type UseRouteError = {
  error: {
    message: string
  },
  status: number,
  statusText: string

};

const Image = styled('img')({
  width: '100%',
  height: '15rem',
});

export default function NotFoundPage() {
  useDocumentTitle('404 Not Found');
  const routeError = useRouteError() as UseRouteError;
  const { isDarkMode } = React.useContext(DarkModeStateContext);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
    }}
    >
      <Image
        src={isDarkMode ? imageNotFoundDark : imageNotFoundLight}
        height={240}
        loading="lazy"
      />
      <Stack direction="row" gap={1} alignItems="center" mb={1} mt={2}>
        <ErrorOutlineIcon fontSize="large" color="error" />
        <Typography variant="body1" fontSize={28} component="p" color="error">
          {`${routeError.status!} (${routeError.statusText!})`}
        </Typography>
      </Stack>
      <Typography variant="body1" component="p" fontSize={18} textAlign="center" mb={1}>
        {routeError.error.message!}
      </Typography>
      <Typography variant="body1" component="p" fontSize={14} textAlign="center">
        Mohon untuk kembali ke halaman
        {' '}
        <LinkRouter to="/" sx={{ ml: '2px' }} underline="hover">beranda</LinkRouter>
      </Typography>
    </Box>
  );
}
