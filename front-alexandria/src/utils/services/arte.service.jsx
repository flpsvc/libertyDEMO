import axios from 'axios'
import { baseUrl } from '../api/api'

export const getArte = (id) => { 
  return axios.get(baseUrl + 'app/produto/arte/buscacompleta/?id=' + id)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}