import React from 'react'
import { useSWRConfig } from 'swr'

import DialogContainer from './DialogContainer'

import * as S from './styles'

import { I_PersonForm, PersonForm } from '../People/PersonForm/PersonForm'

import { people_api_url, useCreatePerson } from '@/hooks/use-people'

interface I_Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export const AddPersonDialog = ({ open, setOpen }: I_Props) => {
  const { trigger: triggerCreate } = useCreatePerson()
  const { mutate } = useSWRConfig()

  const handleCreate = async (data: I_PersonForm) => {
    await triggerCreate(data)
    mutate(people_api_url)
  }

  const handleSubmit = async (data: I_PersonForm) => {
    await handleCreate(data)
    setOpen(false)
  }

  return (
    <DialogContainer title='Add Person' open={open} setOpen={setOpen}>
      <S.Pane>
        <PersonForm onSubmit={handleSubmit} />
      </S.Pane>
    </DialogContainer>
  )
}
