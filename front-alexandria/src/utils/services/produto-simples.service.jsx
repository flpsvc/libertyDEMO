import axios from 'axios'
import { baseUrl } from '../api/api'

export const getProdutoSimples = (value, tipo, categoria, limite) => {

  if(categoria == 'categoria' || categoria == 'tudo'){
    if(tipo == 'tipo' || tipo == 'tudo'){
      // console.log('buscar todos os tipos em -> em todas as categorias')
      
      return axios.get(baseUrl + 'app/produto/nofilter?' 
        + 'query=' + value
        + '&limite=' + limite)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log('Error', error)
        })
    }
    else{
      // console.log(tipo +  ' -> em todas as categorias')
      return axios.get(baseUrl + 'app/produto/tipo?' 
        + tipo + '=' + value
        + '&limite=' + limite)
        .then((response) => {
            return response.data
        }) 
        .catch((error) => {
            console.log('Error', error)
        })
    }
  }
  else{
    if(tipo == 'tipo' || tipo == 'tudo'){
      // console.log('buscar todos os tipos em -> ' + categoria)

      return axios.get(baseUrl + 'app/produto/' + categoria + '/categoria?' 
        + 'query=' + value
        + '&limite=' + limite)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log('Error', error)
        })
    }
    else{
      return axios.get(baseUrl + 'app/produto/' + categoria + '/tipo?' 
        + tipo + '=' + value
        + '&limite=' + limite)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log('Error', error)
        })
    }
  }
}
