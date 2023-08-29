import React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import { defaultTheme, ITheme } from '@/styles/theme'

interface IThemeProps {
  children: React.ReactNode
}
export const Theme = ({ children }: IThemeProps) => {
  const currentTheme: ITheme = defaultTheme

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </StyleSheetManager>
  )
}
