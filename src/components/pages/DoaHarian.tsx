import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import CurrentPageIndicator from '../helper/CurrentPageIndicator';
import ResponseErrorLayout from '../layouts/404Page/ResponseErrorLayout';
import getAllDoaHarian from '../../service/doaService';
import useGetCurrentPage from '../../hooks/useGetCurrentPage';
import chunkArray from '../../utils/chunkArray';
import Pagination from '../pagination/Pagination';
import DoaHarianListLayout from '../layouts/doaHarian/DoaHarianListLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function DoaHarian() {
  useDocumentTitle('Doa Harian');
  const dataAllDoaHarian = useQuery({
    queryKey: ['DoaHarianList'],
    queryFn: getAllDoaHarian,
  });

  const {
    data, isSuccess, error, isError,
  } = dataAllDoaHarian;

  const currentPage = useGetCurrentPage();

  const indexByCurrentPage = currentPage - 1;
  const postPerPage = 15;

  const dataDoaHarianChunk = chunkArray(isSuccess ? data.data : [], postPerPage);
  const currentPageDataDoaHarian = dataDoaHarianChunk[indexByCurrentPage];

  return (
    <>
      {isSuccess && (
      <Stack direction="column" gap={1} alignItems="center">
        <Typography
          variant="h6"
          component="h2"
          textAlign="center"
          color="primary"
          fontSize={28}
        >
          Daftar Doa-doa Harian
        </Typography>

        <CurrentPageIndicator
          currentpage={currentPage}
          countdata={data.data.length}
          countpage={postPerPage}
        />
      </Stack>
      )}

      <DoaHarianListLayout
        dataDoa={currentPageDataDoaHarian}
        {...dataAllDoaHarian}
      />

      {isSuccess && (
      <Pagination
        countdata={data.data.length}
        countpage={postPerPage}
      />
      )}

      {isError && (
      <>
        <Typography variant="h6" component="h2" textAlign="center" color="primary" fontSize={28}>
          Data Doa-doa harian Tidak Ditemukan
        </Typography>
        <ResponseErrorLayout message={error.message} />
      </>
      )}
    </>
  );
}
