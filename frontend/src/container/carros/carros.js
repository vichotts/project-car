import React, { Component } from "react";

import Modal from '../tmodal/modal';

const url = 'http://localhost:8080/cars';

class Carros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
   this.handleremove = this.handleremove.bind(this);
  
  
  }
  
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ cars:data });
        console.log(this.state.cars);
      })
  }

 

  async handleremove(id) {
    await fetch(`http://localhost:8080/cars/${id}`, {
      method: 'DELETE'
    })
    .then(response => console.log("Excluiu"));
    this.componentDidMount()
  }


  render() {
    var bgtable = {
      backgroundColor: "#fff"
    };
    var sizeTh = {
      width: "10%"
    };

    return (
      <div>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <form className="form-inline">
                  <div className="input-group">
                    <div className="col-md-8"> 
                      <input
                      type="text"
                      className="form-control center"
                      id="inlineFormInputGroup"
                      placeholder="Pesquisar"
                      />
                      
                    </div>
                    <div className="col-md-4" >
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                      
                      <a 
                      href='cadastro' 
                      className="btn btn-primary">
                        Cadastrar um carro
                      </a>
                      </button>
                      </div>
                    </div>
              </div>
              </form>
              </div>
              
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped " style={bgtable}>
                    <thead className="thead-dark">
                      <tr>
                        <th>Código</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th style={sizeTh}>Opções</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.cars.map(item =>(
                        <tr key={item.id}>
                          <th>{item.id}</th>
                          <td>{item.modelo}</td>
                          <td>{item.preco}</td>
                          <td>{item.ano}</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Opções
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <button type="button" 
                                className="btn btn-primary" 
                                data-toggle="modal" 
                                data-target="#exampleModal" 
                                data-whatever="@mdo"
                                
                                >     
                                  Atualizar
                                </button>
                                <button className="dropdown-item" 
                                >
                                  Informações do Carro

                                </button>
                                <button
                                  className="dropdown-item"
                                  onClick={() => this.handleremove(item.id)}
                                >Excluir
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Modal model={this.state.list}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Carros;
