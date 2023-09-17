import Carousel from 'react-gallery-carousel'

import s from './gallery.module.scss'

import 'react-gallery-carousel/dist/index.css'
import { photo_url } from '@/utils'

export const Gallery = ({ photos }: { photos: string[] }) => {
  const images = photos.map((p) => ({
    src: photo_url + p,
    alt: `R`,
    title: p,
  }))
  return (
    <div className={s.carousel}>
      <Carousel
        images={images}
        objectFit={'contain'}
        playIcon={false}
        style={{ height: '24rem', backgroundColor: 'transparent', borderRadius: '0.3rem' }}
        shouldMaximizeOnClick={true}
        shouldMinimizeOnClick={true}
        hasIndexBoard={false}
      />
    </div>
  )
}