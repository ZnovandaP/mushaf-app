import * as React from 'react';
import {
  Card, CardContent, Stack, Skeleton, Divider, CardActions,
} from '@mui/material';
import SkeletonChip from './SkeletonChip';

export default function SkeletonCardAyah() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        position: 'relative',
        pb: '5rem',
        overflow: 'visible',
      }}
    >
      <CardContent sx={{ width: '100%' }}>
        <Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="center">
          <Skeleton variant="rounded" animation="wave" height="2.75rem" width="85%" />
          <Skeleton variant="circular" animation="wave" height={35} width={35} />
        </Stack>
      </CardContent>

      <Divider variant="middle">
        <SkeletonChip width="5rem" height="1.25rem" rounded="15px" />
      </Divider>

      <CardContent>
        <Skeleton variant="rounded" animation="wave" height="1.75rem" width="75%" />
      </CardContent>

      <Divider variant="middle">
        <SkeletonChip width="3.5rem" height="1.25rem" rounded="15px" />
      </Divider>

      {Array.from(new Array(3).keys()).map((key) => (
        <React.Fragment key={key}>
          <Stack direction="row" justifyContent="space-between">
            <CardContent sx={{ width: '100%' }}>
              <Skeleton variant="rounded" animation="wave" height="1.75rem" width="45%" />
            </CardContent>

            <CardActions sx={{ pr: 2 }}>
              <Skeleton variant="circular" animation="wave" height={35} width={35} />
            </CardActions>
          </Stack>
          <Divider />
        </React.Fragment>
      ))}

      <Card
        variant="outlined"
        sx={{
          position: 'absolute',
          bottom: '-3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          borderColor: 'primary.main',
          borderRadius: '1rem',
          p: '1rem',
        }}
      >
        <Skeleton variant="rounded" width="16rem" height={65} sx={{ borderRadius: '35px' }} />
      </Card>
    </Card>
  );
}
