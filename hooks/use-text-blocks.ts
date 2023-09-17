import { useRouter } from 'next/router'
import useSWR from 'swr'

import { I_TextBlock } from '@/models'
import { E_ApiPaths } from '@/utils/constants'
import { fetcher, getLocaleSafe, getURL } from '@/utils/helpers'

const path = E_ApiPaths.text

export const getTextList = async (): Promise<I_TextBlock[]> => {
  const res = await fetch(getURL(path))
  if (res.ok) {
    return await res.json()
  } else throw new Error(String(res.body))
}

// for general use
export const useGetTextList = () => {
  const data = useSWR<I_TextBlock[]>(path, fetcher)
  return data
}

export const useGetTextByName = (name: string): string | null => {
  const { locale } = useRouter()
  const data = useSWR<I_TextBlock>(path + name, fetcher)
  if (data.error) return null
  if (data.data && data.data._id) return data.data.text[getLocaleSafe(locale || 'ua')]
  return ''
}
