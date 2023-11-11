import * as React from 'react';
import {
  Card, CardContent, Chip, Divider, Typography,
} from '@mui/material';
import { DoaHarian } from '../../types/typeResponseDoaHarian';
import TextArabic from '../text/TextArabic';

type CardDoaHarianProps = {
  dataDoa: DoaHarian
  number?: number
};
export default function CardDoaHarian({ dataDoa, number }: CardDoaHarianProps) {
  const numberDoa = number ? `${number}.` : '*';

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2" color="primary.main" textAlign="center">
          {`${numberDoa} ${dataDoa?.title}`}
        </Typography>
      </CardContent>

      <Divider variant="middle" />
      <CardContent>
        <TextArabic
          variant="body1"
          component="p"
        >
          {dataDoa?.arabic}
        </TextArabic>
      </CardContent>

      <Divider variant="middle">
        <Chip
          label="Latin"
          size="small"
          variant="outlined"
          color="primary"
        />
      </Divider>
      <CardContent>
        <Typography
          variant="body1"
          component="i"
        >
          {dataDoa?.latin}
        </Typography>
      </CardContent>

      <Divider variant="middle">
        <Chip
          label="Terjemahan"
          size="small"
          variant="outlined"
          color="info"
        />
      </Divider>
      <CardContent>
        <Typography
          variant="body1"
        >
          {`"${dataDoa?.translation}"`}
        </Typography>
      </CardContent>
    </Card>
  );
}
