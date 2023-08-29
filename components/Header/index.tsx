import s from './header.module.scss'

import { HeaderContent } from '@/components/header/header-content'

export const Header = () => {
  return (
    <header className={s.Header}>
      <HeaderContent />
    </header>
  )
}
