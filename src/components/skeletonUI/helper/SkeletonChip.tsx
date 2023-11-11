import * as React from 'react';
import { Skeleton, SkeletonProps } from '@mui/material';

type SkeletonDividerChipProps = {
  rounded: number | string,
} & Pick<SkeletonProps, 'width' | 'sx' | 'height'>;

export default function SkeletonChip(props: SkeletonDividerChipProps) {
  const {
    height, rounded = '15px', width, sx,
  } = props;
  return (
    <Skeleton
      animation="wave"
      variant="rounded"
      width={width}
      height={height}
      sx={{ borderRadius: rounded, ...sx }}
    />
  );
}
