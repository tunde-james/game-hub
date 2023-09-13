import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import genres from '../data/genres';
import { FetchResponse } from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 100, //24hrs
    initialData: { count: genres.length, results: genres },
  });
}

export default useGenres;
