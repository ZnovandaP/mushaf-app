import * as React from 'react';
import {
  Box, Stack, Typography, styled,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import imageResponseError from '../../../assets/ilustration/response-error.svg';
import LinkRouter from '../../routingComponent/LinkRouter';

const Image = styled('img')({
  width: '100%',
  height: '15rem',
});

type ResponseErrorLayoutProps = {
  message: string;
};
export default function ResponseErrorLayout({
  message,
}: ResponseErrorLayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: '60vh',
        mt: {
          xs: '1rem',
          sm: '2rem',
        },
      }}
    >
      <Image src={imageResponseError} loading="lazy" />
      <Stack direction="row" gap={1} alignItems="center" mb={1} mt={2}>
        <ErrorOutlineIcon fontSize="large" color="error" />
        <Typography variant="body1" fontSize={28} component="p" color="error">
          Error
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        component="p"
        fontSize={18}
        textAlign="center"
        mb={1}
      >
        {message}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        fontSize={14}
        textAlign="center"
      >
        Mohon untuk kembali ke halaman
        {' '}
        <LinkRouter to="/" sx={{ ml: '2px' }} underline="hover">
          beranda
        </LinkRouter>
      </Typography>
    </Box>
  );
}
