import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter} from 'react-router-dom'
import queryString from 'query-string'

import { Title, TitleImages, SubTitleImages, Hr, Card, TitleCard, WrapperButtons, Cadastrar, WrapperImg } from './editar-livro.styled'

import { UpdateProduto } from '../../../utils/services/editar/editar.service'
import { getLivro } from '../../../utils/services/livro.service'


var array = [1]
var arrayInitial = [1]

class EditarLivro extends Component{
  state = {
    titulo: null,
    autor: null,
    descricao: null,
    tipo: null,
    localidade: null,
    ano: null,
    biografia: null,
    editora: null,
    edicao: null,
    img: null,
    desc_img: null,
    validated: false,
    listImages: null,
    listDescImages: null,
    loadpage: false,
    arrayButton: [1],
    livro: Object,
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
    getLivro(id).then((response) => {
      if('id_prod' in response){
        this.setState({ 
          titulo: response.titulo,
          autor: response.autor,
          descricao: response.descricao,
          tipo: response.tipo,
          ano: response.ano,
          localidade: response.localidade,
          biografia: response.biografia,
          editora: response.editora,
          edicao: response.edicao,
          area: response.area,
          livro: response,
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
      && this.state.biografia !== '' && this.state.biografia !== null
      && this.state.editora !== '' && this.state.editora !== null
      && this.state.edicao !== '' && this.state.edicao !== null){
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

        body.append("livro", 
        '{' + 
          '"categoria": "livro",' +
          '"ano": ' + this.state.ano  + ',' +
          '"autor": "' + this.state.autor  + '",' +
          '"descricao": "' + this.state.descricao  + '",' +
          '"listImg": [' + 
            listImgDesc +
          '],' +
          '"localidade": "' + this.state.localidade  + '",' +
          '"tipo": "' + this.state.tipo  + '",' +
          '"titulo": "' + this.state.titulo  + '",' + 
          '"id_prod": ' + this.state.livro.id_prod  + ',' +
          '"user": {"user_name": "' + localStorage.getItem('username')  + '"},' +
          '"editora": "' + state.editora  + '",' + 
          '"edicao": "' + state.edicao  + '",' + 
          '"biografia": "' + state.biografia +
        '"}'
        )
    
        UpdateProduto(body, 'uplivro').then((response) => {
          if(response === 200 || response === 201){
            alert('atualização realizado com sucesso! Obrigado por sua contribuição :)')
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
      livro,
      biografia,
      edicao,
      editora,
      imageList,
      titulo,
      autor,
      descricao,
      tipo,
      localidade,
      ano,
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
                {livro.titulo}
              </Title>

              <Form noValidate validated={validated} onSubmit={this.onSubmit} ref={el => (this.form = el)}>
                
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group 
                      controlId="titulo"
                      value={titulo}
                      onChange={e => this.setState({ titulo: e.target.value })}>
                      <Form.Label>título</Form.Label>
                      <Form.Control 
                      value={titulo} required type="text" />

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
                      <Form.Label>autor do livro</Form.Label>
                      <Form.Control 
                      value={autor} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira um autor do livro
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Form.Group 
                      controlId="descricao"
                      value={descricao}
                      onChange={e => this.setState({ descricao: e.target.value })}>
                      <Form.Label>descrição</Form.Label>
                      <Form.Control 
                      value={descricao} required as="textarea" rows={3} />

                      <Form.Control.Feedback type="invalid">
                        insira uma descrição
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Form.Group 
                      controlId="biografia"
                      value={biografia}
                      onChange={e => this.setState({ biografia: e.target.value })}>
                      <Form.Label>biografia</Form.Label>
                      <Form.Control 
                      value={biografia} required as="textarea"  rows={3} />

                      <Form.Control.Feedback type="invalid">
                        insira uma biografia
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group 
                      controlId="tipo"
                      value={tipo}
                      onChange={e => this.setState({ tipo: e.target.value })}>
                      <Form.Label>tipo de livro</Form.Label>
                      <Form.Control 
                      value={tipo} required type="text" />

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
                      <Form.Label>localização do livro</Form.Label>
                      <Form.Control 
                      value={localidade} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira uma localidade
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>         

                  <div className="col-md-6">
                    <Form.Group 
                      controlId="editora"
                      value={editora}
                      onChange={e => this.setState({ editora: e.target.value })}>
                      <Form.Label>editora do livro</Form.Label>
                      <Form.Control
                      value={editora} required type="text" />

                      <Form.Control.Feedback type="invalid">
                        insira uma editora
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>         

                  <div className="col-md-3">
                    <Form.Group 
                      controlId="ano"
                      value={ano}
                      onChange={e => this.setState({ ano: e.target.value })}>
                      <Form.Label>ano do livro</Form.Label>
                      <Form.Control 
                      value={ano} required type="number"  />

                      <Form.Control.Feedback type="invalid">
                        insira o ano do livro
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-3">
                    <Form.Group 
                      controlId="edicao"
                      value={edicao}
                      onChange={e => this.setState({ edicao: e.target.value })}>
                      <Form.Label>ediçao do livro</Form.Label>
                      <Form.Control 
                      value={edicao} required type="number"  />

                      <Form.Control.Feedback type="invalid">
                        insira o edicao do livro
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Hr />                    
                    <TitleImages>cadastrar imagens</TitleImages>
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

export default withRouter(EditarLivro)