export interface characters {
  created: string
  episode: Array<string>
  gender: Gender
  id: number
  image: string
  location: Location
  name: string
  origin: Origin
  species: Species
  status: Status
  type: string
  url: string
}

type Gender = 'Male' | 'Female' | 'Unknown'
type Species = 'Human' | 'Alien'
type Status = 'Dead' | 'Alive' | 'Unknown'

interface Location {
  name: string
  url: string
}

interface Origin {
  name: string
  url: string
}

export interface Results {
  info: {
    count: number
    pages: number
    next: string | null
    prev: null | string
  }
  results: Array<characters>
}
