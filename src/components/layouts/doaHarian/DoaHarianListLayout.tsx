import * as React from 'react';
import { Grid } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import { DoaHarian } from '../../../types/typeResponseDoaHarian';
import CardDoaHarian from '../../card/CardDoaHarian';
import SkeletonCommonPage from '../../skeletonUI/SkeletonCommonPage';

type DoaHarianListLayoutProps = {
  dataDoa: DoaHarian[];
} & UseQueryResult;

export default function DoaHarianListLayout(props: DoaHarianListLayoutProps) {
  const {
    dataDoa, isSuccess, isPending, isFetching, isLoading,
  } = props;

  return (
    <>
      {isLoading || isFetching || isPending ? (<SkeletonCommonPage type="doaHarian" />) : null}

      <Grid container spacing={4} mt={-1}>
        {isSuccess
        && dataDoa?.map((doaHarian, index) => (
          <Grid item xs={12} key={doaHarian?.title}>
            <CardDoaHarian dataDoa={doaHarian} number={index + 1} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
