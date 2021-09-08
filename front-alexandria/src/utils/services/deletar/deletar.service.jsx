import axios from 'axios'
import { baseUrl } from '../../api/api'

export const deleteProduto = (id) => { 

  return axios.delete(baseUrl + 'app/user/prod/delprods/' + id, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('authorization'),
      'UserId': localStorage.getItem('userid'),
    }
  })
    .then((response) => {
        return response.status
    })
    .catch((error) => {
        console.log('Error', error)
    })
}