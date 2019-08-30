import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import Login from '../../container/login/login';
import Todo from '../../container/todo/todo';
import CadastroCarros from '../../container/cadastro/cadcarros'
import TodoEdit from '../../container/todo/todoEdit';
import CadCliente from '../../container/cadastro/cadCliente';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/todo" component={Todo}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadcarros" component={CadastroCarros}/>
            <Route exact path="/todoEdit/:id" component={TodoEdit}/>
            <Route path="/cadcliente" component={CadCliente}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;