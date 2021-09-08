import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'

import { 
  WrapperInput,
  CleanSearch,
  ButtonSearch,
  WrapperSearch,
  WrapperSearchImg,
  WrapperCategoria,
  SearchItem,
  WrapperDescricao,
  WrapperAutor } from './busca.styled'
  
import { Link } from "react-router-dom"

import queryString from 'query-string'
import { withRouter} from 'react-router-dom'

import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

import { getProdutoSimples } from '../../utils/services/produto-simples.service'
import { getAllProdutos } from '../../utils/services/produto-get-all.service'
import { getNovidades } from '../../utils/services/novidades.service'



const initialState = {
  produtoSimplesService: Object,
  searchValue: String,
  categoria: String,
  tipo: String,
  typeSearch: 'tipo',
  categoriaSearch: 'categoria',
  activeSearch: false,
  disableButton: true,
  seachNotFound: false,
}

class Busca extends Component {
  state = { ...initialState }

  constructor(props) {
    super(props)

    this.setTypeSearch = this.setTypeSearch.bind(this)
    this.setCategoriaSearch = this.setCategoriaSearch.bind(this)
  }

  componentDidMount() {    
    let location = this.props.location

    if('paramsBusca' in location){

      let search = this.props.location.paramsBusca.search
      let categoria = this.props.location.paramsBusca.categoria
      let tipo = this.props.location.paramsBusca.tipo

      if(search === null){
        this.setState({ 
          categoriaSearch: categoria,
        })
        this.getAllProdutos(categoria)
      }
      else{
        this.setState({ 
          searchValue: search, 
          categoriaSearch: categoria,
          typeSearch: tipo 
        })
        this.searchProduct(search, tipo, categoria, 99999)
      }
    }
    else{
      this.getNovidades()
    }
  }

  getAllProdutos(categoria){
    getAllProdutos(categoria).then((response) => {
      typeof response === 'object' ? (
        this.setState({ 
          produtoSimplesService: response, 
          activeSearch: true,
          seachNotFound: false 
        })
      ) : (
        this.setState({ 
          produtoSimplesService: '',
          activeSearch: false,
          seachNotFound: true  
        })
      )
    })
  }

  searchProduct(value, tipo, categoria, limite){ 
    getProdutoSimples(value, tipo, categoria, limite).then((response) => {
      typeof response === 'object' ? (
        this.setState({ 
          produtoSimplesService: response, 
          activeSearch: true,
          seachNotFound: false 
        })
      ) : (
        this.setState({ 
          produtoSimplesService: '',
          activeSearch: false,
          seachNotFound: true  
        })
      )
    })
  }
  
  getNovidades() {
    return getNovidades(99999).then((response) => {
      this.setState({produtoSimplesService: response, activeSearch: true})
    })
  }

  cleanSearch() {
    this.getNovidades()
    this.setState({ 
      activeSearch: true,     
      typeSearch: 'tipo',
      categoriaSearch: 'categoria',
    })
  }

  getInputValue(value){
    this.setState({ 
      searchValue: value,
      disableButton: value.length > 2 ? false : true
    })
  }

  setTypeSearch(typeSearch) {
    this.setState({
      typeSearch: typeSearch,
    })
  }

  setCategoriaSearch(categoriaSearch) {
    this.setState({
      categoriaSearch: categoriaSearch,
    })
  }

  render() {
    const { 
      produtoSimplesService,
      searchValue,
      typeSearch,
      categoriaSearch, 
      activeSearch,
      disableButton,
      seachNotFound} = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8"> 
              <WrapperInput>
                <InputGroup>
                  <FormControl
                    placeholder="arquitetura, artes, literaturas ..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={searchValue}
                    onChange={ () => this.getInputValue(event.target.value) }
                  />

                  <DropdownButton id="dropdown-item-button" title={typeSearch} as={InputGroup.Append}>
                    <Dropdown.ItemText>Filtrar por:</Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as="button"
                      value="titulo"
                      id="titulo"
                      onClick={() => this.setTypeSearch(event.target.value)}>
                      titulo</Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      value="autor"
                      onClick={() => this.setTypeSearch(event.target.value)}>
                      autor</Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      value="localidade"
                      onClick={() => this.setTypeSearch(event.target.value)}>
                      localidade</Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      value="tudo"
                      onClick={() => this.setTypeSearch(event.target.value)}>
                      tudo</Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton id="dropdown-item-button" title={categoriaSearch} as={InputGroup.Append}>
                    <Dropdown.ItemText>Filtrar por:</Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as="button"
                      value="arquitetura"
                      onClick={() => this.setCategoriaSearch(event.target.value)}>
                      arquitetura</Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      value="arte"
                      onClick={() => this.setCategoriaSearch(event.target.value)}>
                      arte</Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      value="livro"
                      onClick={() => this.setCategoriaSearch(event.target.value)}>
                      livro</Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      value="tudo"
                      onClick={() => this.setCategoriaSearch(event.target.value)}>
                      tudo</Dropdown.Item>
                  </DropdownButton>

                  <ButtonSearch>
                    <Button 
                      type="button" 
                      disabled={ disableButton } 
                      onClick={() => this.searchProduct(searchValue, typeSearch, categoriaSearch, 99999)}>
                      <MaterialIcon icon="search" size={21} color="#fff" />
                    </Button>
                  </ButtonSearch>
                </InputGroup>
              </WrapperInput>
            </div>
            <div className="col-md-4">
              <CleanSearch onClick={() => this.cleanSearch()}>
                <span>limpar busca</span>
                <MaterialIcon icon="cancel" size={20} color="#fff" />
              </CleanSearch>
            </div>
          </div>

          <WrapperSearch>
            {
              activeSearch && ( produtoSimplesService.map(produto => 

                <Link key={ produto.id_prod } to={{
                  pathname: "/" + produto.categoria,
                  paramsProduct: {
                    id: produto.id_prod,
                    categoria: produto.categoria,
                  }
                }}>
                  <SearchItem categoria={ produto.categoria }>
                    
                    <div className="box-info-img">
                      <WrapperSearchImg>
                        <img src={`${process.env.PUBLIC_URL + produto.img.path_img}`} />
                      </WrapperSearchImg>

                      <WrapperAutor>{ produto.autor }</WrapperAutor>

                      <div className="box-info-img-local">
                        <MaterialIcon icon="room" size={17} color="#444444" />
                        { produto.localidade }
                      </div>

                      <WrapperCategoria categoria={ produto.categoria }>
                        <span>{ produto.categoria }</span>

                        {
                          produto.categoria == "arquitetura" &&
                          <MaterialIcon icon="apartment" size={20} color="#fff" />
                        }{
                          produto.categoria == "livro" &&
                          <MaterialIcon icon="chrome_reader_mode" size={20} color="#fff" />
                        }{
                          produto.categoria == "arte" &&
                          <MaterialIcon icon="widgets" size={20} color="#fff" />
                        }
                      </WrapperCategoria>
                    </div>

                    <div>
                      <h3>{ produto.titulo }</h3>
                      <WrapperDescricao>
                        { produto.descricao }
                      </WrapperDescricao>
                    </div>
                  </SearchItem>
                </Link>
              ))
            }

            {
              seachNotFound && (
                <SearchItem>
                  Não escontramos nenhum item para sua busca :/
                </SearchItem>
              )
            }
          </WrapperSearch>

        </div>
      </div>
    )
  }
}

export default withRouter(Busca)