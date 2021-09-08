import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Title, TitleImages, SubTitleImages, Hr, Card, TitleCard, WrapperButtons, Cadastrar } from './cadastro-livro.styled'

import { SaveProduto } from '../../../utils/services/cadastro/cadastro-produtos.service'


var array = [1]
export default class CadastroLivro extends Component{
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
    arrayButton: [1]
  }

  constructor() {
    super();
  }

  componentDidMount() {
    if(localStorage.getItem('username') === null){
      alert('você precisa estar logado para acessar essa página')
      location.href = "/login"
    }
    else{
      this.setState({
        loadpage: true
      })
    }
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
      && this.state.desc_img !== '' && this.state.desc_img !== null
      && this.state.localidade !== '' && this.state.localidade !== null
      && this.state.tipo !== '' && this.state.tipo !== null
      && this.state.titulo !== '' && this.state.titulo !== null
      && this.state.biografia !== '' && this.state.biografia !== null
      && this.state.editora !== '' && this.state.editora !== null
      && this.state.edicao !== '' && this.state.edicao !== null){
        const body = new FormData(this.form)
        var listImgDesc = ''

        array.map((e, index) => {
          if(array.length === index + 1){
            listImgDesc += '{"desc_img": "' + document.getElementsByClassName('desc_img_itens')[index].value + '"}'  
          }
          else{
            listImgDesc += '{"desc_img": "' + document.getElementsByClassName('desc_img_itens')[index].value + '"},'
          }
        }) 

        body.append("livro", 
        '{' + 
          '"categoria": "livro",' +
          '"ano": ' + state.ano  + ',' +
          '"autor": "' + state.autor  + '",' +
          '"descricao": "' + state.descricao  + '",' +
          '"listImg": [' + 
            listImgDesc +
          '],' +
          '"localidade": "' + state.localidade  + '",' +
          '"tipo": "' + state.tipo  + '",' +
          '"titulo": "' + state.titulo  + '",' + 
          '"editora": "' + state.editora  + '",' + 
          '"edicao": "' + state.edicao  + '",' + 
          '"biografia": "' + state.biografia +
        '"}'
        )
    
        SaveProduto(body, 'livro').then((response) => {
          if(response === 201){
            alert('cadastro realizado com sucesso! Obrigado por sua contribuição :)')
            location.href = "/dashboard"
          }
        })
    }
  }

  addMoreImgs(){
    if(array.length <= 20){
      array.push(1)
      this.setState({
        arrayButton: array
      })
    } else {
      alert('só é permitido adicionar 20 imagens')
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
      titulo,
      autor,
      descricao,
      tipo,
      localidade,
      ano,
      biografia,
      editora,
      edicao,
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
              <Title>cadastro livro</Title>

              <Form noValidate validated={validated} onSubmit={this.onSubmit} ref={el => (this.form = el)}>
                
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group 
                      controlId="titulo"
                      value={titulo}
                      onChange={e => this.setState({ titulo: e.target.value })}>
                      <Form.Label>título</Form.Label>
                      <Form.Control required type="text" />

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
                      <Form.Control required type="text" />

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
                      <Form.Control required as="textarea" rows={3} />

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
                      <Form.Control required as="textarea"  rows={3} />

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
                      <Form.Control required type="text" />

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
                      <Form.Control required type="text" />

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
                      <Form.Control required type="text" />

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
                      <Form.Control required type="number"  />

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
                      <Form.Control required type="number"  />

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
                        <TitleCard>item imagem {index + 1}</TitleCard>
                        <Form.Group>
                          <Form.File  custom>
                            <Form.File.Input 
                            controlId="img"
                            // isValid
                            required
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
                          controlId="desc_img"
                          value={desc_img}
                          onChange={e => this.setState({ desc_img: e.target.value })}>
                          <Form.Label>descrição</Form.Label>
                          <Form.Control required as="textarea" 
                          className="desc_img_itens" rows={3} />

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
                  <Button type="button" variant="primary" onClick={() => this.addMoreImgs()}>
                    <MaterialIcon icon="add_photo_alternate" size={18
                    } color="#fff" />
                    adicionar mais imagens
                  </Button>

                  {array.length > 1 &&
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
                    cadastrar
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