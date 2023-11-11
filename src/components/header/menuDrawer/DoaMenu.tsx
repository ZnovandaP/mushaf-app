import * as React from 'react';
import {
  Collapse, List, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import { useLocation } from 'react-router-dom';
import ListItemLink from '../../routingComponent/ListItemLink';

const dataLinkDoa = [
  {
    to: 'doa-harian',
    title: 'Doa Harian',
    Icon: StarIcon,
  },
  {
    to: 'doa-tahlil',
    title: 'Doa Tahlil',
    Icon: NightsStayIcon,
  },
];

export default function DoaMenu() {
  const [open, setOpen] = React.useState(false);

  const { pathname } = useLocation();

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)} sx={{ pr: 3 }}>
        <ListItemIcon>
          <AirlineSeatReclineNormalIcon />
        </ListItemIcon>
        <ListItemText primary="Doa-doa" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout={450} unmountOnExit>
        <List component="div" disablePadding>
          {dataLinkDoa?.map(({ to, title, Icon }) => (
            <ListItemLink
              key={to}
              to={to}
              primary={title}
              icon={<Icon />}
              selected={pathname.includes(to)}
              sx={{ pl: 5 }}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
}
