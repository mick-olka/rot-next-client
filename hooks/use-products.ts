import { useEffect } from 'react'
import useSWR, { mutate } from 'swr'

import { I_Product, I_ProductExtended, I_ProductsListRes, I_SWR_Fallback } from '@/models'
import { E_ApiPaths } from '@/utils/constants'
import { fetcher, getFetcher, getURL } from '@/utils/helpers'

const path = E_ApiPaths.products

// for preload
export const getProductsList = async (): Promise<I_ProductsListRes> => {
  const res = await fetch(getURL(path + '?limit=21&page=1'))
  if (res.ok) {
    return await res.json()
  } else throw new Error(String(res.body))
}

// for general use
export const useGetProductsList = (p = 1) => {
  // const [page, setPage] = useState(1)
  // if (page) url = url + `?page=${page || 1}`
  // if (filter)
  //   Object.entries(filter).forEach(([k, v]) => {
  //     if (v) url = url + `&${k}=${v}`
  //   })
  // if (filter.query) url = url + `&regex=${filter.query}`
  // if (filter.age) url = url + `&age=${filter.age}`
  // if (filter.country) url + `&country=${filter.country}`
  useEffect(() => {
    mutate(path)
  }, [p])
  const data = useSWR<I_ProductsListRes>(path, getFetcher(`?limit=21&page=${p}`), {
    // refreshInterval: 5000,
  })
  return data as I_SWR_Fallback<I_ProductsListRes>
}

export const getProductById = async (id: string): Promise<I_Product | null> => {
  const res = await fetch(getURL(path) + id)
  if (res.ok) {
    return await res.json()
  } else return null
  // } else throw new Error(String(res.body))
}

export const useGetProductById = (id: string) => {
  const data = useSWR<I_ProductExtended>(path + id, fetcher)
  return data as I_SWR_Fallback<I_ProductExtended>
}
