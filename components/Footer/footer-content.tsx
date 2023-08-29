import Image from 'next/image'

import s from './footer.module.scss'
import { SocialLinks } from './social-links'

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
