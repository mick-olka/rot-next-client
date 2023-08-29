import { E_Locales } from '@/models'

export const limit = 10
export const api_url = 'http://localhost:4000/api'

export enum E_ApiPaths {
  products = '/products/',
}

export const getLocalesList = () => Object.values(E_Locales).map((l) => l)
