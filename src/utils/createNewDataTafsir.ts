import { Ayah } from '../types/typesResponseQuranApi';

type ReturnFunction = {
  key: string,
  name: string,
  dataTafsir: string,
};

const createNewDataTafsir = (
  { tafsir }: Pick<Ayah, 'tafsir'>,
) : ReturnFunction[] => Object.entries(tafsir).map(([key, values]) => {
  if (key === 'kemenag' && typeof values !== 'string') {
    return {
      key,
      name: 'Kementrian Agama',
      dataTafsir: values.long,
    };
  }

  if (key === 'quraish' && typeof values === 'string') {
    return {
      key,
      name: 'Quraish Shihab',
      dataTafsir: values,
    };
  }

  return {
    key,
    name: 'Jalalayn',
    dataTafsir: typeof values === 'string' ? values : '',
  };
});

export default createNewDataTafsir;
