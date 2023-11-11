import { quranApiConfig } from './apiConfig';
import { AllSurah, Ayah, SurahByNumberOfSurah } from '../types/typesResponseQuranApi';

export const getAllSurah = async (): Promise<AllSurah[]> => {
  const response = await fetch(quranApiConfig.urlGetAllSurah());

  if (!response.ok) throw new Error('Proses pengambilan data daftar surah Al-Quran gagal dimuat');

  const data = response.json();
  return data;
};

export const getSurahByNumberOfSurah = async (numberOfSurah: number): Promise<SurahByNumberOfSurah> => {
  const response = await fetch(quranApiConfig.urlGetSurahByNumberOfSurah(numberOfSurah));

  if (!response.ok) throw new Error('Proses pengambilan data Surah Al-Quran gagal dimuat');

  const data = response.json();
  return data;
};

export const getRandomAyah = async (): Promise<Ayah> => {
  const response = await fetch(quranApiConfig.urlGetRandomAyah());

  if (!response.ok) throw new Error('Proses pengambilan data ayat al-Quran gagal dimuat');

  const data = response.json();
  return data;
};
