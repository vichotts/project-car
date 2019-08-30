import React, { Component } from "react";

const url = "http://localhost:8080/cars";

class CadCarros extends Component {
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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
    console.log(this.state.modelo,
                   this.state.marca,
                   this.state.preco,
                   this.state.cor,
                   this.state.km,
                   this.state.ano)
    
  }


  handleAdd() {
    fetch(`http://localhost:8080/cars`, {
      method: "POST", // 'GET', 'PUT', 'DELETE', etc.
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
    }).then(response => console.log("OK"));
  }

  render() {
    return (
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
                    required
                    value={this.state.modelo}
                    onChange={ this.handleChange}
                  />
                  
                </div>
                <div className="form-group col-6">
                  <label>Marca</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Seu modelo"
                    name="marca"
                    required
                    value={this.state.marca}
                    onChange={ this.handleChange}
                  />
                  
                </div>
                <div className="form-group col-6">
                  <label>Preço</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Preço do veículo"
                    name="preco"
                    required
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
                    required
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
                    required
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
                    required
                    value={this.state.ano}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-6">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => this.handleAdd()}
                  >
                    Cadastrar
                    <br />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CadCarros;
