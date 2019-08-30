import React, { Component } from "react";
import "../../templates/css/tema.css";

class CadCliente extends Component {
  render() {
    return (
      <div className="container">
        <div className="telalogin">
          <div className="form-group col-md-6 ">
            <label>Usuário :</label>
            <input
              type="cpf"
              className="form-control"
              placeholder="Username"
              name="user"
              required="required"
            />
            <label>Senha:</label>
            <input
              type="senha"
              className="form-control"
              placeholder="Coloque sua senha"
              name="senha"
              required="required"
            />
            <br />
            <button type="button" class="btn btn-success">
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CadCliente;
