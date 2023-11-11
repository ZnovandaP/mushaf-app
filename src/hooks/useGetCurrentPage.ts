import { useLocation } from 'react-router-dom';

const useGetCurrentPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return parseInt(query.get('page') ?? '1', 10);
};

export default useGetCurrentPage;
