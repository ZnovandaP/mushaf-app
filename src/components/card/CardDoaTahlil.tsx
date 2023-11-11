import * as React from 'react';
import {
  Card, CardContent, Chip, Divider, Typography,
} from '@mui/material';
import TextArabic from '../text/TextArabic';
import { DoaTahlil } from '../../types/typeResponsesDoaTahlil';

type CardDoaTahlilProps = {
  dataDoa: DoaTahlil
};
export default function CardDoaTahlil({ dataDoa }: CardDoaTahlilProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          variant="body1"
          fontSize="1.25rem"
          component="h2"
          color="primary.main"
          textAlign="center"
        >
          {`${dataDoa.id}. ${dataDoa?.title}`}
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
