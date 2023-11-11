import * as React from 'react';
import {
  styled, Button, Box, Stack, SvgIconTypeMap, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import useSetTheme from '../../hooks/useSetTheme';

type TypeAction = 'ayahQuran' | 'doa' | null;

type CardDemoProps = {
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
    muiName: string;
  },
  title: string,
  buttonText: string,
  typeAction: TypeAction,
  onOpenModal: (typeAction: TypeAction) => void
};

const WrapperGradient1 = styled(Box)({
  backgroundImage: 'linear-gradient(to right,#a855f7,  #ec38bc, #ec4899)',
  backgroundClip: 'text',
  color: 'transparent',
});

export default function CardDemo({
  Icon, title, buttonText, typeAction, onOpenModal,
}: CardDemoProps) {
  const getTheme = useTheme();
  const isMdLessThan = useMediaQuery(getTheme.breakpoints.down('md'));
  const { isDarkMode } = useSetTheme();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={3}
      width={isMdLessThan ? '80%' : '50%'}
    >
      <WrapperGradient1>
        <Typography variant="body1" textAlign="center" component="h2" fontSize={22} fontWeight={700}>
          {title}
        </Typography>
      </WrapperGradient1>

      <Icon sx={{ fontSize: '3rem' }} />

      <Button
        variant="contained"
        onClick={() => onOpenModal(typeAction)}
        sx={{
          background: 'transparent',
          color: isDarkMode ? '#f5f5f4' : '#292524',
          border: '1px solid #ec4899',
          transition: 'all .5s',
          '&:hover': {
            background: 'transparent',
            backgroundImage: 'linear-gradient(to right,#a855f7,  #ec38bc, #ec4899)',
            borderColor: 'transparent',
          },
        }}
      >
        {buttonText}
      </Button>
    </Stack>
  );
}
