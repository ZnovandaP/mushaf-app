import * as React from 'react';
import { Button, ButtonProps } from '@mui/material';
import RouterLinkBehaviour from './RouterLinkBehaviour';

type ButtonRouterProps = {
  to: string
} & ButtonProps;

export default function ButtonRouter(props: ButtonRouterProps) {
  return (
    <Button LinkComponent={RouterLinkBehaviour} {...props} />
  );
}
