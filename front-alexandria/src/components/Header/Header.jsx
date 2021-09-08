import React, { Component } from 'react'
import { WrapperHeader, HeaderGrid, Logo, Login, LoginMenu, WrapperLogado } from './header.styled'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'
import FormControl from 'react-bootstrap/FormControl'

import { Link } from "react-router-dom"
import { ExitToApp } from '@material-ui/icons'

export default class Header extends Component {

  exitToApp(){
    localStorage.clear()
    location.href = "/"
  }

  render() {
    return (
      <header>
        <WrapperHeader>
          <Navbar bg="light" expand="md">
            <div className="container">
              <HeaderGrid>
                <Navbar.Brand>
                  <Logo>
                    <Link to="/">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/alexandria-logo.png`} alt=""/>
                    </Link>
                  </Logo>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown title="categorias" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <Link to={{
                          pathname: "/busca-completa",
                          paramsBusca: {
                            search: null,
                            tipo: 'tipo',
                            categoria: 'arquitetura',
                          }
                        }}>arquitetura</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={{
                          pathname: "/busca-completa",
                          paramsBusca: {
                            search: null,
                            tipo: 'tipo',
                            categoria: 'arte',
                          }
                        }}>arte</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={{
                          pathname: "/busca-completa",
                          paramsBusca: {
                            search: null,
                            tipo: 'tipo',
                            categoria: 'livro',
                          }
                        }}>livro</Link>
                      </NavDropdown.Item>
                    </NavDropdown>

                    {
                      localStorage.getItem('username') !== null &&
                      <NavDropdown title="contribuir" id="contribuirs">
                        <NavDropdown.ItemText>comtribuir com item:</NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/cadastro/arquitetura">arquitetura</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/cadastro/arte">arte</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/cadastro/livro">livro</Link></NavDropdown.Item>
                      </NavDropdown>
                    }


                    {
                      localStorage.getItem('username') === null ? (
                        <Link to="/login">
                          <Login>
                            <MaterialIcon icon="account_circle" size={27} color="#ff3366" />
                            <span>login</span>
                          </Login>
                        </Link>
                      ) : (
                        <WrapperLogado>
                          <MaterialIcon icon="face" size={27} color="#424242" />
                          <NavDropdown title={localStorage.getItem('username')} id="contribuirs">
                            <NavDropdown.Item>
                              <Link to="/dashboard">
                                <LoginMenu>
                                  <MaterialIcon icon="account_box" size={27} color="#363636" />
                                  <span>area do usuário</span>
                                </LoginMenu>
                              </Link>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            
                            <NavDropdown.Item onClick={() => this.exitToApp()}>
                              <LoginMenu>
                                <MaterialIcon icon="exit_to_app" size={27} color="#a02424" />
                                <span>sair</span>
                              </LoginMenu>
                            </NavDropdown.Item>
                          </NavDropdown>
                        </WrapperLogado>
                      )
                    }

                    {/* <Nav.Link><Link to="/linha-do-tempo">Linha do Tempo</Link></Nav.Link>
                    <Nav.Link><Link to="/historia">História</Link></Nav.Link>
                    <Nav.Link><Link to="/time">Nosso Time</Link></Nav.Link> */}
                  </Nav>

                  {/* <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                  </Form> */}
                </Navbar.Collapse>
              </HeaderGrid>
            </div>
          </Navbar>
        </WrapperHeader>
      </header>
    )
  }
}