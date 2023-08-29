import { SWRResponse } from 'swr'

export interface I_SWR_Fallback<T> extends SWRResponse<T> {
  data: T
}

export enum E_Locales {
  ua = 'ua',
  en = 'en',
  de = 'de',
}
