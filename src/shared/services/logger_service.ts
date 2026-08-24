/* eslint-disable no-console */

import axios from "axios";

export default class LoggerService {
  private isDev: boolean

  constructor(environment = import.meta.env.VITE_ENVIROMENT) {
    this.isDev = environment === 'development'
  }

  axiosError(message: string, error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse = error.response.data as { message: string};
      console.error(message, errorResponse.message);
    }
  }

  debug(message: string, data?: unknown) {
    console.log('i', this.isDev);

    if (this.isDev) console.log(message, data)
  }

  error(message: string, error?: unknown) {
    if (this.isDev) console.error(message, error)
  }
}

export const loggerService = new LoggerService()
