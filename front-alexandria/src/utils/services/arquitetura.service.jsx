import axios from 'axios'
import { baseUrl } from '../api/api'

export const getArquitetura = (id) => { 
  return axios.get(baseUrl + 'app/produto/arquitetura/buscacompleta/?id=' + id)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}