import * as React from 'react';
import {
  Card, CardContent, Stack, Typography, Divider, Chip, CardActions, IconButton, Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Ayah } from '../../types/typesResponseQuranApi';
import { NumberOfQuranMenu } from '../header/menuDrawer/QuranMenu';
import createNewDataTafsir from '../../utils/createNewDataTafsir';
import Audio from '../audio/Audio';
import TextArabic from '../text/TextArabic';

type CardAyahProps = {
  ayah: Ayah
};

export default function CardAyah({ ayah }: CardAyahProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 4,
        position: 'relative',
        pb: '5rem',
        overflow: 'visible',
      }}
    >
      <CardAyah.ContentAyah ayahOfSurah={ayah.arab} numberOfAyah={ayah.number.inSurah} />

      <CardAyah.DividerContent label="Terjemahan" />
      <CardAyah.ContentTranslationOfAyah translation={ayah.translation} />

      <CardAyah.DividerContent label="Tafsir" />
      <CardAyah.ContentTafsir tafsir={{ tafsir: ayah.tafsir }} />

      <CardAyah.ContentAudioSurah src={ayah.audio.alafasy ?? ayah.audio.ahmedajamy} />

    </Card>
  );
}

function ContentAyah({ ayahOfSurah, numberOfAyah }: { ayahOfSurah: string, numberOfAyah:number }) {
  return (
    <CardContent sx={{ pt: '1.75rem' }}>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
        <TextArabic
          variant="body1"
          component="p"
        >
          {ayahOfSurah}
        </TextArabic>

        <NumberOfQuranMenu contentNumber={numberOfAyah} />
      </Stack>
    </CardContent>
  );
}

function ContentTranslationOfAyah({ translation }: { translation: string }) {
  return (
    <CardContent>
      <Typography variant="body1">
        { translation }
      </Typography>
    </CardContent>
  );
}

function ContentTafsir({ tafsir }: { tafsir: Pick<Ayah, 'tafsir'> }) {
  const [openTafsir, setOpenTafsir] = React.useState({
    kemenag: false,
    quraish: false,
    jalalayn: false,
  });

  const handleToggleOpenTafsir = (key: 'kemenag' | 'jalalayn' | 'quraish') => {
    if (key === 'kemenag') {
      setOpenTafsir({
        ...openTafsir,
        kemenag: !openTafsir.kemenag,
      });
    }

    if (key === 'jalalayn') {
      setOpenTafsir({
        ...openTafsir,
        jalalayn: !openTafsir.jalalayn,
      });
    }

    if (key === 'quraish') {
      setOpenTafsir({
        ...openTafsir,
        quraish: !openTafsir.quraish,
      });
    }
  };

  return (
    createNewDataTafsir(tafsir).map((data) => {
      const key = data.key as keyof typeof openTafsir;

      return (
        <React.Fragment key={data.key}>
          <Stack direction="row" justifyContent="space-between">
            <CardContent>
              <Typography variant="body1" component="p" color="primary">
                {data.name}
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton onClick={() => handleToggleOpenTafsir(key)}>
                {openTafsir[key] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </CardActions>
          </Stack>

          <Collapse in={openTafsir[key]} timeout={450} unmountOnExit>
            <CardContent>
              <Typography variant="body1" component="p" paragraph>
                {data.dataTafsir}
              </Typography>
            </CardContent>
          </Collapse>

          <Divider />
        </React.Fragment>
      );
    })
  );
}

function ContentAudioSurah({ src }: { src: string }) {
  return (
    <Card
      variant="outlined"
      sx={{
        position: 'absolute',
        bottom: '-3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        borderColor: 'primary.main',
        borderRadius: '1rem',
        p: '1rem',
        width: {
          xs: '100%',
          sm: '22rem',
        },
      }}
    >
      <Audio src={src} />
    </Card>
  );
}

function DividerContentCardAyah({ label }: { label: string }) {
  return (
    <Divider variant="middle">
      <Chip
        label={label}
        variant="outlined"
        size="small"
        color="primary"
      />
    </Divider>
  );
}

CardAyah.ContentAyah = ContentAyah;
CardAyah.ContentTranslationOfAyah = ContentTranslationOfAyah;
CardAyah.ContentTafsir = ContentTafsir;
CardAyah.ContentAudioSurah = ContentAudioSurah;
CardAyah.DividerContent = DividerContentCardAyah;
