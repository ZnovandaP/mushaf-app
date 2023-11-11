import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import QuranListLayout from '../layouts/quranListPage/QuranListLayout';

import queryClient from '../../utils/queryClient';
import { getAllSurah } from '../../service/quranService';
import CurrentPageIndicator from '../helper/CurrentPageIndicator';
import useGetCurrentPage from '../../hooks/useGetCurrentPage';
import useGetAllSurah from '../../hooks/useGetAllSurah';
import chunkArray from '../../utils/chunkArray';
import Pagination from '../pagination/Pagination';
import ResponseErrorLayout from '../layouts/404Page/ResponseErrorLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export const loader = () => queryClient.fetchQuery({
  queryKey: ['QuranList'],
  queryFn: getAllSurah,
});

export default function QuranList() {
  useDocumentTitle('Quran List');
  const dataAllSurahs = useGetAllSurah(['QuranList']);
  const {
    isSuccess, data, isError, error,
  } = dataAllSurahs;

  const currentPage = useGetCurrentPage();

  const indexByCurrentPage = currentPage - 1;
  const postPerPage = 12;

  const dataSurahsChunk = chunkArray(isSuccess ? data : [], postPerPage);
  const currentPageDataSurahs = dataSurahsChunk[indexByCurrentPage];

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
          Daftar Surah-surah Al-Quran
        </Typography>

        <CurrentPageIndicator
          currentpage={currentPage}
          countdata={data.length}
          countpage={postPerPage}
        />
      </Stack>
      )}

      <QuranListLayout
        dataSurahs={currentPageDataSurahs}
        {...dataAllSurahs}
      />

      {isSuccess && (
      <Pagination
        countdata={data.length}
        countpage={postPerPage}
      />
      )}

      {isError && (
        <>
          <Typography variant="h6" component="h2" textAlign="center" color="primary" fontSize={28}>
            Daftar Al-Quran Tidak Ditemukan
          </Typography>
          <ResponseErrorLayout message={error.message} />
        </>
      )}
    </>
  );
}
