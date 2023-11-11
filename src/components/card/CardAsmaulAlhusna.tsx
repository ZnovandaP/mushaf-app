import * as React from 'react';
import {
  Card, CardContent, Chip, Divider, Stack, Typography,
} from '@mui/material';
import { AsmaulAlhusna } from '../../types/typeResponseAsmaulAlhusna';
import { NumberOfQuranMenu } from '../header/menuDrawer/QuranMenu';
import TextArabic from '../text/TextArabic';

type CardAsmaulAlhusnaProps = {
  dataAsmaulAlhusma: AsmaulAlhusna
};
export default function CardAsmaulAlhusna({ dataAsmaulAlhusma: data }: CardAsmaulAlhusnaProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Divider variant="middle">
          <NumberOfQuranMenu contentNumber={data.index} />
        </Divider>
        <Stack width="100%" justifyContent="center" alignItems="center" mt="4px">
          <TextArabic>{data.arabic}</TextArabic>
          <Typography
            variant="body1"
            component="i"
            color="primary"
          >
            {data.latin}
          </Typography>
        </Stack>
      </CardContent>

      <Divider variant="middle">
        <Chip
          label="English"
          color="secondary"
          variant="outlined"
          size="small"
        />
      </Divider>

      <CardContent>
        <Typography variant="body1" textAlign="center">{data.translation_en}</Typography>
      </CardContent>

      <Divider variant="middle">
        <Chip
          label="Bahasa"
          color="warning"
          variant="outlined"
          size="small"
        />
      </Divider>

      <CardContent>
        <Typography variant="body1" textAlign="center">{data.translation_id}</Typography>
      </CardContent>
    </Card>
  );
}
