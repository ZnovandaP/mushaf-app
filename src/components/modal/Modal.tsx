import * as React from 'react';
import {
  Dialog, DialogProps, Stack, DialogTitle, IconButton, DialogContentText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ children, ...other }: DialogProps) {
  return (
    <Dialog
      maxWidth="md"
      fullWidth
      PaperProps={{ elevation: 0 }}
      {...other}
    >
      {children}
    </Dialog>
  );
}

type HeadProps = {
  title:string
  onCloseModal: () => void
};

function Head({ title, onCloseModal }: HeadProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" pr={3}>
      <DialogTitle color="primary">
        {title}
      </DialogTitle>
      <IconButton
        onClick={onCloseModal}
        sx={{ width: '44px', height: '44px' }}
      >
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

function Footer() {
  return (
    <DialogContentText sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: '1rem',
      fontSize: '1.25rem',
      fontWeight: 600,
      fontFamily: 'Zilla Slab',
      color: 'primary.main',
    }}
    >
      Mushaf App &copy;
      {' '}
      {new Date().getFullYear()}
    </DialogContentText>
  );
}

Modal.Head = Head;
Modal.Footer = Footer;
