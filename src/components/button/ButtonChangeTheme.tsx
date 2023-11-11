import * as React from 'react';
import {
  IconButton, Tooltip, TooltipProps, tooltipClasses, Zoom,
} from '@mui/material';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/material/styles';
import useSetTheme from '../../hooks/useSetTheme';

const ButtonDarkMode = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#f5f5f4',
  padding: '6px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CsTooltip = styled(({ className, ...props }: TooltipProps) => (
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

export default function ButtonChangeTheme() {
  const { isDarkMode, dispatch } = useSetTheme();

  const handleChangeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  React.useEffect(() => {
    localStorage.setItem('THEME_MUSHAF_APPS', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <CsTooltip
      title={isDarkMode ? 'Ubah Tema Gelap' : 'Ubah Tema Terang'}
      arrow
      TransitionComponent={Zoom}
      enterDelay={200}
      enterTouchDelay={200}
    >
      <ButtonDarkMode onClick={handleChangeTheme} size="small">
        {isDarkMode ? (<NightsStayIcon fontSize="small" />) : (<LightModeIcon fontSize="small" />)}
      </ButtonDarkMode>
    </CsTooltip>
  );
}
