export type ApiOptions = {
  endpoint: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  query?: object;
  data?: Record<string, any> | FormData | null;
  body?: Record<string, any> | FormData | null;
  headers?: Record<string, string>;
  params?: Record<string, string>;
  timeout?: number;
  loader?: boolean;
  intercept?: boolean;
  path?: string;
  queryParam?: string;
};
