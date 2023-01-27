import axios from 'axios';

const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

authApi.interceptors.request.use(
  async (config) => {
    console.debug('***** [AUTH] interceptors.request *****');
    console.debug(`${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.debug('[AUTH] error::', error);
    return Promise.reject(error);
  }
);

export default authApi;
