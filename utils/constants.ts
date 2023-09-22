import { E_Locales } from '@/models'

export const limit = 10
export const api_url = 'https://rotang.ua/api'
// export const api_url = 'http://213.217.8.92:4000/api'
export const photo_url = `${api_url}/upload/`
// export const local_url = 'http://213.217.8.92:3000'
export const local_url = 'https://rotang.ua'

export enum E_ApiPaths {
  products = '/products/',
  collections = '/collections/',
  text = '/text_blocks/',
}

export const getLocalesList = () => Object.values(E_Locales).map((l) => l)

export const phones = [
  { link: 'tel:+380443835853', label: '(044) 383 58 53' },
  { link: 'tel:+380965659071', label: '(096) 565 90 71' },
  { link: 'tel:+380955959803', label: '(095) 595 98 03' },
]
