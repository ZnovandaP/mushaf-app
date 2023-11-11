import * as React from 'react';
import { Chip, ChipProps } from '@mui/material';

type CurrentPageIndicatorProps = {
  currentpage : number,
  countpage: number,
  countdata: number,
} & ChipProps;
export default function CurrentPageIndicator(props: CurrentPageIndicatorProps) {
  const { currentpage, countdata, countpage } = props;
  const amountAllPage = Math.ceil(countdata / countpage);
  return (
    <Chip
      label={`${currentpage} / ${amountAllPage} pages`}
      variant="outlined"
      size="medium"
      color="info"
      sx={{
        fontStyle: 'italic',
        fontWeight: 500,
        opacity: '.5',
        fontSize: '16px',
      }}
      {...props}
    />
  );
}
