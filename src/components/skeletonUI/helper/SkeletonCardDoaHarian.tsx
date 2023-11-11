import * as React from 'react';
import {
  Card, CardContent, Divider, Skeleton, Stack,
} from '@mui/material';
import SkeletonChip from './SkeletonChip';

export default function SkeletonCardDoaHarian() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack width="100%" justifyContent="center" alignItems="center">
          <Skeleton
            variant="rounded"
            animation="wave"
            width="35%"
            height="2rem"
          />
        </Stack>
      </CardContent>

      <Divider variant="middle" />
      <CardContent>
        <Stack
          width="100%"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width="85%"
            height="3rem"
          />
        </Stack>
      </CardContent>

      <Divider variant="middle">
        <SkeletonChip width={55} height={20} rounded="15px" />
      </Divider>
      <CardContent>
        <Stack gap={1.5}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width="85%"
            height="1.5rem"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width="80%"
            height="1.5rem"
          />
        </Stack>
      </CardContent>

      <Divider variant="middle">
        <SkeletonChip width={55} height={20} rounded="15px" />
      </Divider>
      <CardContent>
        <Stack gap={1.5}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width="90%"
            height="1.5rem"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width="95%"
            height="1.5rem"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width="90%"
            height="1.5rem"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
