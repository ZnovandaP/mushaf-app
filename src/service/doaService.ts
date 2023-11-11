import { AllDoaHarian } from '../types/typeResponseDoaHarian';
import { AllDoaTahlil } from '../types/typeResponsesDoaTahlil';
import { doaHarianApiConfig, doaTahlilApiConfig } from './apiConfig';

const getAllDoaHarian = async (): Promise<AllDoaHarian> => {
  const response = await fetch(doaHarianApiConfig.urlGetAllDoa());

  if (!response.ok) throw new Error('Proses pengambilan data Doa harian gagal dimuat');

  const data = response.json();
  return data;
};

export const getAllDoaTahlil = async (): Promise<AllDoaTahlil> => {
  const response = await fetch(doaTahlilApiConfig.urlGetAllDoa());

  if (!response.ok) throw new Error('Proses pengambilan data Doa Tahlil gagal dimuat');

  const data = response.json();
  return data;
};

export default getAllDoaHarian;
