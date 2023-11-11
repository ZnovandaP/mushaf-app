import * as React from 'react';
import {
  Tooltip, TooltipProps, tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const MyTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: '#f5f5f4',
    maxWidth: 220,
    fontSize: '14px',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.dark,
  },
}));

export default function CsTooltip(props: TooltipProps) {
  const { children } = props;
  return (
    <MyTooltip {...props}>
      {children}
    </MyTooltip>
  );
}
