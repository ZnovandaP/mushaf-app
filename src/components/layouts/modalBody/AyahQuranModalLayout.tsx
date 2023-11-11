import * as React from 'react';
import { Box, DialogContent as ModalBody } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Modal from '../../modal/Modal';
import CardAyah from '../../card/CardAyah';
import ResponseErrorLayout from '../404Page/ResponseErrorLayout';
import SkeletonCardAyah from '../../skeletonUI/helper/SkeletonCardAyah';
import { getRandomAyah } from '../../../service/quranService';

type AyahQuranModalLayoutProps = {
  onCloseModal: () => void
  typeAction: 'ayahQuran'
  isOpen: boolean
};

export default function AyahQuranModalLayout({ onCloseModal: handleCloseModal, typeAction, isOpen }
: AyahQuranModalLayoutProps) {
  const {
    data, isSuccess, error, isError, isFetching, isLoading, isPending,
  } = useQuery({
    queryKey: ['RandomAyah'],
    queryFn: getRandomAyah,
    enabled: typeAction === 'ayahQuran' && isOpen,
  });

  return (
    <>
      <Modal.Head title="Ayat Of The Day!!" onCloseModal={handleCloseModal} />
      <ModalBody dividers>
        {isLoading || isFetching || isPending ? (<SkeletonCardAyah />) : null}

        {isSuccess && (
          <Box py={4}>
            <CardAyah ayah={data} key={+new Date()} />
          </Box>
        )}

        {isError && (
          <Box mt={-3}>
            <ResponseErrorLayout message={error.message} />
          </Box>
        )}
      </ModalBody>
      <Modal.Footer />
    </>
  );
}
