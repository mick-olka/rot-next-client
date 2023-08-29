import s from './Footer.module.scss'

import { FooterContent } from '@/components/Footer/FooterContent'

export const Footer = () => {
  return (
    <footer className={s.Footer}>
      <FooterContent />
    </footer>
  )
}
