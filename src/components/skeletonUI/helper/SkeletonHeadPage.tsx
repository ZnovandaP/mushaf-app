import { Stack, Skeleton } from '@mui/material';
import * as React from 'react';
import SkeletonChip from './SkeletonChip';

export default function SkeletonHeadPage() {
  return (
    <Stack direction="column" gap=".85rem" alignItems="center" width="100%">
      <Skeleton
        variant="rounded"
        animation="wave"
        height="2.25rem"
        width="280px"
      />
      <SkeletonChip
        width="110px"
        height="1.75rem"
        rounded="15px"
        sx={{ opacity: '.5' }}
      />
    </Stack>
  );
}
