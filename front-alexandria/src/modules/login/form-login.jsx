import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { WhapperBtn } from './login.styled'

import { loginService } from '../../utils/services/login.service'

export default function FormLogin({children}) {
  const [validated, setValidated] = useState(false)
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [msgError, setMsgError] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    
    if(login !== '' && login !== undefined && password !== '' && password !== undefined ){
      logar()
    }

    setValidated(true);
  };
  

  const logar = () => {
    const dados = { 
      user: login, 
      password: password,
    }

    loginService(dados).then((response) => {
      if(response === 200){
        location.href = "/dashboard"
      }
      else{
        alert('login e/ou senha inválidos :(')
        setMsgError(true)
      }
    })
  }

  return (
    <Form noValidate validated={validated}>
      <Form.Group 
        controlId="login" 
        onChange={e => setLogin(e.target.value)}
        >
        <Form.Label>login</Form.Label>
        <Form.Control required type="text" placeholder="" />
        
        <Form.Control.Feedback type="invalid">
          insira seu login para acessar
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group 
        controlId="password" 
        onChange={e => setPassword(e.target.value)}
        >
        <Form.Label>senha</Form.Label>
        <Form.Control required type="password" placeholder="" />

        <Form.Control.Feedback type="invalid">
          insira sua senha para acessar
        </Form.Control.Feedback>
      </Form.Group>

      {children}

      <WhapperBtn>
        <Button type="button" variant="primary" onClick={handleSubmit}>
          acessar
        </Button>
      </WhapperBtn>
    </Form>
  );
}