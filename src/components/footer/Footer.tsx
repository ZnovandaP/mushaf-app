import * as React from 'react';
import {
  Box, Divider, Stack, Typography, styled,
} from '@mui/material';
import LinkRouter from '../routingComponent/LinkRouter';

const Container = styled(Box)({
  backgroundImage: 'linear-gradient(to right, #064e3b, #065f46, #0f766e)',
  height: '10rem',
  padding: '1rem',
  color: '#f5f5f4',
});

const socmedUrl = [
  {
    name: 'Github',
    to: 'https://github.com/ZnovandaP/',
  },
  {
    name: 'linkedIn',
    to: 'https://www.linkedin.com/in/zidane-novanda-putra-58a9b3227/',
  },
  {
    name: 'Instagram',
    to: 'https://www.instagram.com/znovanda_p/',
  },
];

export default function Footer() {
  return (
    <Container component="footer">
      <Stack width="100%" gap={1}>
        <Typography variant="h5" component="h2" textAlign="center">
          Mushaf App
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" gap="1rem" mb="1rem">
          {socmedUrl?.map((item) => (
            <LinkRouter
              target="_blank"
              key={item?.name}
              to={item?.to}
              sx={{
                color: '#f5f5f4',
                textDecorationStyle: 'wavy',
                textUnderlineOffset: '8px',
                fontWeight: 600,
                fontStyle: 'italic',
              }}
            >
              {item.name}
            </LinkRouter>
          ))}
        </Stack>
        <Divider variant="middle" color="#f5f5f4" />

        <Typography variant="body1" textAlign="center" mt={1}>
          Copyright &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          - Mushaf App
        </Typography>
      </Stack>
    </Container>
  );
}
