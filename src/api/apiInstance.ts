import axios from 'axios';
import Config from '@/config';
import { store } from '@/reduxToolkit/store';
import { logout } from '@/reduxToolkit/rootSlice';
import { resetRoot } from '@/router/RootNavigation';
import Routes from '@/router/Routes';

const apiInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(config => {
  const { token } = store.getState().app;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiInstance.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401) {
      store.dispatch(logout());
      resetRoot(Routes.UnAuthenticated);
    }
    return Promise.reject(error);
  },
);

export default apiInstance;
