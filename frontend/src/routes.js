import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './container/home/home';
import Cadastro from './container/cadastro/cadastro';
import Login from './container/login/login';
import Carros from './container/carros/carros';
import CadastroCarros from './container/cadcarros/cadcarros';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/login" component={Login}/>
            <Route path="/carros" component={Carros}/>
            <Route path="/cadcarros" component={CadastroCarros}/>
            </Switch>
            
        </BrowserRouter>
    );
}

export default Routes;