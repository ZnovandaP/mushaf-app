import * as React from 'react';
import {
  Card, CardContent, Divider, Stack, Skeleton,
} from '@mui/material';
import SkeletonChip from './SkeletonChip';

export default function SkeletonCardAsmaulAlhusna() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Divider variant="middle">
          <Skeleton
            variant="circular"
            animation="wave"
            width={35}
            height={35}
          />
        </Divider>
        <Stack
          width="100%"
          justifyContent="center"
          alignItems="center"
          mt={2}
          gap={1.5}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width="45%"
            height="2rem"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width="30%"
            height="1.5rem"
          />
        </Stack>
      </CardContent>

      <Divider variant="middle">
        <SkeletonChip width={55} height={20} rounded="15px" />
      </Divider>

      <CardContent>
        <Stack
          width="100%"
          justifyContent="center"
          alignItems="center"
          mt="4px"
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width="45%"
            height="1.5rem"
          />
        </Stack>
      </CardContent>

      <Divider variant="middle">
        <SkeletonChip width={55} height={20} rounded="15px" />
      </Divider>

      <CardContent>
        <Stack
          width="100%"
          justifyContent="center"
          alignItems="center"
          mt="4px"
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width="75%"
            height="1.5rem"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
