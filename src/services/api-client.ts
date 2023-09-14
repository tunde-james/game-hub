import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8196d3eaa6f94b15bfcb0dbc80088e74',
  },
});
