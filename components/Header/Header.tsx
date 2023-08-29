import s from './Header.module.scss'

import { HeaderContent } from '@/components/Header/HeaderContent'

export const Header = () => {
  return (
    <header className={s.Header}>
      <HeaderContent />
    </header>
  )
}
