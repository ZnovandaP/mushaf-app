import * as React from 'react';
import {
  Chip,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ListItemLink from '../../routingComponent/ListItemLink';
import useGetAllSurah from '../../../hooks/useGetAllSurah';
import SkeletonListMenu from '../../skeletonUI/SkeletonListMenu';
import ErrorMessageMenu from './helper/ErrorMessageMenu';

type NumberOfQuranMenuProps = {
  contentNumber: string | number;
};

export function NumberOfQuranMenu({ contentNumber }: NumberOfQuranMenuProps) {
  return (
    <Paper
      square
      sx={{
        width: '20px',
        height: '20px',
        p: '.85rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        bgcolor: 'transparent',
        border: '1px solid',
        borderColor: 'primary.main',
        fontSize: '14px',
      }}
    >
      {contentNumber}
    </Paper>
  );
}

export default function QuranMenu() {
  const {
    data, error, isSuccess, isLoading, isFetching, isError,
  } = useGetAllSurah(['QuranMenu']);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { numberOfSurah } = useParams();

  const [open, setOpen] = React.useState(false);

  const handleToggleQuranMenu = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation();
    }
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        selected={pathname === '/quran'}
        onClick={() => navigate('quran')}
      >
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary={"Al-Qur'an Menu"} />
        <IconButton onClick={(e) => handleToggleQuranMenu(e)}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItemButton>

      <Collapse in={open} timeout={450} unmountOnExit>
        <List component="div" disablePadding>
          {isFetching || isLoading
            ? Array.from(new Array(11))?.map((item, index) => (
              <SkeletonListMenu key={index} />
            ))
            : null}

          {isSuccess
            && data?.map((surah) => (
              <ListItemLink
                key={surah?.name}
                selected={parseInt(numberOfSurah!, 10) === surah?.number}
                icon={<NumberOfQuranMenu contentNumber={surah?.number} />}
                primary={surah?.name}
                to={`surah/${surah?.number}/${surah?.name
                  .toLowerCase()
                  .split(' ')
                  .join('')}`}
                sx={{ pl: 5 }}
              >
                <Chip
                  variant="outlined"
                  label={surah?.revelation === 'Makkiyah' ? 'MKYH' : 'MDNH'}
                  color={surah?.revelation === 'Makkiyah' ? 'info' : 'warning'}
                  size="small"
                />
              </ListItemLink>
            ))}

          {isError && <ErrorMessageMenu message={error.message} />}
        </List>
      </Collapse>
    </>
  );
}
