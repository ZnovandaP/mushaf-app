import * as React from 'react';
import {
  Button, Chip, IconButton, useMediaQuery, Zoom,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme, styled } from '@mui/material/styles';
import CsTooltip from '../tooltip/CsTooltip';
import useOpenSnackbar from '../../hooks/UseOpenSnackbar';

const ButtonSearchIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  padding: '6px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: '#f5f5f4',
  },
}));

export default function ButtonSearch() {
  const theme = useTheme();
  const xsLessThan = useMediaQuery(theme.breakpoints.down('sm'));
  const smGreaterThan = useMediaQuery(theme.breakpoints.up('sm'));
  const { dispatch } = useOpenSnackbar();

  const HandleOpenSnakbar = () => {
    dispatch({ type: 'OPEN' });
  };

  return (
    <>
      {
        xsLessThan ? (
          <CsTooltip
            title="Cari suatu konten"
            arrow
            TransitionComponent={Zoom}
            enterDelay={200}
            enterTouchDelay={200}
          >
            <ButtonSearchIcon onClick={HandleOpenSnakbar}>
              <SearchIcon fontSize="small" />
            </ButtonSearchIcon>
          </CsTooltip>
        ) : null
      }

      {
        smGreaterThan && (
          <Button variant="outlined" startIcon={<SearchIcon />} onClick={HandleOpenSnakbar}>
            Search...
            <Chip size="small" sx={{ ml: 1 }} label="Ctrl+K" variant="outlined" color="primary" />
          </Button>
        )
      }
    </>
  );
}
