import axios from 'axios'
import { baseUrl } from '../api/api'

export const getAllProdutos = (categoria) => {
  return axios.get(baseUrl + 'app/produto/' + categoria + '/')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}
