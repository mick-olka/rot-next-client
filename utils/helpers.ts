import { NextApiResponse } from 'next'
import { toast } from 'react-toastify'

import { api_url } from './constants'

import { E_Locales, I_PeopleFilter } from '@/models'

export const toasterPending = <T>(
  method: Promise<T>,
  pending?: string,
  error?: string,
  success?: string,
): Promise<T> => {
  return toast.promise(method, {
    pending: pending || 'Loading...',
    error: {
      render({ data }) {
        console.log(data)
        return error || 'Error'
      },
    },
    success: success || 'Success',
  })
}

export const resNotFound = (res: NextApiResponse<{ error: string }>) => {
  return res.status(404).json({ error: 'Not Found' })
}

export const _return_promise_data = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000)
  })
}

export const swrMutationCreator = async <T>(
  url: string,
  fetchOptions?: { method: string; body?: string },
): Promise<T> => {
  const fetcher = async (): Promise<T> => {
    const res = await fetch(url, fetchOptions)
    if (res.ok) {
      return await res.json()
    } else throw new Error(String(res.body))
  }
  return await toasterPending(fetcher())
}

export const getURL = (path: string): string => api_url + path

export const fetcher = (url: string) => fetch(getURL(url)).then((res) => res.json())

export const getFilterForSearch = (
  // search_string: string | undefined,
  filter: Partial<I_PeopleFilter>,
  fields: string[],
): object => {
  const f_arr: object[] = []
  if (filter.query) {
    const search_words = filter.query.split(' ').join('|')
    const regex = new RegExp(search_words, 'i') // i for case insensitive
    const regex_fields = fields.map((f) => ({ [f]: { $regex: regex } }))
    f_arr.push({ $or: regex_fields })
  }
  if (filter.age) f_arr.push({ age: filter.age })
  if (filter.country) f_arr.push({ country: filter.country })
  if (filter.dob) f_arr.push({ dob: filter.dob })
  return f_arr.length ? { $and: f_arr } : {}
}

export const getLocaleSafe = (l: string) => {
  if (Object.keys(E_Locales).includes(l)) return l as E_Locales
  return E_Locales.ua
}
