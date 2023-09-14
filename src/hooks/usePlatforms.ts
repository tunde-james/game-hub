import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from './useData';
import apiClient from '../services/api-client';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    // initialData: { count: platform.length, results: platforms },
  });
}

export default usePlatforms;
