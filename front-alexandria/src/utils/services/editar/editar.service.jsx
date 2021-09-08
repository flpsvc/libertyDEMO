import axios from 'axios'
import { baseUrl } from '../../api/api'

export const UpdateProduto = (formData, categoria) => { 

  return axios.put(baseUrl + 'app/user/prod/myprods/' + categoria, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + localStorage.getItem('authorization'),
      'UserId': localStorage.getItem('userid'),
    }
  })
    .then((response) => {
        return 200
    })
    .catch((error) => {
        console.log('Error', error)
    })
}