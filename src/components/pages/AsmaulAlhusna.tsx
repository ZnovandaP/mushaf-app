import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import getAsmaulAlhusna from '../../service/asmaulAlhusnaService';
import useGetCurrentPage from '../../hooks/useGetCurrentPage';
import chunkArray from '../../utils/chunkArray';
import Pagination from '../pagination/Pagination';
import CurrentPageIndicator from '../helper/CurrentPageIndicator';
import ResponseErrorLayout from '../layouts/404Page/ResponseErrorLayout';
import AsmaulAlhusnaListLayout from '../layouts/asmaulAlhusna/AsmaulAlhusnaListLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function AsmaulAlhusna() {
  useDocumentTitle('Asmaul-Alhusna');
  const dataAllAsmaulAlhusna = useQuery({
    queryKey: ['AsmaulAlhusnaList'],
    queryFn: getAsmaulAlhusna,
  });
  const {
    isSuccess, data, isError, error,
  } = dataAllAsmaulAlhusna;

  const currentPage = useGetCurrentPage();

  const indexByCurrentPage = currentPage - 1;
  const postPerPage = 12;

  const dataSurahsChunk = chunkArray(isSuccess ? data.data : [], postPerPage);
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
          99 Asmaul-Alhusna Allah SWT.
        </Typography>

        <CurrentPageIndicator
          currentpage={currentPage}
          countdata={data.data.length}
          countpage={postPerPage}
        />
      </Stack>
      )}

      <AsmaulAlhusnaListLayout
        dataAsmaulAlhusna={currentPageDataSurahs}
        {...dataAllAsmaulAlhusna}
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
            Data 99 Asmaul-Alhusna Tidak Ditemukan
          </Typography>
          <ResponseErrorLayout message={error.message} />
        </>
      )}
    </>
  );
}
