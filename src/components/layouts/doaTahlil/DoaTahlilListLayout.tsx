import * as React from 'react';
import { Grid } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import { DoaTahlil } from '../../../types/typeResponsesDoaTahlil';
import CardDoaTahlil from '../../card/CardDoaTahlil';
import SkeletonCommonPage from '../../skeletonUI/SkeletonCommonPage';

type DoaTahlilListLayoutProps = {
  dataDoa: DoaTahlil[];
} & UseQueryResult;

export default function DoaTahlilListLayout(props: DoaTahlilListLayoutProps) {
  const {
    dataDoa, isSuccess, isPending, isFetching, isLoading,
  } = props;

  return (
    <>
      {isLoading || isFetching || isPending ? (<SkeletonCommonPage type="doaTahlil" />) : null}

      <Grid container spacing={4} mt={-1}>
        {isSuccess
        && dataDoa?.map((doaHarian) => (
          <Grid item xs={12} key={doaHarian?.id}>
            <CardDoaTahlil dataDoa={doaHarian} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
