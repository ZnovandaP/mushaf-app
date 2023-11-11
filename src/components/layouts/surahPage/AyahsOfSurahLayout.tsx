import * as React from 'react';
import { Grid as MUIGrid } from '@mui/material';
import { Ayah } from '../../../types/typesResponseQuranApi';
import CardAyah from '../../card/CardAyah';

type AyahsOfLayoutProps = {
  ayahs: Ayah[]
};

export default function AyahsOfSurahLayout({ ayahs }: AyahsOfLayoutProps) {
  return (
    <MUIGrid container my={6} gap={6}>
      {ayahs?.map((ayah) => (
        <MUIGrid item xs={12} key={`ayah_${ayah.number.inSurah}`}>
          <CardAyah ayah={ayah} />
        </MUIGrid>
      ))}
    </MUIGrid>
  );
}
