import { useEffect, useState } from 'react'

export const usePaginator = () => {
  const [page, setPage] = useState(1)
  useEffect(() => {
    const p = localStorage.getItem('page')
    if (p) setPage(Number(p))
  }, [])
  const onPageChange = (p: number) => {
    setPage(p)
    localStorage.setItem('page', String(p))
  }
  const getPage = (): number => {
    const p = localStorage.getItem('page')
    if (p) return Number(p)
    return 1
  }
  return { page, onPageChange, getPage }
}
