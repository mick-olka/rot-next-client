import Image from 'next/image'
import Link from 'next/link'

import s from './header.module.scss'

import { LocalesSelector } from './locales-selector'

import Logo from '@/public/logo.svg'

export const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.LogoLinksNavigateWrapper}>
        <Link href={'/'}>
          <Image src={Logo} alt={'Logo'} priority />
        </Link>
      </div>
      <div className={s.HeaderContentCenter}>
        <p>Lorem ipsum dolor sit!</p>
      </div>
      <LocalesSelector />
    </header>
  )
}
