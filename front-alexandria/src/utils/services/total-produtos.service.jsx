import axios from 'axios'
import { baseUrl } from '../api/api'

export const getTotalProdutos = () => { 
  return axios.get(baseUrl + 'app/produto/count/')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}