import * as React from 'react';
import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const MyContainer = styled(Container)(({ theme }) => ({
  boxSizing: 'border-box',

  [theme.breakpoints.up('xs')]: {
    maxWidth: '100%',
    padding: '0 1.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '640px',
    padding: '0 2rem',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '768px',
    padding: '0 2.5rem',

  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '900px',
    padding: '0 3rem',

  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1150px',
  },
}));

export default function CsContainer({ children, ...other }: ContainerProps) {
  return (
    <MyContainer {...other}>
      {children}
    </MyContainer>
  );
}
