import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
<div className="telalogin">
  <div className="form-group col-md-6"> 
    <label>CPF</label> 
        <input type="cpf" className="form-control" placeholder="CPF (Sem os pontos e traços)" name="cpf" required="required"/>
    <label>Email</label> 
        <input type="senha" className="form-control" placeholder="Coloque sua senha" name="senha" required="required"/>
        <br/>
        <button type="button" class="btn btn-success">Entrar</button>
  </div>
</div>
        );
    }
}

export default Login ;