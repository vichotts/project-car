import React, { Component } from "react";
import "../../templates/css/tema.css";
import { Alert, Form, FormGroup } from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  signIn = () => {
    const data = { email: this.email, password: this.password };
    const requestInfo = {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    };

    fetch("http://localhost:8080/cliente", requestInfo)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Login inválido...");
      })
      .then(token => console.log(token))
      .catch(e => {
        this.setState({ message: e.message });
      });
  };

  render() {
    return (
      <div>
        <div className="container ">
          <div className="telalogin col-sm-6">
            <hr className="my-3" />

            {this.state.message !== "" ? (
              <div className="alert alert-danger" role="alert">
              {this.state.message}
            </div>
            ) : ""}
            <Form>
              <FormGroup>
                <label>Email :</label>
                <input
                  type="user"
                  className="form-control "
                  placeholder="Username"
                  name="email"
                  required="required"
                  onChange={e => (this.email = e.target.value)}
                />
                <label>Senha:</label>
                <input
                  type="senha"
                  className="form-control"
                  placeholder="Coloque sua senha"
                  name="password"
                  required="required"
                  onChange={e => (this.password = e.target.value)}
                />
                <br />
                <button
                  type="button"
                  className="btn btn-success"
                  color="primary"
                  onClick={this.signIn}
                >
                  Entrar
                </button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
