import React from "react";
import teste from '../../templates/images/vcar.jpg';

const estilo1 = {
  backgroundPosition: "right",
  backgroundSize: "50",
  backgroundRepeat: "repeat"
};

const estilo2 = {
  backgroundImage: 'url(' + teste + ')',
    backgroundPosition: 'right',
    backgroundSize: '50',
   	backgroundRepeat: 'repeat',
}

export default props => (
  <div>  
  <div>
    
    <div className=" my-2" style={estilo1}>
    <div className="pt-5" style={estilo2}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 mx-auto">
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbar13"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar13">
          <a className="navbar-brand d-none d-md-block" href="/home">
            {/* Colocar ícone */}
            <b> Home</b>
          </a>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/todo">
                {/* Colocar ícone */} &nbsp;Carros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/endereco">
                Endereço
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
                <br />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cadastro" >
                Cadastre-se
                <br />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  </div>
);

