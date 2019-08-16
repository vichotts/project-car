import React, { Component } from 'react';
import foto1 from "../../templates/images/civ.jpg";
import foto2 from "../../templates/images/hrv.jpg";
import foto3 from "../../templates/images/jetta.jpg";

class Carros extends Component {
    render() {
        return(
        <div className="body">
        <div className="text-center" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-warning" text-align="center"><br/>
                Garanta já o seu carro
              </h1>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header shadow">
                <h4 className="my-0 font-weight-normal">&nbsp;CIVIC 2018</h4>
              </div>
              <img className="img-fluid" src={foto1} alt="Card image" />
              <div>
                <h1>
                  <b>R$ 1500</b>
                  <small className="text-muted">/ Mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <b>Preço sugerido:</b> A partir de R$ 92.300{" "}
                    <b>Dimensões:</b> 4.522-4.641 mm C x 1.799 mm L x
                    1.421-1.433 mm A <br />
                    <b>Volume de carga:</b> 334 - 525 l&nbsp;Motor: 1,5 l
                    4&nbsp;
                    <br />
                    cilindros em linha, 2,0 l 4 cilindros em linha
                    <br />
                    <b>Potência:&nbsp;</b>5.700 rpm
                    <br />
                    <b>Tanque de combustível: </b>56 l&nbsp;
                    <br />
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-outline-primary active ">
                  COMPRAR
                  <br />
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  <i className="fa fa-car" />&nbsp;HRV 19/20
                  <br />
                </h4>
              </div>
              <img className="img-fluid" src={foto2} alt="Card image" />
              <div className="card-body">
                <h1>
                  <b>R$1700&nbsp;</b>
                  <small className="text-muted">/ Mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <b>Preço sugerido</b>: A partir de R$ 94.400
                    <b>Dimensões:</b> 4.294-4.346 mm C x 1.772-1.790 mm L x
                    1.586-1.605 mm A
                    <b>
                      <br />
                      Volume de carga:
                    </b>
                    <b>Básica:</b> 437 l / Bancos rebatidos: 1.010 l
                    <b>
                      <br />
                      Potência:
                    </b>
                    139 - 173 HP
                    <b>
                      <br />
                      Tanque de combustível:
                    </b>
                    51 l
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-primary active ">
                  COMPRAR
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  <i className="fa fa-car" />&nbsp;Jetta 18/19
                </h4>
              </div>
              <img className="img-fluid" src={foto3}/>
              <div className="card-body">
                <h1>
                  <b>$1800&nbsp;</b>
                  <small className="text-muted">/ Mês </small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Preço sugerido: A partir de R$ 99.990 Potência: 150 - 230 HP
                    <br />
                    &nbsp;Dimensões: 4.702 mm C x 1.799 mm L x 1.474 mm A Motor:
                    1,4 l 4 cilindros em linha, 2,0 l 4 cilindros em linha
                    Transmissão: Automático de 6 marchas, Manual de 6 marchas
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-primary active"
                  contenteditable="true">
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Carros;