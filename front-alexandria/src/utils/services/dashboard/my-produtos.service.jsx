import axios from 'axios'
import { baseUrl } from '../../api/api'

export const getMyProdutos = () => { 

  return axios.get(baseUrl + 'app/user/prod/myprods/', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('authorization'),
      'UserId': localStorage.getItem('userid'),
    }
  })
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}