import * as React from 'react';
import { ListItem, Skeleton, Stack } from '@mui/material';
import SkeletonChip from './helper/SkeletonChip';

export default function SkeletonListMenu() {
  return (
    <ListItem>
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" pl={5}>
        <Skeleton animation="wave" variant="circular" width={30} height={30} />
        <Skeleton animation="wave" variant="text" width={110} sx={{ fontSize: 20 }} />
        <SkeletonChip width={55} height={20} rounded="15px" />
      </Stack>
    </ListItem>
  );
}
