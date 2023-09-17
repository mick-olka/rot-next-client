import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded'
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { useMemo, useState } from 'react'

import { Gallery } from '../gallery'

import { useGetProductById, useGetTextByName } from '@/hooks'
import { MainLayout } from '@/layouts'
import { E_Locales } from '@/models'
import { phones } from '@/utils'

export const ProductPage = ({ id, locale }: { id: string; locale: E_Locales }) => {
  const { data } = useGetProductById(id)
  const dollar = useGetTextByName('dollar')
  const d = locale === E_Locales.ua ? Number(dollar) || 37 : 1
  const [color, setColor] = useState('0')
  const colors_list = data.photos.map((p) => ({
    id: p._id,
    label: `${p.main_color[locale]}${
      p.pill_color[locale] ? ' - ' + p.pill_color[locale] : ' - Без текстилю'
    }`,
  }))
  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value)
  }
  const all_photos = useMemo(() => {
    let all: string[] = []
    data.photos.forEach((p) => {
      if (color === '0' || color === p._id) all = all.concat(p.path_arr)
    })
    return all
  }, [data, color])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  // const description = data.description[locale].split('\n\n')
  return (
    <MainLayout title={data.name[locale]} description='Some Product'>
      <Card>
        <Grid container spacing={1} alignContent={'center'}>
          <Grid item lg={6} justifyContent={'center'}>
            <Box sx={{ maxWidth: '700px', padding: '1rem' }}>
              <Gallery photos={all_photos} />
            </Box>
          </Grid>
          <Grid item lg={6} justifyContent={'center'}>
            <Box>
              <Typography
                textAlign='center'
                textTransform='uppercase'
                color='#888'
                fontWeight='400'
                fontSize='22px'
                fontFamily='inherit'
                textOverflow='ellipsis'
                overflow='hidden'
                padding='1rem'
              >
                {data.name[locale]}
              </Typography>
              <Box sx={{ padding: '1rem' }}>
                <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <FormControl sx={{ minWidth: '200px', flexGrow: 1 }} size='small'>
                    <InputLabel id='select-color'>Color</InputLabel>
                    <Select
                      labelId='select-color'
                      value={color}
                      label='Color'
                      onChange={handleChange}
                    >
                      <MenuItem value={'0'}>All</MenuItem>
                      {colors_list.map((c) => (
                        <MenuItem key={c.id} value={c.id}>
                          {c.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button
                    variant='contained'
                    color='info'
                    id='phone-btn'
                    aria-controls={open ? 'phones-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ flexGrow: 1, maxWidth: '400px' }}
                  >
                    <PhoneInTalkRoundedIcon />
                    <Typography marginLeft='10px' fontFamily='inherit'>
                      Замовити
                    </Typography>
                    <Typography
                      sx={{
                        position: 'absolute',
                        bottom: '-1.5rem',
                        right: 1,
                        fontSize: '16px',
                        color: '#000',
                        textTransform: 'none',
                      }}
                    >
                      Задайте нам питання!
                    </Typography>
                  </Button>
                  <Menu
                    id='phones-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'phone-btn',
                    }}
                    sx={{ top: '5px' }}
                  >
                    <div style={{ padding: '10px', textAlign: 'center', fontWeight: '600' }}>
                      09:00 - 20:00
                    </div>
                    {phones.map((p) => (
                      <MenuItem key={p.label} style={{ textDecoration: 'underline' }}>
                        <a href={p.link}>{p.label}</a>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ marginTop: '1rem', display: 'flex' }}>
                  <Typography fontSize='25px' fontFamily='inherit'>
                    {data.price * d}
                  </Typography>
                  <Typography fontSize='15px' marginLeft='5px' color='#888'>
                    {locale === E_Locales.ua ? ' UAH' : '$'}
                  </Typography>
                </Box>
                <Box sx={{ padding: '1rem 0', fontSize: '18px', lineHeight: '25px' }}>
                  <p dangerouslySetInnerHTML={{ __html: data.description[locale] }}></p>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box sx={{ padding: '1rem' }}>
              {data.features[locale].map((f) => (
                <Box key={f.key} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography fontFamily='inherit' fontWeight={600} fontSize='19px'>
                    {f.key}:
                  </Typography>
                  <Typography fontFamily='inherit' textAlign={'right'} fontSize='19px'>
                    {f.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </MainLayout>
  )
}
