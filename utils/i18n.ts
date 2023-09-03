import { LocalesObjectT } from '@/models'

const p = (o: LocalesObjectT<string>): LocalesObjectT<string> => {
  return o
}

export const t = {
  sidebar: {
    home: p({ ua: 'Головна', en: 'Home', de: 'Main' }),
    categories: p({ ua: 'Категорії', en: 'Categories', de: 'Categories' }),
    about: p({ ua: 'Інформація', en: 'About', de: 'About' }),
  },
  header: {
    header_text: p({ ua: 'Меблі з ротангу', en: 'Rotang furniture', de: 'Rotang furniture' }),
  },
}
