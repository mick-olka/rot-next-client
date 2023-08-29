import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined'

import { Box, Skeleton } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import DialogContainer from './DialogContainer'

import * as S from './styles'

import { PersonProfile } from '../People'

import { useGetPerson, useUpdatePerson } from '@/hooks/use-people'

interface I_Props {
  open: boolean
  setOpen: (open: boolean) => void
  person_id: string
}

export const PersonInfoDialog = ({ person_id, open, setOpen }: I_Props) => {
  const { data, isLoading, mutate } = useGetPerson(person_id)
  const { trigger, isMutating, data: updated } = useUpdatePerson()

  const onToggleStar = () => {
    if (data) {
      trigger({ id: data._id, ...data, favorite: !data.favorite })
      mutate()
    }
  }

  if (isLoading) {
    return (
      <DialogContainer title='Loading' text={'Loading'} open={open} setOpen={setOpen}>
        <Skeleton height={300} width={200} />
      </DialogContainer>
    )
  }

  if (data)
    return (
      <DialogContainer open={open} setOpen={setOpen}>
        <S.StarBox onClick={onToggleStar} disabled={isMutating}>
          {data.favorite ? (
            <StarPurple500OutlinedIcon fontSize='large' />
          ) : (
            <StarBorderRoundedIcon fontSize='large' />
          )}
        </S.StarBox>
        <S.Pane>
          <PersonProfile data={data} short />
        </S.Pane>
        <Box
          sx={{ textDecoration: 'underline', margin: '1rem 0', width: '100%', textAlign: 'center' }}
        >
          <Link href={'/lab1/person/info/' + data._id}>More details</Link>
        </Box>
      </DialogContainer>
    )
  else {
    return (
      <Box>
        <h2>Error fetching person data</h2>
      </Box>
    )
  }
}
