import * as React from 'react';
import { Grid } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import { AsmaulAlhusna } from '../../../types/typeResponseAsmaulAlhusna';
import CardAsmaulAlhusna from '../../card/CardAsmaulAlhusna';
import SkeletonCommonPage from '../../skeletonUI/SkeletonCommonPage';

type AsmaulAlhusnaListLayoutProps = {
  dataAsmaulAlhusna: AsmaulAlhusna[];
} & UseQueryResult;

export default function AsmaulAlhusnaListLayout(
  props: AsmaulAlhusnaListLayoutProps,
) {
  const {
    dataAsmaulAlhusna, isSuccess, isPending, isFetching, isLoading,
  } = props;

  return (
    <>
      {isLoading || isFetching || isPending ? (<SkeletonCommonPage type="doaTahlil" />) : null}

      <Grid container spacing={4} mt={-1} direction="row-reverse">
        {isSuccess
        && dataAsmaulAlhusna?.map((data) => (
          <Grid item xs={12} md={6} xl={4} key={data.index}>
            <CardAsmaulAlhusna dataAsmaulAlhusma={data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
