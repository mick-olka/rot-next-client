import { LocalesObjectT } from './locales-model'

export interface I_TextBlock {
  _id: string
  name: string
  text: LocalesObjectT<string>
  font: object
  url: string
}
