import * as React from 'react';
import {
  Card, Stack, CardContent, Skeleton, CardActions,
} from '@mui/material';

export default function SkeletonCardDesc() {
  return (
    <Card variant="outlined" sx={{ width: '100%', mt: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <CardContent sx={{ width: '100%' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Skeleton
              variant="circular"
              animation="wave"
              height={35}
              width={35}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height="1.75rem"
              width="40%"
            />
          </Stack>
        </CardContent>

        <CardActions sx={{ pr: 2 }}>
          <Skeleton
            variant="circular"
            animation="wave"
            height={35}
            width={35}
          />
        </CardActions>
      </Stack>
    </Card>
  );
}
