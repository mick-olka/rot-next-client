import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'

import s from './header.module.scss'

import Logo from '@/public/logo.svg'
import { getLocalesList } from '@/utils/constants'

export const HeaderContent = () => {
  const { asPath } = useRouter()
  const list = getLocalesList()
  return (
    <>
      <div className={s.LogoLinksNavigateWrapper}>
        <Link href={'/'}>
          <Image src={Logo} alt={'Logo'} priority />
        </Link>
      </div>
      <div className={s.HeaderContentCenter}>
        <p>Lorem ipsum dolor sit!</p>
      </div>
      <Box>
        {list.map((l) => (
          <p key={l}>
            <Link href={asPath} locale={l}>
              {l}
            </Link>
          </p>
        ))}
      </Box>
    </>
  )
}
