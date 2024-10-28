import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { User } from '../models/DomainModels';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: { 'Content-Type': 'application/json' },
});

class Api {
  private async apiRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return apiClient.request<T>({
      method,
      url,
      data,
      ...config,
    });
  };

  public login(username: string, password: string): Promise<any> {
    return this.apiRequest<any>('POST', '/users', { username, password });
  }

  public async getUsers(): Promise<User[]> {
    const result = await this.apiRequest<User[]>('GET', '/users');

    return result.data;
  }
}

const api = new Api();
export default api;