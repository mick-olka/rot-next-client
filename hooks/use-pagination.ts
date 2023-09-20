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
  return { page, onPageChange }
}
