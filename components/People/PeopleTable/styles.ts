import { DataGrid } from '@mui/x-data-grid'
import { styled } from 'styled-components'

export const Pane = styled.div`
  margin: 1rem;
  /* height: 640px; */
`
export const TableStyled = styled(DataGrid)`
  background-color: ${({ theme }) => theme.bgPrimary};
`
