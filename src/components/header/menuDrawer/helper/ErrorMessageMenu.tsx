import * as React from 'react';
import { Box, ListItem, useTheme } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type ErrorMessageMenuProps = {
  message: string
};
export default function ErrorMessageMenu({ message }: ErrorMessageMenuProps) {
  const theme = useTheme();
  return (
    <ListItem sx={{ pl: 5 }}>
      <Box
        sx={{
          height: '10rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          '& > svg': {
            fontSize: '2.5rem',
            color: theme.palette.error.main,
          },
        }}
      >
        <ErrorOutlineIcon />
        {message}
      </Box>
    </ListItem>
  );
}
