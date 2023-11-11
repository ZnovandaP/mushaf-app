import { QueryClient } from '@tanstack/react-query';

const ONE_DAY_IN_MILISECONDS = 24 * 60 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: ONE_DAY_IN_MILISECONDS,
      refetchInterval: ONE_DAY_IN_MILISECONDS,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default queryClient;
