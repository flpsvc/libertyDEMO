import axios from 'axios'
import { baseUrl } from '../api/api'

export const getLivro = (id) => { 
  return axios.get(baseUrl + 'app/produto/livro/buscacompleta/?id=' + id)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}