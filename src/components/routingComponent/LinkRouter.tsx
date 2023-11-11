import * as React from 'react';
import { Link, LinkProps } from '@mui/material';
import RouterLinkBehaviour from './RouterLinkBehaviour';

type LinkRouterProps = {
  to: string,
} & LinkProps;

export default function LinkRouter(props: LinkRouterProps) {
  return (
    <Link component={RouterLinkBehaviour} {...props} />
  );
}
