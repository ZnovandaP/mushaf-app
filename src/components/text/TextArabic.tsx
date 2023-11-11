import * as React from 'react';
import { Typography, TypographyProps } from '@mui/material';

export default function TextArabic({ children, sx, ...other }: TypographyProps) {
  return (
    <Typography
      fontFamily="LMTQ-Quran"
      textAlign="right"
      {...other}
      sx={{
        ...sx,
        fontSize: {
          xs: '1.25rem',
          sm: '1.5rem',
          md: '1.75rem',
        },
        lineHeight: {
          xs: '2.75rem',
          md: '3.75rem',
        },
      }}
    >
      {children}
    </Typography>
  );
}
