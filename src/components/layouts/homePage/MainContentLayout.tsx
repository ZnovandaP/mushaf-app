import * as React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import CardMainContent from '../../card/CardMainContent';
import dataCardMainContent from '../../../utils/getDataCardMainContent';

export default function MainContentLayout() {
  return (
    <Stack gap={4} mt={2}>
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
        Ada apa aja di Mushaf App ini?
      </Typography>

      <Grid container spacing={4}>
        {dataCardMainContent?.map((data) => (
          <Grid item xs={12} md={6} xl={4} key={data?.id}>
            <CardMainContent
              title={data?.title}
              Icon={data?.Icon}
              tagline={data?.tagline}
              desc={data?.desc}
              to={data?.to}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
