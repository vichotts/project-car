import React, { Component } from "react"

import "../../templates/css/tema.css"



class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  async handleRemove(id) {
    await fetch(`http://localhost:8080/cars/${id}`, {
      method: "DELETE"
    })
    this.componentDidMount();
  }

  componentDidMount() {
    fetch(`http://localhost:8080/cars`,{
      
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ cars: data });
        console.log(this.state.cars);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Editar <b>Carros</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a href="cadcarros"
                    className="btn btn-success"
                  >
                    <i className="material-icons">&#xE147;</i>
                    <span>Adicionar um novo carro</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Modelo</th>
                  <th>Preço</th>
                  <th>Cor</th>
                  <th>KM</th>
                  <th>Ano</th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cars.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.modelo}</td>
                    <td>{item.preco}</td>
                    <td>{item.cor}</td>
                    <td>{item.km}</td>
                    <td>{item.ano}</td>
                    
                    <td>
                      <a href={`todoEdit/${item.id}`} className="edit">
                        <i
                          className="material-icons"
                          
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a href="#deleteCars" className="delete">
                        <i
                          className="material-icons"
                          title="Delete"
                          onClick={() => this.handleRemove(item.id)}
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Exibindo <b>5</b> de <b>25</b> carros
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        </div>
      
    );
  }
}
export default TodoForm;
