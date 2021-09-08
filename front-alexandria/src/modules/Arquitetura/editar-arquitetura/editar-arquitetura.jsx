import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter} from 'react-router-dom'
import queryString from 'query-string'

import { Title, TitleImages, SubTitleImages, Hr, Card, TitleCard, WrapperButtons, Cadastrar, WrapperImg } from './editar-arquitetura.styled'

import { UpdateProduto } from '../../../utils/services/editar/editar.service'
import { getArquitetura } from '../../../utils/services/arquitetura.service'


var array = [1]
var arrayInitial = [1]
class EditarArquitetura extends Component{
  state = {
    titulo: null,
    titulo2: null,
    autor: null,
    descricao: null,
    tipo: null,
    localidade: null,
    ano: null,
    curador: null,
    area: null,
    img: null,
    desc_img: null,
    validated: false,
    listImages: null,
    listDescImages: null,
    loadpage: false,
    arrayButton: [1],
    arquitetura: Object,
    imageList: [],
    image: [],
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if(localStorage.getItem('username') === null){
      alert('você precisa estar logado para acessar essa página')
      location.href = "/login"
    }
    else{
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
  }

  returnToHome(){
    alert('Não encontramos o produto informado :/')
    location.href = "/"
  }

  getProdutoId(id){
    getArquitetura(id).then((response) => {
      if('id_prod' in response){
        this.setState({ 
          titulo: response.titulo,
          titulo2: response.titulo,
          autor: response.autor,
          descricao: response.descricao,
          tipo: response.tipo,
          localidade: response.localidade,
          ano: response.ano,
          curador: response.curador,
          area: response.area,
          arquitetura: response,
          image: response.listImg.map(e => e.path_img),
          imageList: response.listImg,
          loadpage: true
        })


        while(array.length < response.listImg.length){
          this.addMoreImgs(2)
        }

        for(var i = 0; i < response.listImg.length; i++){
          document.getElementById('id-' + i).value = this.state.imageList[i].desc_img 
        }
      }
      else{
        this.returnToHome()
      }
    })
  }

  onSubmit = e => {
    e.preventDefault();
    
    const state = this.state
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    this.setState({
      validated: true
    })


    if(this.state.ano !== '' && this.state.ano !== null 
      && this.state.autor !== '' && this.state.autor !== null
      && this.state.descricao !== '' && this.state.descricao !== null
      && this.state.localidade !== '' && this.state.localidade !== null
      && this.state.tipo !== '' && this.state.tipo !== null
      && this.state.titulo !== '' && this.state.titulo !== null
      && this.state.area !== '' && this.state.area !== null
      && this.state.curador !== '' && this.state.curador !== null){
        const body = new FormData(this.form)
        var listImgDesc = ''

        
        array.map((e, index) => {
          console.log(array.length, index + 1, arrayInitial)
          if(array.length === index + 1){
            if(index + 1 > arrayInitial.length){
              listImgDesc += '{"desc_img": "' + document.getElementsByClassName('desc_img_itens')[index].value + '"}' 
            }
            else{
              listImgDesc += '{"desc_img": "' 
                + document.getElementsByClassName('desc_img_itens')[index].value + '",' 
                + '"id_img": ' + this.state.imageList[index].id_img + ',"path_img": "' + this.state.imageList[index].path_img + '"}'
            }
          }
          else{
            if(index + 1 > arrayInitial.length){
              listImgDesc += '{"desc_img": "' + document.getElementsByClassName('desc_img_itens')[index].value + '"},'
            }
            else{
              listImgDesc += '{"desc_img": "' 
                + document.getElementsByClassName('desc_img_itens')[index].value + '",' 
                + '"id_img": ' + this.state.imageList[index].id_img + ',"path_img": "' + this.state.imageList[index].path_img + '"},'
            }
          }
        }) 

        body.append("arq", 
        '{' + 
          '"categoria": "arquitetura",' +
          '"ano": ' + this.state.ano  + ',' +
          '"autor": "' + this.state.autor  + '",' +
          '"descricao": "' + this.state.descricao  + '",' +
          '"listImg": [' + 
            listImgDesc +
          '],' +
          '"localidade": "' + this.state.localidade  + '",' +
          '"tipo": "' + this.state.tipo  + '",' +
          '"titulo": "' + this.state.titulo  + '",' + 
          '"id_prod": ' + this.state.arquitetura.id_prod  + ',' +
          '"user": {"user_name": "' + localStorage.getItem('username')  + '"},' +
          '"area": ' + this.state.area  + ',' +
          '"curador": "' + this.state.curador +
        '"}'
        )
    
        UpdateProduto(body, 'uparq').then((response) => {
          if(response === 200 || response === 201){
            alert('cadastro realizado com sucesso! Obrigado por sua contribuição :)')
            location.href = "/dashboard"
          }
        })
    }
  }

  addMoreImgs(id){
    if(id === 1) {
      if(array.length <= 20){
        array.push(1)
        this.setState({
          arrayButton: array
        })
      } else {
        alert('só é permitido adicionar 20 imagens')
      }
    }
    else{
      arrayInitial.push(1)
      array.push(1)
      this.setState({
        arrayButton: array
      })
    } 
  }

  removeLastImgs() {
    array.pop()
    this.setState({
      arrayButton: array
    })
  }

  render(){
    const {
      arquitetura,
      imageList,
      titulo,
      autor,
      descricao,
      tipo,
      localidade,
      ano,
      curador,
      area,
      desc_img,
      validated,
      loadpage,
      arrayButton,
    } = this.state

    return(
      <div className="container">
        { loadpage && (
          <div className="row">
            <div className="col-md-12">
              <Title>
                <MaterialIcon icon="create" size={27} color="#ff3366" />
                editar - 
                {arquitetura.titulo}
              </Title>

              <Form noValidate validated={validated} onSubmit={this.onSubmit} ref={el => (this.form = el)}>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group 
                      controlId="titulo"
                      value={titulo}
                      onChange={e => this.setState({ titulo: e.target.value })}>
                      <Form.Label>título</Form.Label>
                      <Form.Control value={titulo} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira um título
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group 
                      controlId="autor"
                      value={autor}
                      onChange={e => this.setState({ autor: e.target.value })}>
                      <Form.Label>autor</Form.Label>
                      <Form.Control value={autor} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira um autor
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Form.Group 
                      controlId="descricao"
                      value={descricao}
                      onChange={e => this.setState({ descricao: e.target.value })}>
                      <Form.Label>descrição</Form.Label>
                      <Form.Control value={descricao} required as="textarea" rows={10} />

                      <Form.Control.Feedback type="invalid">
                        insira uma descrição
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group 
                      controlId="tipo"
                      value={tipo}
                      onChange={e => this.setState({ tipo: e.target.value })}>
                      <Form.Label>tipo de construção</Form.Label>
                      <Form.Control value={tipo} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira um tipo
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group 
                      controlId="localidade"
                      value={localidade}
                      onChange={e => this.setState({ localidade: e.target.value })}>
                      <Form.Label>localização da construção</Form.Label>
                      <Form.Control value={localidade} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira uma localidade
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group 
                      controlId="curador"
                      value={curador}
                      onChange={e => this.setState({ curador: e.target.value })}>
                      <Form.Label>curador da construção</Form.Label>
                      <Form.Control value={curador} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira um curador da construção
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-3">
                    <Form.Group 
                      controlId="ano"
                      value={ano}
                      onChange={e => this.setState({ ano: e.target.value })}>
                      <Form.Label>ano da construção</Form.Label>
                      <Form.Control value={ano} required type="number"  />

                      <Form.Control.Feedback type="invalid">
                        insira o ano de construção
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-3">
                    <Form.Group 
                      controlId="area"
                      value={area}
                      onChange={e => this.setState({ area: e.target.value })}>
                      <Form.Label>área da construção</Form.Label>
                      <Form.Control value={area} required type="number" />

                      <Form.Control.Feedback type="invalid">
                        insira uma área da construção
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Hr />                    
                    <TitleImages>editar imagens</TitleImages>
                    <SubTitleImages>para retratar melhor os itens busque imagens com boa qualidade e em ambientes bem iluminados :)
                    </SubTitleImages>
                  </div>

                  {arrayButton.map((e, index) => (
                    <div className="col-md-6">
                      <Card>
                          { index < imageList.length &&
                              <WrapperImg>
                                <img src={`${process.env.PUBLIC_URL + imageList[index].path_img}`} />
                              </WrapperImg>
                          }

                        <TitleCard>item imagem {index + 1}</TitleCard>
                        <Form.Group>
                          <Form.File  custom>
                            <Form.File.Input 
                            controlId="img"
                            // isValid
                            // required
                            name="img" />
                            <Form.File.Label 
                              data-browse="adicionar">
                              adicione uma imagem
                            </Form.File.Label>

                            <Form.Control.Feedback type="invalid">
                              insira uma imagem
                            </Form.Control.Feedback>
                          </Form.File>
                        </Form.Group>


                        <Form.Group 
                          value={desc_img}
                          controlId="desc_img">
                          <Form.Label>descrição</Form.Label>
                          <Form.Control 
                            onChange={e => this.setState({ desc_img: e.target.value })}
                            id={"id-" + index}
                            required as="textarea" className="desc_img_itens" 
                            rows={3} />

                          <Form.Control.Feedback type="invalid">
                            insira uma descrição para sua imagem
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Card>
                    </div>
                  ))}
                </div>
                
                <span>você adicionou {array.length} imagens</span>

                <WrapperButtons>
                  <Button type="button" variant="primary" onClick={() => this.addMoreImgs(1)}>
                    <MaterialIcon icon="add_photo_alternate" size={18
                    } color="#fff" />
                    adicionar mais imagens
                  </Button>

                  {array.length > arrayInitial.length &&
                    <Button type="button" variant="primary" onClick={() => this.removeLastImgs()}>
                      <MaterialIcon icon="delete" size={18
                      } color="#fff" />
                      remover última imagem
                    </Button>
                  }
                </WrapperButtons>

                
                <Hr />
            
                <Cadastrar>
                  <Button type="submit" variant="primary">
                    atualizar
                  </Button>
                </Cadastrar>
              </Form>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(EditarArquitetura)