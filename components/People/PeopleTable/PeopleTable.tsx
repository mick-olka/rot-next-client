import { GridRowsProp, GridColDef, GridRowSelectionModel, GridRowParams } from '@mui/x-data-grid'

import { useEffect, useState } from 'react'

import * as S from './styles'

import { I_Person } from '@/models'

const createData = (data: I_Person) => {
  return { id: data._id, ...data }
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'age', headerName: 'Age' },
  { field: 'country', headerName: 'Country', width: 150 },
  { field: 'address', headerName: 'Place', width: 250 },
]

export function PeopleTable({
  list,
  rowCount,
  onRowClick,
  onSelect,
  page,
  onPageChange,
}: {
  list: I_Person[]
  page: number
  rowCount: number
  onPageChange: (page: number) => void
  onRowClick: (id: string) => void
  onSelect?: (ids: string[]) => void
}) {
  const rows: GridRowsProp = list.map((el) => createData(el))
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: page,
  })

  useEffect(() => {
    onPageChange(paginationModel.page)
  }, [paginationModel.page, onPageChange])
  return (
    <S.Pane>
      <S.TableStyled
        autoHeight
        rows={rows}
        rowCount={rowCount}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        // initialState={{
        //   pagination: { paginationModel: { pageSize: 5 } },
        // }}
        pageSizeOptions={[10]}
        paginationMode='server'
        checkboxSelection={!!onSelect}
        onRowSelectionModelChange={(ids: GridRowSelectionModel) => {
          onSelect && onSelect(ids as string[])
        }}
        onRowClick={(param: GridRowParams) => onRowClick(String(param.id))}
      />
    </S.Pane>
  )
}
