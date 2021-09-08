import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'

import { Banner,SearchTitle, BannerEnd, BannerEndTitle,Novidade, Card, NovidadeTitle, Categoria, CategoriaTitle, ImgNovidade, BoxNovidadeInfo, CategoriaBox, BoxNovidadeTitle,ButtonSearch,WrapperSearch,WrapperSearchImg,WrapperCategoria, SearchItem, CategoriaDescription, WrapperCategoriaNovidade } from './home.styled'

import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

import { getProdutoSimples } from '../../utils/services/produto-simples.service'
import { getTotalProdutos } from '../../utils/services/total-produtos.service'
import { getNovidades } from '../../utils/services/novidades.service'


const initialState = {
  totalProdutosService: Number,
  produtoSimplesService: Object,
  novidadeService: '',
  searchValue: String,
  categoria: String,
  tipo: String,
  typeSearch: 'tipo',
  categoriaSearch: 'categoria',
  activeSearch: false,
  disableButton: true,
  seachNotFound: false,
  showNovidades: false,
}

export default class Home extends Component {
  state = { ...initialState }

  componentDidMount() {
    getTotalProdutos().then((response) => {
      this.setState({ totalProdutosService: response })
    })

    getNovidades(3).then((response) => {
      this.setState({novidadeService: response, showNovidades: true})
    })
  }

  constructor(props) {
    super(props)

    this.setTypeSearch = this.setTypeSearch.bind(this)
    this.setCategoriaSearch = this.setCategoriaSearch.bind(this)
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
      totalProdutosService,
      novidadeService,
      searchValue,
      typeSearch,
      categoriaSearch, 
      activeSearch,
      disableButton,
      seachNotFound,
      showNovidades} = this.state;

    return (
      <div>
        <Banner>
          <div className="container">
            <SearchTitle>Encontre entre <span>{ totalProdutosService }</span> itens de material inestimável para humanidade</SearchTitle>
            <InputGroup>
              <FormControl
                placeholder="arquitetura, artes, literaturas ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
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
                  onClick={() => this.searchProduct(searchValue, typeSearch, categoriaSearch, 10)}>
                  <MaterialIcon icon="search" size={21} color="#fff" />
                </Button>
              </ButtonSearch>
            </InputGroup>

            <WrapperSearch className="box-scroll-bar">
              {
                activeSearch && ( produtoSimplesService.map(produto => 

                  <Link key={ produto.id_prod } to={{
                    pathname: "/" + produto.categoria,
                    paramsProduct: {
                      id: produto.id_prod,
                      categoria: produto.categoria,
                    }
                  }}>
                    <SearchItem>
                      
                      <WrapperSearchImg categoria={ produto.categoria }>
                        <img src={`${process.env.PUBLIC_URL + produto.img.path_img}`} />
                      </WrapperSearchImg>

                      <div>
                        <div>{ produto.titulo }</div>
                        <div>{ produto.autor }</div>
                      </div>
                      <WrapperCategoria categoria={ produto.categoria }>
                        <span>{ produto.categoria }</span>

                        {
                          produto.categoria == "arquitetura" &&
                          <MaterialIcon icon="apartment" size={20} color="#37e29b" />
                        }{
                          produto.categoria == "livro" &&
                          <MaterialIcon icon="chrome_reader_mode" size={20} color="#e24f37" />
                        }{
                          produto.categoria == "arte" &&
                          <MaterialIcon icon="widgets" size={20} color="#117a8b" />
                        }
                      </WrapperCategoria>
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

              { activeSearch && (
                produtoSimplesService.length === 10 ? (
                  <Link to={{
                    pathname: "/busca-completa",
                    paramsBusca: {
                      search: searchValue,
                      tipo: typeSearch,
                      categoria: categoriaSearch,
                    }
                  }}>
                    <SearchItem>veja mais itens para sua busca</SearchItem>
                  </Link>
                ) : (
                  <Link to={{
                    pathname: "/busca-completa",
                    paramsBusca: {
                      search: searchValue,
                      tipo: typeSearch,
                      categoria: categoriaSearch,
                    }
                  }}>
                    <SearchItem>ver mais informações dos itens da sua busca</SearchItem>
                  </Link>
                )
              )}

            </WrapperSearch>

          </div>
        </Banner>

        <Novidade>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <NovidadeTitle>novidades por aqui</NovidadeTitle>

                
                { showNovidades && ( 
                  <div className="row">
                    { novidadeService.map(novidade => (
                      <div className="col-md-4 margin-novidade">
                        <Link key={ novidade.id_prod } to={{
                            pathname: "/" + novidade.categoria,
                            paramsProduct: {
                              id: novidade.id_prod,
                              categoria: novidade.categoria,
                            }
                          }}>
                        
                          <Card>
                            <ImgNovidade>
                              <img src={`${process.env.PUBLIC_URL + novidade.img.path_img}`} alt=""/>
                            </ImgNovidade>
                            <BoxNovidadeInfo>
                              <BoxNovidadeTitle>{ novidade.titulo }</BoxNovidadeTitle>
                              <span>{ novidade.autor }</span>
                              <WrapperCategoriaNovidade categoria={ novidade.categoria }>
                                <span>{ novidade.categoria }</span>

                                {
                                  novidade.categoria == "arquitetura" &&
                                  <MaterialIcon icon="apartment" size={20} color="#fff" />
                                }{
                                  novidade.categoria == "livro" &&
                                  <MaterialIcon icon="chrome_reader_mode" size={20} color="#fff" />
                                }{
                                  novidade.categoria == "arte" &&
                                  <MaterialIcon icon="widgets" size={20} color="#fff" />
                                }
                              </WrapperCategoriaNovidade>
                            </BoxNovidadeInfo>

                          </Card>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </Novidade>

        <Categoria>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <CategoriaTitle>pricipais categorias</CategoriaTitle>

                <div className="row">
                  <div className="col-md-4 margin-categoria">
                    <Link to={{
                      pathname: "/busca-completa",
                      paramsBusca: {
                        search: null,
                        tipo: 'tipo',
                        categoria: 'arquitetura',
                      }
                    }}>
                      <Card>
                        <CategoriaBox>
                          <MaterialIcon icon="apartment" size={37} color="#ff3366" />
                          <h4>Arquitetura</h4>
                          <CategoriaDescription>morumentos históricos, museus, grandes contruções, prédios modernos e obras primas arquitetônicas</CategoriaDescription>
                        </CategoriaBox>
                      </Card>
                    </Link>
                  </div>
                  <div className="col-md-4 margin-categoria">
                    <Link to={{
                      pathname: "/busca-completa",
                      paramsBusca: {
                        search: null,
                        tipo: 'tipo',
                        categoria: 'livro',
                      }
                    }}>
                      <Card>
                        <CategoriaBox>
                          <MaterialIcon icon="chrome_reader_mode" size={35} color="#ff3366" />
                          <h4>Literatura</h4>
                          <CategoriaDescription>suspense, românce, drama, ficção e o que mais imaginar</CategoriaDescription>
                        </CategoriaBox>
                      </Card>
                    </Link>
                  </div>
                  <div className="col-md-4 margin-categoria">
                    <Link to={{
                      pathname: "/busca-completa",
                      paramsBusca: {
                        search: null,
                        tipo: 'tipo',
                        categoria: 'arte',
                      }
                    }}>
                      <Card>
                        <CategoriaBox>
                          <MaterialIcon icon="widgets" size={35} color="#ff3366" />
                          <h4>Arte</h4>
                          <CategoriaDescription>obras inetimáveis para a humanidade passando desde o renascentismo ao surealismo de pinturas rupestres a esculturas de mármore</CategoriaDescription>
                        </CategoriaBox>
                      </Card>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Categoria>

        <BannerEnd>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <BannerEndTitle>Faça parte da comunidade Alexandria também! </BannerEndTitle>
                <BannerEndTitle>Compartilhe o seu conhecimento para o mundo :)</BannerEndTitle>

                <Button type="button" variant="secondary">
                  <Nav>
                    <NavDropdown title="Contribuir" id="contribuirs">
                      <NavDropdown.ItemText>comtribuir com:</NavDropdown.ItemText>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Link to="/cadastro/arquitetura">arquitetura</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/arte">arte</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/livro">livro</Link></NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Button>
              </div>
            </div>
          </div>
        </BannerEnd>

      </div>
    )
  }
}