import * as React from 'react';
import {
  Box, Divider, Stack, styled, useMediaQuery, useTheme,
} from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import { useQueryClient } from '@tanstack/react-query';
import CardDemo from '../../card/CardDemo';
import Modal from '../../modal/Modal';
import AyahQuranModalLayout from '../modalBody/AyahQuranModalLayout';
import DoaModalLayout from '../modalBody/DoaModalLayout';

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  border: `3px dashed rgba(0, 173, 124, ${theme.palette.mode === 'light'
    ? '.4' : '.25'})`,
  padding: '2rem',
  position: 'relative',
}));

type TypeAction = 'ayahQuran' | 'doa' | null;

type OpenModal = {
  typeAction: TypeAction,
  isOpen: boolean
};

const initialStateModal: OpenModal = {
  typeAction: null,
  isOpen: false,
};

export default function DemoLayout() {
  const [openModal, setOpenModal] = React.useState(initialStateModal);
  const getTheme = useTheme();
  const isMdLessThan = useMediaQuery(getTheme.breakpoints.down('md'));
  const queryClient = useQueryClient();

  const handleOpenModal = (typeAction: TypeAction) => {
    if (typeAction === 'ayahQuran') {
      setOpenModal({
        typeAction,
        isOpen: true,
      });

      queryClient.refetchQueries({ queryKey: ['RandomAyah'] });
    }

    if (typeAction === 'doa') {
      setOpenModal({
        typeAction,
        isOpen: true,
      });

      queryClient.refetchQueries({ queryKey: ['DoaHarianModal'] });
    }
  };

  const handleCloseModal = () => {
    setOpenModal(initialStateModal);
  };

  return (
    <>
      <Container>
        <Stack
          sx={{
            flexDirection: isMdLessThan ? 'column' : ' row',
            alignItems: 'center',
            gap: isMdLessThan ? 2 : 0,
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <CardDemo
            typeAction="ayahQuran"
            onOpenModal={handleOpenModal}
            Icon={ShuffleOnIcon}
            title="Ayat Of The Day!!"
            buttonText="get random ayat"
          />

          <Divider
            orientation="horizontal"
            color="primary.main"
            sx={{ width: isMdLessThan ? '80%' : '30%', height: '1px' }}
          />

          <CardDemo
            typeAction="doa"
            onOpenModal={handleOpenModal}
            Icon={ShuffleIcon}
            title="Doa Of The Day!!"
            buttonText="get random doa"
          />
        </Stack>
      </Container>

      <Modal open={openModal.isOpen} onClose={handleCloseModal}>
        { openModal.typeAction === 'ayahQuran' ? (
          <AyahQuranModalLayout
            onCloseModal={handleCloseModal}
            isOpen={openModal.isOpen}
            typeAction={openModal.typeAction}
          />
        ) : null}

        {openModal.typeAction === 'doa' ? (
          <DoaModalLayout
            onCloseModal={handleCloseModal}
            isOpen={openModal.isOpen}
            typeAction={openModal.typeAction}
          />
        ) : null}
      </Modal>
    </>
  );
}
