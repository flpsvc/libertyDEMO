import React, { Component } from 'react'

import { getArte } from '../../utils/services/arte.service'
import { 
  Wrapper, 
  WrapperHeader, 
  BoxHeader, 
  Titulo, 
  Descricao, 
  BoxImg, 
  BannerEnd, 
  BannerEndTitle,
  MarkDecoretor,
  List,
  ListImages,
  LisImages,
  LisImagesItem,
  ImgWrapper,
  ItemText,
  DeleteButton, } from './arte.styled'

import ReactHtmlParser from 'react-html-parser'

import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { withRouter} from 'react-router-dom'
import queryString from 'query-string'
import Button from 'react-bootstrap/Button'
import Carrossel from '../../components/carroussel/carroussel.component'
import MaterialIcon from 'material-icons-react'
import { deleteProduto } from '../../utils/services/deletar/deletar.service'
class Arte extends Component {

  state = {
    arte: Object,
    imageList: [],
    image: [],
    userName: '',
  }

  constructor(props) {
    super(props)
  
  }


  componentDidMount() {
    let url = this.props.location.search
    let params = queryString.parse(url)

    if('paramsProduct' in this.props.location){
      this.props.history.push('?id=' + this.props.location.paramsProduct.id)
      this.getProdutoId(this.props.location.paramsProduct.id)
    }
    else{
      if('id' in params){
        this.getProdutoId(params.id)
      }
      else{
        this.returnToHome()
      }
    }
  }

  getProdutoId(id){ 
    getArte(id).then((response) => {
      if('id_prod' in response){
        this.setState({ 
          arte: response,
          image: response.listImg.map(e => e.path_img),
          userName: response.user.user_name,
          imageList: response.listImg,
        })
      }
      else{
        this.returnToHome()
      }
    })
  }

  returnToHome(){
    alert('Não encontramos o produto informado :/')
    this.props.history.push('/')
  }

  deleteProduto(id, titulo){
    deleteProduto(id).then((response) => {
      if(response === 200){
        alert('a contribuição ' + titulo + ' foi deletada com sucesso', response )
        this.props.history.push('/dashboard')
      }
    })
  }

  render() {
    const { arte, imageList, image, userName } = this.state

    return (
      <Wrapper>

        <div className="container">
          <div className="row">
          <div className="col-md-12">
              {
                (localStorage.getItem('username') !== null)  && (localStorage.getItem('username') === userName || localStorage.getItem('role') === 'admin') &&
                <DeleteButton>
                  <Link key={ arte.id_prod } to={{
                    pathname: "editar/" + arte.categoria,
                    paramsProduct: {
                      id: arte.id_prod,
                      categoria: arte.categoria,
                    }
                  }}>
                    <span className="btn-create">
                      <MaterialIcon icon="create" size={18} color="#272727" />
                      editar
                    </span>
                  </Link>

                  <span onClick={() => this.deleteProduto(arte.id_prod, arte.titulo)}>
                    <MaterialIcon icon="delete" size={18} color="#fff" />
                    deletar
                  </span>
                </DeleteButton>
              }
            </div>
            <div className="col-md-3">

              <BoxImg>
                <img src={`${process.env.PUBLIC_URL + image[0]}`} />
              </BoxImg>

            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <Titulo>
                    <MaterialIcon icon="widgets" size={20} color="#0b5561" />{arte.titulo}
                  </Titulo>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <WrapperHeader>
                    <span>artista</span>
                    <BoxHeader>{arte.autor}</BoxHeader>
                  </WrapperHeader>
                  <WrapperHeader>
                    <span>tipo</span>
                    <BoxHeader>{arte.tipo}</BoxHeader>
                  </WrapperHeader>
                  <WrapperHeader>
                    <span>ano</span>
                    <BoxHeader>{arte.ano}</BoxHeader>
                  </WrapperHeader>
                </div>
                <div className="col-md-6">
                  <WrapperHeader>
                    <span>categoria</span>
                    <BoxHeader>{arte.categoria}</BoxHeader>
                  </WrapperHeader>
                  <WrapperHeader>
                    <span>localidade</span>
                    <BoxHeader>{arte.localidade}</BoxHeader>
                  </WrapperHeader>
                </div>
              </div>
            </div>
          </div>

          <Descricao>{ReactHtmlParser(arte.descricao)}</Descricao>

          <div className="row">
            <div className="col-md-6">
              <WrapperHeader>
                <span>técnica aplicada</span>
                <BoxHeader>{arte.tecnica}</BoxHeader>
              </WrapperHeader>
            </div>
            <div className="col-md-6">
              <WrapperHeader>
                <span>contribuição de</span>
                <BoxHeader>
                  {userName}
                </BoxHeader>
              </WrapperHeader>
            </div>
          </div>

          <MarkDecoretor></MarkDecoretor>

          <List>Lista de imagens</List>

          <ListImages>
            { imageList.map(image =>
              <LisImages>
                <LisImagesItem>
                  <ImgWrapper>
                    <img src={`${process.env.PUBLIC_URL + image.path_img}`} />
                  </ImgWrapper>
                  <ItemText>
                    <p>{image.desc_img}</p>
                  </ItemText>
                </LisImagesItem>
              </LisImages>
            )}
          </ListImages>

        </div>

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

      {/* {showCarossel && (
        <Carrossel>
          <BoxImg>
            <img src={`${process.env.PUBLIC_URL + imageList.map(e => e.id_img)}`} />
          </BoxImg>
        </Carrossel>
      )} */}
      </Wrapper>
    )
  }
}

export default withRouter(Arte)
