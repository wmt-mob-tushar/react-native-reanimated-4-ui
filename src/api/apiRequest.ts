import { AxiosRequestConfig, Method } from 'axios';
import apiInstance from './apiInstance';

export interface ApiResult<T> {
  ok: boolean;
  status?: number;
  data?: T;
  problem?: string;
}

export async function request<T>(
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<ApiResult<T>> {
  try {
    const response = await apiInstance.request<T>({ method, url, data, ...config });
    return { ok: true, status: response.status, data: response.data };
  } catch (error: any) {
    return {
      ok: false,
      status: error?.response?.status,
      problem: error?.message ?? 'Unknown error',
    };
  }
}

export const apiGet = <T>(url: string, config?: AxiosRequestConfig) =>
  request<T>('GET', url, undefined, config);

export const apiPost = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
  request<T>('POST', url, data, config);

export const apiPut = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
  request<T>('PUT', url, data, config);

export const apiDelete = <T>(url: string, config?: AxiosRequestConfig) =>
  request<T>('DELETE', url, undefined, config);
