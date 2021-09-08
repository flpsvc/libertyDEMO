import axios from 'axios'
import { baseUrl } from '../api/api'

export const cadastrarUsuarioService = (cadastro) => { 
  return axios.post(baseUrl + 'app/login/cadastro', cadastro)
    .then((response) => {
      // localStorage.clear()
      // localStorage.setItem('authorization', response.headers.authorization)
      // localStorage.setItem('userid', response.headers.userid)
      // localStorage.setItem('username', response.headers.username)
      console.log('kkk', response)
      return response.data

    })
    .catch((error) => {
      return 500
    })
}