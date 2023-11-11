import { useQuery } from '@tanstack/react-query';
import { getAllSurah } from '../service/quranService';

const useGetAllSurah = (key: string[]) => useQuery({
  queryKey: key,
  queryFn: getAllSurah,
});

export default useGetAllSurah;
