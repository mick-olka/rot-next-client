import { FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import * as S from './styles'

import { ColorPicker } from '../../Color/ColorPicker'

import { SexE } from '@/utils/Models/Person'

export const DynamicMap = dynamic(() => import('@/components/Map/Map'), {
  ssr: false,
})

export interface I_PersonForm {
  name: string
  phone: string
  age: number
  sex: SexE
  dob: Date
  email: string
  about: string
  country: string
  address: string
  color: string
  map: { lng: number; lat: number }
}

interface I_Props {
  onSubmit: (data: I_PersonForm) => void
  initData?: I_PersonForm
}

const def: I_PersonForm = {
  name: '',
  phone: '+3809623963',
  age: 30,
  sex: SexE.m,
  dob: new Date('10-11-78'),
  email: 'mail@example.com',
  about: 'Teacher at the University of Washington',
  country: 'United States',
  address: 'Washington, Baker str. 590',
  color: '#ccc',
  map: { lng: -0.09, lat: 51.505 },
}

export const PersonForm = ({ onSubmit, initData }: I_Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<I_PersonForm>({
    defaultValues: initData || def,
  })
  const isLoading = false

  const field = (
    title: string,
    field: keyof I_PersonForm,
    type: 'text' | 'number' | 'date',
    required?: boolean,
  ) => {
    return (
      <S.TextFieldBox>
        <FormLabel>{title}</FormLabel>
        <S.TextFieldStyled
          type={type}
          error={!!errors[field]}
          {...register(field, { required: !!required })}
        />
      </S.TextFieldBox>
    )
  }

  watch('color', 'map.lng')

  return (
    <S.Pane>
      <form onSubmitCapture={handleSubmit(onSubmit)}>
        {field('Name', 'name', 'text', true)}
        {field('Phone', 'phone', 'text')}
        {field('Age', 'age', 'number')}
        <S.TextFieldBox>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row defaultValue={'male'} {...register('sex')}>
            <FormControlLabel value='female' control={<Radio />} label='Female' />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='robot' control={<Radio />} label='Other' />
          </RadioGroup>
        </S.TextFieldBox>
        {field('Date of Birth', 'dob', 'date')}
        {field('Email', 'email', 'text')}
        {field('About', 'about', 'text')}
        {field('Country', 'country', 'text')}
        {field('Address', 'address', 'text')}
        {field('Profile Color', 'color', 'text')}
        <S.TextFieldBox>
          <ColorPicker color={getValues('color')} onChange={(c) => setValue('color', c)} />
        </S.TextFieldBox>

        <DynamicMap position={getValues('map')} onClick={(c) => setValue('map', c)} />

        <S.ButtonStyled variant='contained' type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Save'}
        </S.ButtonStyled>
      </form>
    </S.Pane>
  )
}
