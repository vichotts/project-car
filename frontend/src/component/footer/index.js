import React from 'react'
import ReactDOM from 'react-dom'


export default props => (
    <div className="py-5 footer"  >
    <div className="container">
      <div className="row pt-5 border-top" >
        <div className="col-6 col-md col-md-4">
          <h5><b>Suporte</b></h5>
          <ul className="list-unstyled">
            <li>
              <a className="text-muted" href="#">Sugestões</a>
            </li>
            <li>
              <a className="text-muted" href="#">Contato</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md col-md-4">
          <h5><b>Sobre</b></h5>
          <ul className="list-unstyled">
            <li>
              <a className="text-muted" href="#">Conheça um pouco mais sobre nossa história</a>
            </li>
            <li>
              <a className="text-muted" href="#">Filiais<br/></a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md col-md-4">
          <div className="col-12 col-md col-md-12"> <i className="fa fa-lg fa-bullseye d-block mb-2"></i> <small className="d-block mb-3 text-muted">© 2018-2019</small> </div>
        </div>
      </div>
    </div>
  </div>


)