import React, { Component } from 'react'

class Cadastro extends Component {
    render() {
        return (
  <div className="body">
    <div className="containercadastro">
        <div className="row">
            <div className="col-md-12">
                <form className="">
                    <div className="form-group col-md-6"> 
                    <label>Nome</label> 
                        <input type="nome" className="form-control" placeholder="Seu nome" name="nome" required="required" />
                    </div>
                    <div className="form-group col-md-6"> 
                    <label>CPF</label> 
                        <input type="cpf" className="form-control" placeholder="CPF (Sem os pontos e traços)" name="cpf" required="required"/>
                    </div>
                    <div className="form-group col-md-6"> 
                    <label>Email</label> 
                        <input type="email" className="form-control" placeholder="Coloque seu email" name="email" required="required"/> <small className="form-text text-white">Nós nunca vamos compartilhar seu e-mail com mais ninguém.</small> 
                    </div>
                    <div className="form-group col-md-6">
                    <label>Telefone</label> 
                    <input type="tel" className="form-control" placeholder="Coloque seu email" name="tel" required="required"/>
                    </div>
                    <div className="form-group col-md-6"> 
                        <label>Senha</label> 
                        <input type="senha" className="form-control" placeholder="Coloque sua senha" id="senha" required="required"/> 
                    </div>
                    <div className="form-group col-md-6"> 
                        <button type="submit" className="btn btn-success">Cadastrar<br/></button>                
                    </div>                    
                    </form>
            </div>
        </div>
    </div>
    </div>
        )
    }
}
export default Cadastro;