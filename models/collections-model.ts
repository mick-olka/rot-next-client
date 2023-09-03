import { LocalesObjectT } from './locales-model'
import { I_ProductPopulated } from './products-model'

export interface I_Collection {
  _id: string
  name: LocalesObjectT<string>
  url_name: LocalesObjectT<string>
  items: I_ProductPopulated[]
  keywords: string[]
  description: LocalesObjectT<string>
  index: number
}
