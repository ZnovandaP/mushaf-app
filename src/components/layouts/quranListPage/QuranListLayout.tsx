import * as React from 'react';
import { Grid } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import CardQuranList from '../../card/CardQuranList';
import SkeletonCardQuran from '../../skeletonUI/helper/SkeletonCardQuran';
import { AllSurah } from '../../../types/typesResponseQuranApi';

type QuranListLayoutProps = {
  dataSurahs: AllSurah[];
} & UseQueryResult;

export default function QuranListLayout(props: QuranListLayoutProps) {
  const {
    dataSurahs, isSuccess, isPending, isFetching, isLoading,
  } = props;

  return (
    <Grid container spacing={4} mt={-1} direction="row-reverse">
      {isLoading || isFetching || isPending
        ? Array.from(new Array(6))?.map((item, index) => (
          <Grid item xs={12} md={6} xl={4} key={index}>
            <SkeletonCardQuran />
          </Grid>
        ))
        : null}

      {isSuccess
        && dataSurahs?.map((surah) => (
          <Grid item xs={12} md={6} xl={4} key={surah?.name}>
            <CardQuranList surah={surah} />
          </Grid>
        ))}
    </Grid>
  );
}
