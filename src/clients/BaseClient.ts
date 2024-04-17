import axios, { AxiosError, AxiosInstance } from 'axios';

export interface ClientError {
  message: string;
  statusCode?: string;
}

export interface ClientResponse<T> {
  error: ClientError | null;
  response: T | null;
}

export const extractErrorFromClientException = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exception: any
): ClientError => {
  if (exception instanceof AxiosError) {
    const e = exception as AxiosError;
    return {
      message: e.message,
      statusCode: e.code,
    };
  } else {
    let errorMessage = 'Request has failed';
    if (exception.message) {
      errorMessage = exception.message;
    } else if (exception.msg) {
      errorMessage = exception.msg;
    }

    return {
      message: errorMessage,
    };
  }
};

export class BaseClient {
  private url: string;
  protected client: AxiosInstance;

  constructor(baseURL: string) {
    this.url = baseURL;
    this.client = axios.create({
      baseURL,
    });
  }
}
