import { creareBandsInitiales } from "../data/bands-initiales.data"
import type { Band } from "../types"

interface BandsState {  //creamos una interfaz, estado de la aplicación (info de las bandas)
  bands: Band[]
}

export class BandsStore {

  private state: BandsState = {
    bands: creareBandsInitiales() //sacas la lista de bandas del archivo bands.initiales.data
  }
  
  addereBand(band: Band) {
    this.state.bands.push(band) //busca en state, y añade la banda que me mandan ".push"
  } 

  obtinereBands(): Band[] {
    return this.state.bands
  }

  delereBand(id: string): boolean { //filtro, si coincide se borra
    const longitudoInitialis = this.state.bands.length
    this.state.bands = this.state.bands.filter(band => band.id !== id)
    return this.state.bands.length < longitudoInitialis
  }

  addereVotumBand(id: string) { //buscala y si el identificado coincide con otro, añadele 1 voto
    const band = this.state.bands.find(band => band.id === id)
    if (!band) return null
    band.numberVotes += 1
    return band
  }
}