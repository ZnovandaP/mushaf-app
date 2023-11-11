import * as React from 'react';
import {
  Card, CardContent, CardHeader, Divider, Link, Typography, styled,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import useSetTheme from '../../../hooks/useSetTheme';

const Decor = styled('span')({
  fontSize: '2rem',
});

export default function CreditLayout() {
  const { isDarkMode } = useSetTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: 'rgba(0, 173, 124, .25)',
        border: '1px solid',
        borderColor: 'primary.main',
      }}
    >
      <CardHeader
        title="Credit"
        avatar={
          <ArticleIcon sx={{ color: isDarkMode ? '#f5f5f4' : '#134e4a' }} />
        }
        titleTypographyProps={{
          variant: 'body1',
          component: 'h2',
          color: isDarkMode ? '#2dd4bf' : '#0d9488',
          textAlign: 'left',
          alignSelf: 'flex-start',
          sx: {
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
            hyphens: 'auto',
            fontWeight: 700,
            letterSpacing: '1px',
          },
        }}
      />

      <Divider
        variant="middle"
        sx={{ borderColor: isDarkMode ? '#2dd4bf' : '#0d9488' }}
      />

      <CardContent>
        <Typography variant="body1">
          <Decor>*</Decor>
          Resource Al-Quran bersumber dari
          {' '}
          <Link
            href="https://github.com/renomureza/quran-api-id"
            target="_blank"
            color={isDarkMode ? '#0ea5e9' : '#0369a1'}
          >
            Quran-api-id
          </Link>
        </Typography>
        <Typography variant="body1">
          <Decor>*</Decor>
          Resource Doa-doa Harian, Doa-doa Tahlil dan 99 Asmaul-Alhusna bersumber dari
          {' '}
          <Link
            href="https://api-zhirrr.vercel.app/"
            target="_blank"
            color={isDarkMode ? '#0ea5e9' : '#0369a1'}
          >
            Zhirr&apos;s API
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
