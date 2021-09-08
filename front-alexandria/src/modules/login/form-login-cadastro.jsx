import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Titulo, WhapperBtn } from './login.styled'

import { loginService } from '../../utils/services/login.service'
import { cadastrarUsuarioService } from '../../utils/services/user-cadastro.service'

export default function FormLoginCadastro({children}) {
  const [validated, setValidated] = useState(false)
  const [nome, setNome] = useState()
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    if(nome !== '' && nome !== undefined && login !== '' && login !== undefined && password !== '' && password !== undefined ){
      cadastrar()
    }
    
    setValidated(true);
  };

  const cadastrar = () => {
    const dados = { 
      role: 'user',
      user_name: nome,
      user: login, 
      password: password,
    }

    cadastrarUsuarioService(dados).then((response) => {
      if(response !== 500){
        alert(response)
        logar()
      }
      else{
        alert('dados do login já existem tente outro!')
      }
    })
  }

  const logar = () => {
    const dados = { 
      user: login, 
      password: password,
    }

    loginService(dados).then((response) => {
      if(response === 200){
        location.href = "/dashboard"
      }
    })
  }

  return (
    <Form noValidate validated={validated}>
      <Titulo>cadastro</Titulo>
      
      <Form.Group 
        controlId="nome"
        onChange={e => setNome(e.target.value)}
        >
        <Form.Label>seu nome</Form.Label>
        <Form.Control required type="text" placeholder="" />
        
        <Form.Control.Feedback type="invalid">
          insira seu nome para concluir seu cadastro
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group 
        controlId="login" 
        onChange={e => setLogin(e.target.value)}
        >
        <Form.Label>login</Form.Label>
        <Form.Control required type="text" placeholder="" />
        
        <Form.Control.Feedback type="invalid">
          insira seu nome de usuário para concluir seu cadastro
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group 
        controlId="password" 
        onChange={e => setPassword(e.target.value)}
        >
        <Form.Label>senha</Form.Label>
        <Form.Control required type="password" placeholder="" />
        
        <Form.Control.Feedback type="invalid">
          insira uma senha para concluir seu cadastro
        </Form.Control.Feedback>
      </Form.Group>

      {children}

      <WhapperBtn>
        <Button type="button" variant="primary" onClick={handleSubmit}>
          cadastrar
        </Button>
      </WhapperBtn>
    </Form>
  );
}