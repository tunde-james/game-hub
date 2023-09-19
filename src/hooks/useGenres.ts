import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import genres from '../data/genres';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 100, //24hrs
    initialData: genres,
  });
}

export default useGenres;
