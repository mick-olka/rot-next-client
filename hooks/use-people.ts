import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import { I_Person, I_PeopleFilter, I_PersonListRes, I_PersonDTO } from '@/models'
import { fetcher, swrMutationCreator } from '@/utils/helpers'

export const people_api_url = '/api/people/'

const deletePerson = async (url: string, { arg }: { arg: string }) =>
  swrMutationCreator<I_Person>(url + arg, { method: 'DELETE' })

const deleteManyPerson = async (url: string, { arg }: { arg: string[] }) =>
  swrMutationCreator<I_Person>(url, {
    method: 'PATCH',
    body: JSON.stringify({ data: { ids: arg } }),
  })

const createPerson = async (url: string, { arg }: { arg: I_PersonDTO }) =>
  swrMutationCreator<I_Person>(url, { method: 'POST', body: JSON.stringify({ data: arg }) })

const updatePerson = async (url: string, { arg }: { arg: Partial<I_PersonDTO> & { id: string } }) =>
  swrMutationCreator<I_Person>(url + arg.id, {
    method: 'PATCH',
    body: JSON.stringify({ data: arg }),
  })

// for preload
export const getPeopleList = async (): Promise<I_Person[]> => {
  const res = await fetch('http://localhost:3000/api/people?page=1')
  if (res.ok) {
    return await res.json()
  } else throw new Error(String(res.body))
}

export const getPerson = async (id: string): Promise<I_Person> => {
  const res = await fetch('http://localhost:3000/api/people/' + id)
  if (res.ok) {
    return await res.json()
  } else throw new Error(String(res.body))
}

// for general use
export const useGetPeopleList = (filter: Partial<I_PeopleFilter>, page?: number) => {
  let url = people_api_url
  if (page) url = url + `?page=${page || 1}`
  if (filter)
    Object.entries(filter).forEach(([k, v]) => {
      if (v) url = url + `&${k}=${v}`
    })
  // if (filter.query) url = url + `&regex=${filter.query}`
  // if (filter.age) url = url + `&age=${filter.age}`
  // if (filter.country) url + `&country=${filter.country}`
  const data = useSWR<I_PersonListRes>(url, fetcher)
  return data
}

export const useGetFavorites = () => {
  const data = useSWR<I_Person[]>(`${people_api_url}spec/favorite`, fetcher)
  return data
}

export const useGetPerson = (id: string) => {
  const data = useSWR<I_Person>(people_api_url + id, fetcher)
  return data
}

export const useCreatePerson = () => {
  const data = useSWRMutation(people_api_url, createPerson)
  return data
}

export const useDeletePerson = () => {
  const data = useSWRMutation(people_api_url, deletePerson)
  return data
}

export const useDeleteManyPerson = () => {
  const data = useSWRMutation(people_api_url, deleteManyPerson)
  return data
}

export const useUpdatePerson = () => {
  const data = useSWRMutation(people_api_url, updatePerson)
  return data
}
