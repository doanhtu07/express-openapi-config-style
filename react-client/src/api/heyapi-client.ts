import { axiosApiInstance } from './axios'
import type { CreateClientConfig } from '@/heyapi/client.gen'

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  axios: axiosApiInstance,
})
