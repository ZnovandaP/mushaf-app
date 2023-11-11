import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AllSurah } from '../../types/typesResponseQuranApi';

type Surah = Omit<AllSurah, 'audio'>;

type CardQuranListProps = {
  surah: Surah
};
export default function CardQuranList({ surah }: CardQuranListProps) {
  const navigate = useNavigate();

  const createUrlSurah = () => (
    `/surah/${surah?.number}/${surah?.name.toLowerCase().split(' ').join('')}`
  );

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          direction="row"
          gap={5}
          alignItems="center"
          width="100%"
          justifyContent="center"
        >
          <Stack direction="column" gap="4px" justifySelf="center">
            <Typography variant="body1" fontSize={18} component="p" color="primary" textAlign="center">
              <Typography
                component="span"
                fontWeight="bold"
                color="primary"
              >
                {surah?.number}
              </Typography>
              {`. ${surah?.name}`}
            </Typography>
            <Typography variant="body2" fontSize={13} component="i" textAlign="center">
              {surah?.translation}
            </Typography>
          </Stack>

        </Stack>
      </CardContent>
      <Divider variant="middle">
        <Chip
          label={`${surah?.numberOfAyahs} Ayat`}
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Divider>

      <CardContent>
        <Typography
          variant="body2"
          paragraph
          component="p"
          sx={{
            WebkitLineClamp: 5,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            margin: 0,
          }}
        >
          {surah?.description}
        </Typography>
      </CardContent>
      <Divider variant="middle">
        <Chip
          label={surah?.revelation}
          color={surah?.revelation === 'Makkiyah' ? 'info' : 'warning'}
          variant="outlined"
          size="small"
        />
      </Divider>

      <CardActions sx={{ p: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          onClick={() => navigate(createUrlSurah())}
        >
          {`Baca Surah ${surah?.name}`}
        </Button>
      </CardActions>
    </Card>
  );
}
