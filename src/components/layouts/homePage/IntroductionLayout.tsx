import * as React from 'react';
import {
  Card, Stack, Typography, styled,
} from '@mui/material';
import IlustrationMuslimPeople from '../../../assets/ilustration/muslim.svg';

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '13rem',
  [theme.breakpoints.up('xl')]: {
    height: '12rem',

  },
}));

export default function IntroductionLayout() {
  return (
    <Stack alignItems="center" justifyContent="center" gap={4}>
      <Typography
        variant="body1"
        component="h2"
        color="#11998e"
        textAlign="center"
        alignSelf="flex-start"
        sx={{
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
          hyphens: 'auto',
          fontWeight: 700,
          letterSpacing: '1px',
        }}
      >
        Sebenarnya... Apa itu Mushaf App?
      </Typography>

      <Stack
        sx={{ flexDirection: { sx: 'column', xl: 'row' } }}
        alignItems="center"
        justifyContent="center"
        width="100%"
        gap={4}
      >
        <Card variant="outlined" sx={{ p: 2, width: { xl: '45%' } }}>
          <Image src={IlustrationMuslimPeople} alt="Ilustrasi orang muslim dan muslimah" loading="lazy" />
        </Card>

        <Typography
          variant="body1"
          // alignSelf="flex-start"
          sx={{
            hyphens: 'auto',
            letterSpacing: '.75px',
            width: { xl: '55%' },
            '&::first-letter': {
              fontSize: {
                xs: '2rem',
                md: '2.5rem',
              },
              color: 'primary.main',
            },
          }}
        >
          Mushaf App bukan sekadar aplikasi biasa ini adalah teman setiamu dalam menjalani kehidupan
          berlandaskan nilai-nilai agama. Dengan bangga, kami menghadirkan padamu keistimewaan akses
          Al-Quran, Doa-doa seperti doa harian dan doa tahlil serta bonus konten yaitu 99 Asmaul-Alhusna.
          Rasakan kehadiran-Nya kapan pun dan di
          mana pun, dalam genggamanmu.
        </Typography>
      </Stack>
    </Stack>
  );
}
