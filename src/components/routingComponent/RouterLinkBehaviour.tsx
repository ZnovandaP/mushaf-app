import * as React from 'react';
import {
  Link as RouterLink, LinkProps as RouterLinkProps,
} from 'react-router-dom';

const RouterLinkBehaviour = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((itemProps, ref) => (
  <RouterLink ref={ref} {...itemProps} />
));

export default RouterLinkBehaviour;
