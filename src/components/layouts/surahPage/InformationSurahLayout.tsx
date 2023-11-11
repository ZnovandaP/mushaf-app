import * as React from 'react';
import {
  Card, CardActions, CardContent, Chip, Collapse, Divider, IconButton, Stack, Typography,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import { SurahByNumberOfSurah } from '../../../types/typesResponseQuranApi';
import useGetCurrentPage from '../../../hooks/useGetCurrentPage';
import CurrentPageIndicator from '../../helper/CurrentPageIndicator';

type InformationSurahLayoutProps = {
  data: SurahByNumberOfSurah
};

export default function InformationSurahLayout({ data }: InformationSurahLayoutProps) {
  const [openDescription, setOpenDescription] = React.useState(false);
  const currentPage = useGetCurrentPage();
  const postPerPage = 15;

  const handleToggleOpenDescription = () => {
    setOpenDescription(!openDescription);
  };

  return (
    <>
      <Stack direction="column" alignItems="center" justifyContent="center" mb={4}>
        <Typography variant="h6" component="h2" textAlign="center" color="primary" fontSize={28}>
          <Typography variant="body1" component="span" fontSize={24} fontWeight="bold">
            {data.number}
          </Typography>
          {`. Surah ${data.name}`}
        </Typography>
        <Typography variant="body1" component="i" textAlign="center" fontSize={18}>
          {`"${data.translation}" -`}
          <Chip
            label={`${data.numberOfAyahs} Ayat`}
            variant="outlined"
            size="small"
            color="primary"
            sx={{ fontSize: '16px', ml: 1 }}
          />
        </Typography>
        <Chip
          label={data.revelation}
          color={data.revelation === 'Makkiyah' ? 'info' : 'warning'}
          variant="outlined"
          size="medium"
          sx={{ fontSize: '16px', width: '150px', mt: '.85rem' }}
        />
        <CurrentPageIndicator
          currentpage={currentPage}
          countdata={data.ayahs.length}
          countpage={postPerPage}
          sx={{
            fontStyle: 'italic',
            mt: '.85rem',
            fontWeight: 500,
            opacity: '.5',
            fontSize: '16px',
          }}
        />
      </Stack>

      <Card sx={{ mb: 4 }} variant="outlined">
        <Stack direction="row" justifyContent="space-between">
          <CardContent>
            <Stack direction="row" spacing={2}>
              <DescriptionIcon color="primary" />
              <Typography variant="body1" component="p">
                {`Pengantar Surah ${data?.name}`}
              </Typography>
            </Stack>
          </CardContent>

          <CardActions>
            <IconButton onClick={handleToggleOpenDescription}>
              {openDescription ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </CardActions>
        </Stack>

        <Collapse in={openDescription} timeout={450} unmountOnExit>
          <CardContent>
            <Typography variant="body1" component="p" paragraph>
              {data.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Divider sx={{
        '&::before, &::after': {
          borderColor: 'primary.main',
        },
      }}
      >
        <Typography
          variant="body1"
          component="p"
          fontFamily="LMTQ-Quran"
          sx={{
            fontSize: {
              xs: '1.25rem',
              md: '1.625rem',
            },
            lineHeight: {
              xs: '2.75rem',
            },
          }}
        >
          {data.bismillah.arab}
        </Typography>
      </Divider>

    </>
  );
}
