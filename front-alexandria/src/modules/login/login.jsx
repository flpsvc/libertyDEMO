import React, { Component } from 'react'
import { WhapperLogin, CardLogin, Info } from './login.styled'
import FormLoginCadastro from './form-login-cadastro'
import FormLogin from './form-login'

class Login extends Component {

  state = {
    activeCadastro: false,
  }

  constructor(props) {
    super(props)
  }

  activeCadastro(){
    this.setState({ activeCadastro: this.state.activeCadastro === true ? false : true })
  }

  render() {
    const { activeCadastro } = this.state

    return (
      <WhapperLogin>
        <CardLogin>
          { activeCadastro ? (
              <FormLoginCadastro>
                <Info onClick={() => this.activeCadastro()}>
                  Já é cadastrado? 
                  <span> acessar</span>
                </Info>
              </FormLoginCadastro>
            ) : (
              <FormLogin>          
                <Info onClick={() => this.activeCadastro()}>
                  ainda não está cadastrado? 
                  <span> cadastre-se</span>
                </Info>
              </FormLogin>
            )
          }
        </CardLogin>
      </WhapperLogin>
    )
  }
}

export default Login