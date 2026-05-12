import type { Band } from "../types"
import { creatioUuid } from "../utils/creatio-uuid"


const bandsInitiales = [
  {
    name: 'Metallica',
    numberVotes: 28,
  },
  {
    name: 'Queen',
    numberVotes: 22,
  },
  {
    name: 'Heroes del silencio',
    numberVotes: 15,
  },
  {
    name: 'Bon Jovi',
    numberVotes: 10,
  },
]

export const creareBandsInitiales = (): Band[] => {
  return bandsInitiales.map(band => ({ ...band, id: creatioUuid() }))
}