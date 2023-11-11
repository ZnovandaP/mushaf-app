import * as React from 'react';
import {
  Box, Card, CardActions, CardContent, Chip, Divider, Stack, SvgIconTypeMap, Typography, styled,
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import ButtonRouter from '../routingComponent/ButtonRouter';

type CardMainContentProps = {
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
    muiName: string;
  },
  title: string,
  tagline:string,
  desc: string,
  to: string,
};

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right, #11998e,
    ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  backgroundClip: 'text',

}));

export default function CardMainContent(props: CardMainContentProps) {
  const {
    title, tagline, desc, Icon, to,
  } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: 'primary.main',
      }}
    >
      <CardContent>
        <Stack alignItems="center" justifyContent="center" gap={1}>
          <Icon fontSize="large" sx={{ color: 'primary.light' }} />
          <Wrapper>
            <Typography
              variant="h6"
              component="h2"
              textAlign="center"
              fontSize={18}
              sx={{ color: 'transparent' }}
            >
              {tagline}
            </Typography>
          </Wrapper>
        </Stack>
      </CardContent>

      <Divider variant="middle">
        <Chip
          label="Deskripsi"
          size="small"
          color="info"
          variant="outlined"
        />
      </Divider>

      <CardContent>
        <Typography variant="body2" sx={{ hyphens: 'auto', letterSpacing: '.8px' }} textAlign="center">
          {desc}
        </Typography>
      </CardContent>

      <Divider variant="middle">
        <Chip
          label={`Mari Baca ${title}`}
          size="small"
          color="info"
          variant="outlined"
        />
      </Divider>

      <CardActions>
        <Stack width="100%" justifyContent="center" alignItems="center" p=".8rem">
          <ButtonRouter
            variant="outlined"
            to={to}
            endIcon={<EastIcon />}
          >
            Baca
            {' '}
            {title}
          </ButtonRouter>
        </Stack>
      </CardActions>
    </Card>
  );
}
