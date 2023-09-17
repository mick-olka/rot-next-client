import { LocalesObjectT } from '@/models'

const p = (o: LocalesObjectT<string>): LocalesObjectT<string> => {
  return o
}

export const t = {
  sidebar: {
    home: p({ ua: 'Головна', en: 'Home', de: 'Main' }),
    categories: p({ ua: 'Категорії', en: 'Categories', de: 'Categories' }),
    contacts: p({ ua: 'Про нас', en: 'About us', de: 'About us' }),
  },
  header: {
    header_text: p({ ua: 'Меблі з ротангу', en: 'Rotang furniture', de: 'Rotang furniture' }),
  },
}
