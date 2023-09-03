import { SWRConfig } from 'swr'

import { CollectionsPage } from '@/components'
import { getCollectionsList } from '@/hooks'
import { E_Locales, I_Collection } from '@/models'
import { E_ApiPaths } from '@/utils/constants'

export async function getStaticProps({ locale }: { locale: E_Locales }) {
  const data = await getCollectionsList()
  return {
    props: { fallback: { [E_ApiPaths.collections]: data }, locale },
    revalidate: 60,
  }
}

export default function Page({
  fallback,
}: {
  fallback: { [E_ApiPaths.collections]: I_Collection[] }
}) {
  return (
    <SWRConfig value={{ fallback }}>
      <CollectionsPage />
    </SWRConfig>
  )
}
