import axios from 'axios';

import { BASE_URL } from '../constants/path';

export const fetcher = axios.create({
  baseURL: BASE_URL,
});
