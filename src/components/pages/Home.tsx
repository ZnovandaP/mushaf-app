import * as React from 'react';
import { Stack } from '@mui/material';
import PrologueLayout from '../layouts/homePage/PrologueLayout';
import IntroductionLayout from '../layouts/homePage/IntroductionLayout';
import MainContentLayout from '../layouts/homePage/MainContentLayout';
import DemoLayout from '../layouts/homePage/DemoLayout';
import CreditLayout from '../layouts/homePage/CreditLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('');
  return (
    <Stack gap={4}>
      <PrologueLayout />
      <IntroductionLayout />
      <MainContentLayout />
      <DemoLayout />
      <CreditLayout />
    </Stack>
  );
}
