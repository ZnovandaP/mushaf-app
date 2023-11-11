import * as React from 'react';
import { Stack, Skeleton, Divider } from '@mui/material';
import SkeletonCardAyah from './helper/SkeletonCardAyah';
import SkeletonChip from './helper/SkeletonChip';
import SkeletonCardDesc from './helper/SkeletonCardDesc';

export default function SkeletonSurahPage() {
  return (
    <>
      <Stack gap=".85rem" alignItems="center" width="100%">
        <Skeleton
          variant="rounded"
          animation="wave"
          height="2.25rem"
          width="232px"
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          height="1.75rem"
          width="207px"
        />
        <SkeletonChip
          width="150px"
          height="1.75rem"
          rounded="15px"
        />
        <SkeletonChip
          width="110px"
          height="1.75rem"
          rounded="15px"
          sx={{ opacity: '.5' }}
        />
      </Stack>

      <SkeletonCardDesc />

      <Divider
        sx={{
          mt: 4,
          '&::before, &::after': {
            borderColor: 'primary.main',
          },
        }}
      >
        <Skeleton
          variant="rounded"
          animation="wave"
          height="2.25rem"
          width="12rem"
        />
      </Divider>

      <Stack
        direction="column"
        gap="5.5rem"
        alignItems="center"
        width="100%"
        mt={5}
      >
        {Array.from(new Array(5).keys()).map((key) => (
          <SkeletonCardAyah key={key} />
        ))}
      </Stack>
    </>
  );
}
