import * as React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout, { loader as RootLoader } from '../components/layouts/RootLayout';
import Home from '../components/pages/Home';
import QuranList, { loader as QuranLoader } from '../components/pages/QuranList';
import Surah from '../components/pages/Surah';
import NotFoundPage from '../components/pages/404';
import DoaHarian from '../components/pages/DoaHarian';
import DoaTahlil from '../components/pages/DoaTahlil';
import AsmauHusna from '../components/pages/AsmaulAlhusna';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<NotFoundPage />}
      loader={RootLoader}
    >
      <Route index element={<Home />} />
      <Route path="quran" element={<QuranList />} loader={QuranLoader} />
      <Route path="surah/:numberOfSurah/:surahName" element={<Surah />} />
      <Route path="doa-harian" element={<DoaHarian />} />
      <Route path="doa-tahlil" element={<DoaTahlil />} />
      <Route path="asmaul-alhusna" element={<AsmauHusna />} />
    </Route>,
  ),
);

export default router;
