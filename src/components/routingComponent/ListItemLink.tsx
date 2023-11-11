import * as React from 'react';
import {
  ListItemButton, ListItemButtonBaseProps, ListItemIcon, ListItemText,
} from '@mui/material';
import RouterLinkBehaviour from './RouterLinkBehaviour';

type ListItemLinkProps = {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  selected?: boolean
  children?: React.ReactNode
} & Pick<ListItemButtonBaseProps, 'sx'>;

export default function ListItemLink({
  icon, primary, to, selected, children, sx,
}: ListItemLinkProps) {
  return (
    <li>
      <ListItemButton selected={selected} component={RouterLinkBehaviour} to={to} sx={sx}>
        { icon && <ListItemIcon>{icon}</ListItemIcon> }
        <ListItemText primary={primary} />
        {children}
      </ListItemButton>
    </li>
  );
}
