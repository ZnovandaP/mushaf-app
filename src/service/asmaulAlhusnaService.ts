import { AllAsmaulAlhusna } from '../types/typeResponseAsmaulAlhusna';
import { asmaulAlhusnaApiConfig } from './apiConfig';

const getAsmaulAlhusna = async (): Promise<AllAsmaulAlhusna> => {
  const response = await fetch(asmaulAlhusnaApiConfig.urlGetAsmaulAlhusna());

  if (!response.ok) throw new Error('Proses pengambilan data Asmaul-Alhusna gagal dimuat');

  const data = response.json();
  return data;
};

export default getAsmaulAlhusna;
