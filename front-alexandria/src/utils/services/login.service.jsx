import axios from 'axios'
import { baseUrl } from '../api/api'

export const loginService = (login) => { 
  return axios.post(baseUrl + 'app/login/autentica', login)
    .then((response) => {
      localStorage.clear()
      localStorage.setItem('authorization', response.headers.authorization)
      localStorage.setItem('userid', response.headers.userid)
      localStorage.setItem('username', response.headers.username)
      localStorage.setItem('role', response.headers.userrole)
      return 200
    })
    .catch((error) => {
      return error
    })
}