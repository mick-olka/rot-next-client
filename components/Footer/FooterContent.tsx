import Image from 'next/image'

import s from './Footer.module.scss'

import { SocialLinks } from '@/components/Footer/SocialLinks'
import Logo from '@/public/logo.svg'

export const FooterContent = () => {
  return (
    <div className={s.FooterCopyrightBlock}>
      <div className={s.FooterIconWrapper}>
        <Image alt={'logo'} src={Logo} priority />
      </div>
      <div>Copyright © 2023 LoremIpsum. All rights reserve.</div>
      <div className={s.IconsBlock}>
        <SocialLinks />
      </div>
    </div>
  )
}
