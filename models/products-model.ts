import { E_Locales, LocalesObjectT } from './locales-model'

export type I_ProductFeatures = {
  [key in E_Locales]: {
    key: string
    value: string
  }[]
}

export interface I_Product {
  _id: string
  name: LocalesObjectT<string>
  url_name: string
  code: string
  price: number
  old_price: number
  thumbnail: string
  keywords: string[]
  description: LocalesObjectT<string>
  features: I_ProductFeatures
  photos: string[]
  collections: string[]
  related_products: string[]
  similar_products: string[]
  index: number
}

export interface I_ProductPopulated
  extends Pick<
    I_Product,
    '_id' | 'name' | 'price' | 'url_name' | 'old_price' | 'thumbnail' | 'index'
  > {}

export interface I_ProductExtended
  extends Omit<I_Product, 'related_products' | 'similar_products' | 'photos'> {
  related_products: I_ProductPopulated[]
  similar_products: I_ProductPopulated[]
  photos: string[] //
}

export interface I_ProductsListRes {
  docs: I_Product[]
  count: number
}
