import * as React from 'react';
import { Grid } from '@mui/material';
import SkeletonHeadPage from './helper/SkeletonHeadPage';
import SkeletonCardDoaHarian from './helper/SkeletonCardDoaHarian';
import SkeletonCardDoaTahlil from './helper/SkeletonCardDoaTahlil';
import SkeletonCardAsmaulAlhusna from './helper/SkeletonCardAsmaulAlhusna';

type SkeletonCommonPageProps = {
  type: 'doaHarian' | 'doaTahlil' | 'asmaul-alhusna'
};
export default function SkeletonCommonPage({ type }: SkeletonCommonPageProps) {
  return (
    <>
      <SkeletonHeadPage />

      <Grid container spacing={4} mt={-1}>
        {type === 'doaHarian' && (
          Array.from(new Array(4))?.map((item, index) => (
            <Grid item xs={12} key={index}>
              <SkeletonCardDoaHarian />
            </Grid>
          ))
        )}
        {type === 'doaTahlil' && (
          Array.from(new Array(4))?.map((item, index) => (
            <Grid item xs={12} key={index}>
              <SkeletonCardDoaTahlil />
            </Grid>
          ))
        )}
        {type === 'asmaul-alhusna' && (
          Array.from(new Array(4))?.map((item, index) => (
            <Grid item xs={12} key={index}>
              <SkeletonCardAsmaulAlhusna />
            </Grid>
          ))
        )}
      </Grid>

    </>
  );
}
