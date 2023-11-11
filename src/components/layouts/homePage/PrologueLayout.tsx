import * as React from 'react';
import {
  Box, Typography, styled, keyframes,
} from '@mui/material';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const randomNumber = () => Math.random() * 70;

const move = keyframes`
  0%, 100% {
    top: 0;
    left: 0;
  }
  20% {
    top: ${randomNumber()}%;
    left: ${randomNumber()}%;
  }
  40% {
    top: ${randomNumber()}%;
    left: ${randomNumber()}%;
  }
  60% {
    top: ${randomNumber()}%;
    left: ${randomNumber()}%;
  }
  80% {
    top: ${randomNumber()}%;
    left: ${randomNumber()}%;
  }
  `;

const Wrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  padding: '1rem',
  marginTop: '-1rem',
  borderRadius: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

});

const Parent = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right,
    #11998e, ${theme.palette.primary.main}, ${theme.palette.primary.light}, #38ef7d)`,
  backgroundClip: 'text',
  color: 'transparent',
}));

const Circle = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #03001e, #7303c0, #ec38bc, #f5f5f5)',
  width: '13rem',
  height: '13rem',
  opacity: theme.palette.mode === 'light' ? '.5' : '.9',
  filter: 'blur(3rem)',
  borderRadius: '50%',
  animation: `${spin} 5s linear infinite alternate, ${move} 10s ease-in-out infinite alternate`,
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: -9999,
}));

export default function PrologueLayout() {
  return (
    <Wrapper>
      <Parent>
        <Typography
          variant="body1"
          component="h2"
          sx={{
            fontSize: {
              xs: '1.85rem', sm: '2.25rem', md: '2.75rem', lg: '3rem',
            },
            hyphens: 'auto',
            fontWeight: 800,
            letterSpacing: '1px',
            '&::first-letter': {
              fontSize: {
                xs: '2.25rem', sm: '2.75rem', md: '3.25rem', lg: '3.75rem',
              },
            },
          }}
        >
          🙏ssalammuailaikum, Selamat datang di Mushaf App, mari tingkatkan kualitas ibadah kita
          untuk menjadi pribadi yang lebih baik.
        </Typography>
      </Parent>
      <Circle />
    </Wrapper>
  );
}
