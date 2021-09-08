import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Login from './login/login'
import Home from './home/home'
import Busca from './busca/busca'
import Arquitetura from './Arquitetura/arquitetura'
import Arte from './arte/arte'
import Livro from './livro/livro'
import Dashboard from './dashboard/dashboard'

import CadastroArquitetura from './Arquitetura/cadastro-arquitetura/cadastro-arquitetura'
import CadastroArte from './arte/cadastro-arte/cadastro-arte'
import CadastroLivro from './livro/cadastro-livro/cadastro-livro'

import EditarArquitetura from './Arquitetura/editar-arquitetura/editar-arquitetura'
import EditarArte from './arte/editar-arte/editar-arte'
import EditarLivro from './livro/editar-livro/editar-livro'


// import LinhaDoTempo from './linha-do-tempo/linha-do-tempo'

export const App = () => (
  <Fragment>
    <Router>
      <Header />
      <span className="header-spancing"></span>

      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/busca-completa" component={Busca} />
        <Route path="/arquitetura" component={Arquitetura} />
        <Route path="/arte" component={Arte} />
        <Route path="/livro" component={Livro} />        
        <Route path="/cadastro/arquitetura" component={CadastroArquitetura} />
        <Route path="/cadastro/arte" component={CadastroArte} />
        <Route path="/cadastro/livro" component={CadastroLivro} />
        <Route path="/editar/arquitetura" component={EditarArquitetura} />
        <Route path="/editar/arte" component={EditarArte}/>
        <Route path="/editar/livro" component={EditarLivro}/>

        <div className="container">
          {/* <Route path="/linha-do-tempo" component={LinhaDoTempo} /> */}
        </div>
      </Switch>
      <Footer />
    </Router>
  </Fragment>
);

export default App;