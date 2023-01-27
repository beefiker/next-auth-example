import axios, { AxiosError } from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    const accessToken = session?.user.accessToken;
    console.debug('***** interceptors.request *****');
    if (config.headers) {
      // eslint-disable-next-line no-param-reassign
      config.headers['X-API-KEY'] = accessToken;
    }

    // console.debug(`${config.method?.toUpperCase()} ${config.url}`);
    // if (config.params) console.debug(config.params);
    return config;
  },
  (error) => {
    // console.debug(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response) => {
    // console.debug('***** interceptors.response *****');
    // const session = await getSession();
    // const refreshToken = session?.user.refreshToken;
    return response;
  },
  (error: AxiosError) => {
    // // ? handling error by message
    // switch (error?.message) {
    //   case "Network Error":
    //     break;

    //   case "timeout":
    //     break;
    // }

    // // ? handling error by status
    // switch (err?.response?.status) {
    //   case 400:
    //     // do something when 400
    //     break;
    //   case 401:
    //     // do something when 401
    //     break;
    //   case 402:
    //     // do something when 402
    //     break;
    //   case 403:
    //     // do something when 403
    //     break;
    //   case 404:
    //     // do something when 404
    //     break;
    //   case 406:
    //     // do something when 406
    //     break;
    //   case 413:
    //     // do something when 413
    //     break;
    // }

    console.debug(error);
    return Promise.reject(error);
  }
);

export default api;
