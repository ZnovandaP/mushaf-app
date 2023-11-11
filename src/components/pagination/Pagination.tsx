import * as React from 'react';
import { Box, PaginationItem, Pagination as MUIPagination } from '@mui/material';
import { Link } from 'react-router-dom';
import useGetCurrentPage from '../../hooks/useGetCurrentPage';

type PaginationProps = {
  countdata: number,
  countpage: number
};

export default function Pagination({ countdata, countpage }: PaginationProps) {
  const ActiveCurrentPage = useGetCurrentPage();
  const countPaginationItem = Math.ceil(countdata / countpage);

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MUIPagination
        page={ActiveCurrentPage}
        count={countPaginationItem}
        color="primary"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${item.page === 1 ? '' : `?page=${item.page}`}`}
            sx={{
              '&:hover': {
                bgcolor: 'rgba(168, 162, 158, .7)',
              },

              '&.Mui-selected': {
                fontWeight: 'bold',
                color: 'primary.main',
                bgcolor: 'rgba(0, 173, 124, .3)',
                border: '1px solid',
                borderColor: 'primary.main',
              },

              '&.Mui-selected:hover': {
                bgcolor: 'rgba(0, 173, 124, .5)',
              },
            }}
            {...item}
          />
        )}
      />
    </Box>
  );
}
