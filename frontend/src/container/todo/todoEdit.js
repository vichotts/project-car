import React, { Component } from "react";
import axios from "axios";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelo: "",
      marca: "",
      preco: "",
      cor: "",
      km: "",
      ano: ""
    };
    this.handleChange = this.handleChange.bind(this)
  
  }

  handleSubmit() {}

  handleEdit() {
    let idcarro = this.state.id;
    fetch(`http://localhost:8080/cars/${idcarro}`, {
      method: "PUT", // 'GET', 'PUT', 'DELETE', etc.
      body: JSON.stringify({
        modelo: this.state.modelo,
        marca: this.state.marca,
        preco: this.state.preco,
        cor: this.state.cor,
        km: this.state.km,
        ano: this.state.ano
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(
      this.state.modelo,
      this.state.marca,
      this.state.preco,
      this.state.cor,
      this.state.km,
      this.state.ano
    );
  }

  componentDidMount() {
    this.handleSelect();
  }

  handleSelect() {
    const idCarros = this.props.match.params.id;
    console.log({ idCarros });
    axios.get(`http://localhost:8080/cars/${idCarros}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            modelo: response.data.modelo,
            marca: response.data.marca,
            preco: response.data.preco,
            cor: response.data.cor,
            km: response.data.km,
            ano: response.data.ano
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form className="cadForm">
                  <div className="form-group col-6">
                    <label>Modelo</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Seu modelo"
                      name="modelo"
                      value={this.state.modelo}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>Marca</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Seu modelo"
                      name="marca"
                      value={this.state.marca}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>Preço</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Preço do veículo"
                      name="preco"
                      value={this.state.preco}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>Cor</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cor do veículo"
                      name="cor"
                      value={this.state.cor}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>KM Rodados</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="KMs"
                      name="km"
                      value={this.state.km}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group col-6">
                    <label>Ano</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ano de fabricação"
                      name="ano"
                      id="ano"
                      value={this.state.ano}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group col-6">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={() => this.handleEdit()}
                    >
                      Editar
                      <br />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoEdit;
