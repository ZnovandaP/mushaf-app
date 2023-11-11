import * as React from 'react';
import { Box, DialogContent as ModalBody } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Modal from '../../modal/Modal';
import ResponseErrorLayout from '../404Page/ResponseErrorLayout';
import SkeletonCardAyah from '../../skeletonUI/helper/SkeletonCardAyah';
import CardDoaHarian from '../../card/CardDoaHarian';
import getAllDoaHarian from '../../../service/doaService';

type DoaModalLayoutProps = {
  onCloseModal: () => void;
  typeAction: 'doa';
  isOpen: boolean;
};

export default function DoaModalLayout({
  onCloseModal: handleCloseModal,
  typeAction,
  isOpen,
}: DoaModalLayoutProps) {
  const {
    data, isSuccess, error, isError, isFetching, isLoading, isPending,
  } = useQuery({
    queryKey: ['DoaHarianModal'],
    queryFn: getAllDoaHarian,
    enabled: typeAction === 'doa' && isOpen,
  });

  const dataAllIndex = isSuccess ? data.data.length - 1 : 0;

  const getRandomIndex = () => Math.round(Math.random() * dataAllIndex);

  return (
    <>
      <Modal.Head title="Doa Of The Day!!" onCloseModal={handleCloseModal} />
      <ModalBody dividers>
        {isLoading || isFetching || isPending ? <SkeletonCardAyah /> : null}

        {isSuccess && (
          <Box py={4}>
            <CardDoaHarian
              key={+new Date() / 2}
              dataDoa={data.data[getRandomIndex()]}
            />
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
