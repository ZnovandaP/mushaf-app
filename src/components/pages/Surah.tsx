import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { getSurahByNumberOfSurah } from '../../service/quranService';
import InformationSurahLayout from '../layouts/surahPage/InformationSurahLayout';
import AyahsOfSurahLayout from '../layouts/surahPage/AyahsOfSurahLayout';
import chunkArray from '../../utils/chunkArray';
import Pagination from '../pagination/Pagination';
import useGetCurrentPage from '../../hooks/useGetCurrentPage';
import SkeletonSurahPage from '../skeletonUI/SkeletonSurahPage';
import ResponseErrorLayout from '../layouts/404Page/ResponseErrorLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function Surah() {
  const { numberOfSurah, surahName } = useParams();

  const {
    data, isSuccess, isLoading, isPending, isFetching, error, isError,
  } = useQuery({
    queryKey: [`Surah_${surahName}`, numberOfSurah],
    queryFn: () => getSurahByNumberOfSurah(parseInt(numberOfSurah!, 10)),
    enabled: !!parseInt(numberOfSurah!, 10),
  });

  useDocumentTitle(`Surah ${isSuccess ? data.name : ''}`);

  const indexByCurrentPage = useGetCurrentPage() - 1;

  const postPerPage = 15;

  const currentPageAyahs = chunkArray(isSuccess ? data.ayahs : [], postPerPage);

  return (
    <>
      {isSuccess && (
        <>
          <InformationSurahLayout data={data} />

          <AyahsOfSurahLayout ayahs={currentPageAyahs[indexByCurrentPage]} />

          <Pagination
            countdata={data.ayahs.length}
            countpage={postPerPage}
          />
        </>
      )}

      {isError && (
        <>
          <Typography variant="h6" component="h2" textAlign="center" color="primary" fontSize={28}>
            Surah Tidak Ditemukan
          </Typography>
          <ResponseErrorLayout message={error.message} />
        </>
      )}

      {isLoading || isPending || isFetching ? (
        <SkeletonSurahPage />
      ) : null}
    </>
  );
}
