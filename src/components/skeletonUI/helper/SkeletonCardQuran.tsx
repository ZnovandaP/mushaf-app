import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Skeleton,
  Stack,
} from '@mui/material';
import SkeletonChip from './SkeletonChip';

export default function SkeletonCardQuran() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
        >
          <Skeleton
            animation="wave"
            variant="circular"
            width={30}
            height={30}
          />

          <Stack direction="column" alignItems="center" mt={1}>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: '1.2rem' }}
              width="100px"
            />
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: '13px' }}
              width="80px"
            />
          </Stack>

          <SkeletonChip width={55} height={20} rounded="15px" />
        </Stack>
      </CardContent>
      <Divider variant="middle" />

      <CardContent>
        <Stack direction="column" gap="2px">
          {Array.from(new Array(5))?.map((item, index) => (
            <Skeleton
              key={index}
              animation="wave"
              variant="text"
              sx={{ fontSize: '14px' }}
              width="100%"
            />
          ))}
        </Stack>
      </CardContent>
      <Divider variant="middle">
        <SkeletonChip width={55} height={20} rounded="15px" />
      </Divider>

      <CardActions>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Skeleton
            animation="wave"
            variant="rounded"
            width="70%"
            height={30}
          />
        </Stack>
      </CardActions>
    </Card>
  );
}
