import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useRef, useState } from 'react'

import de from './data/imgs/german.png'
import ua from './data/imgs/ukraine.png'
import en from './data/imgs/united-kingdom.png'

import { E_Locales } from '@/models'
import { getLocaleSafe, getLocalesList } from '@/utils'

const flags: { [key in E_Locales]: StaticImageData } = {
  de: de,
  ua: ua,
  en: en,
}

export const LocalesSelector = () => {
  const list = getLocalesList()
  const { asPath, locale } = useRouter()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState<E_Locales>(getLocaleSafe(locale || 'ua'))

  const handleClick = () => {
    // console.info(`You clicked ${options[selectedIndex]}`)
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    option: E_Locales,
  ) => {
    setSelectedIndex(option)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  return (
    <Box>
      <ButtonGroup variant='contained' ref={anchorRef}>
        <Button
          variant='outlined'
          size='small'
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='select language'
          aria-haspopup='menu'
          onClick={handleToggle}
        >
          <Image src={flags[selectedIndex]} alt='flag' />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu' autoFocusItem>
                  {list.map((option) => (
                    <Link href={asPath} locale={option} key={option}>
                      <MenuItem
                        selected={option === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, option)}
                      >
                        <Image src={flags[option]} alt='flag' />
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}
