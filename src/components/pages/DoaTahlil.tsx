import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import CurrentPageIndicator from '../helper/CurrentPageIndicator';
import ResponseErrorLayout from '../layouts/404Page/ResponseErrorLayout';
import Pagination from '../pagination/Pagination';
import useGetCurrentPage from '../../hooks/useGetCurrentPage';
import { getAllDoaTahlil } from '../../service/doaService';
import chunkArray from '../../utils/chunkArray';
import DoaTahlilListLayout from '../layouts/doaTahlil/DoaTahlilListLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function DoaTahlil() {
  useDocumentTitle('Doa Tahlil');
  const dataAllDoaTahlil = useQuery({
    queryKey: ['DoaTahlilList'],
    queryFn: getAllDoaTahlil,
  });

  const {
    data, isSuccess, error, isError,
  } = dataAllDoaTahlil;

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

      <DoaTahlilListLayout
        dataDoa={currentPageDataDoaHarian}
        {...dataAllDoaTahlil}
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
          Data Doa-doa Tahlil Tidak Ditemukan
        </Typography>
        <ResponseErrorLayout message={error.message} />
      </>
      )}
    </>
  );
}
