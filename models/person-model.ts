export enum SexE {
  m = 'male',
  f = 'female',
  r = 'robot',
}

export enum CoursesE {
  Math = 'Mathematics',
  Phys = 'Physics',
  Eng = 'English',
  CS = 'Computer Science',
  Dance = 'Dancing',
  Chess = 'Chess',
  Bio = 'Biology',
  Chem = 'Chemistry',
  Law = 'Law',
  Art = 'Art',
  Med = 'Medicine',
  Stat = 'Statistics',
}
const courses_array = Object.values(CoursesE)

export interface I_PeopleFilter {
  query: string
  age: number
  country: string
  dob: string | Date
}

export interface I_Person extends Document {
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
  postcode?: number
  photo_thumbnail?: string
  photo_full?: string
  course: CoursesE
  favorite: boolean
  map: { lng: number; lat: number }
}

export interface I_PersonListRes {
  total: number
  list: I_Person[]
}

export interface I_PersonDTO {
  name: string
  phone: string
  age: number
  sex: 'male' | 'female' | 'robot'
  dob: Date
  email: string
  about: string
  country: string
  address: string
  color: string
  favorite?: boolean
}
