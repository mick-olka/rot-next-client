import Image from 'next/image'
import Link from 'next/link'

import s from './header.module.scss'

import { LocalesSelector } from './locales-selector'

import { useGetTextByName } from '@/hooks'
import Logo from '@/public/logo.svg'

export const Header = () => {
  const ht = useGetTextByName('header_text')
  return (
    <header className={s.Header}>
      <div className={s.LogoLinksNavigateWrapper}>
        <Link href={'/'}>
          <Image src={Logo} alt={'Logo'} priority />
        </Link>
      </div>
      <div className={s.HeaderContentCenter}>
        <p>{ht}</p>
      </div>
      <LocalesSelector />
    </header>
  )
}
