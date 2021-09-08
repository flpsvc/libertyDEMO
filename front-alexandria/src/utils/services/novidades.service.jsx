import axios from 'axios'
import { baseUrl } from '../api/api'

export const getNovidades = (limite) => { 
  return axios.get(baseUrl + 'app/produto/novidades?limite=' + limite)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}