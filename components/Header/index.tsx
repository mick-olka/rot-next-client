import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import s from './header.module.scss'

import { LocalesSelector } from './locales-selector'

import { useGetTextByName } from '@/hooks'
import Logo from '@/public/logo.svg'

export const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const ht = useGetTextByName('header_text')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const buttons = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <IconButton
        sx={{ bgcolor: '#ddd' }}
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PhoneInTalkRoundedIcon color='action' />
      </IconButton>
      <LocalesSelector />
    </div>
  )

  return (
    <header className={s.Header}>
      <div className={s.LogoLinksNavigateWrapper} style={{ width: matches ? 'auto' : '100%' }}>
        <Link href={'/'}>
          <Image src={Logo} alt={'Logo'} priority width={120} />
        </Link>
        {!matches && buttons}
      </div>
      <div className={s.HeaderContentCenter} style={{ maxWidth: matches ? '50%' : '100%' }}>
        <p>{ht}</p>
      </div>
      {matches && buttons}
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ top: '5px' }}
      >
        <div style={{ padding: '10px', textAlign: 'center', fontWeight: '600' }}>09:00 - 20:00</div>
        <MenuItem>
          <a href='tel:+05890000111'>0-589-0000111</a>
        </MenuItem>
        <MenuItem>
          <a href='tel:+05890000111'>0-589-0000111</a>
        </MenuItem>
        <MenuItem>
          <a href='tel:+05890000111'>0-589-0000111</a>
        </MenuItem>
      </Menu>
    </header>
  )
}
