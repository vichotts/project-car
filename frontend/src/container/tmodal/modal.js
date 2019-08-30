import React, { Component } from "react";

export default props => (
<div>
<div id="editEmployeeModal" className="modal fade">
		<div className="modal-dialog">
			<div className="modal-content">
				<form>
					<div className="modal-header">						
						<h4 className="modal-title">Editar Carro</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						<div className="form-group">
							<label>Modelo</label>
							<input type="text" className="form-control" required/>
						</div>
						<div className="form-group">
							<label>Preço</label>
							<input type="email" className="form-control" required/>
						</div>
						<div className="form-group">
							<label>Cor</label>
							<textarea className="form-control" required></textarea>
						</div>
						<div className="form-group">
							<label>KM</label>
							<input type="text" className="form-control" required/>
						</div>
                        <div className="form-group">
							<label>Ano</label>
							<input type="text" className="form-control" required/>
						</div>					
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
						<input type="submit" className="btn btn-info" value="Save"/>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	<div id="deleteEmployeeModal" className="modal fade">
		<div className="modal-dialog">
			<div className="modal-content">
				<form>
					<div className="modal-header">						
						<h4 className="modal-title">Excluir Carro</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						<p>Tem certeza que dejesa excluir ?</p>
						<p className="text-warning"><small>Essa ação não pode ser desfeita.</small></p>
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-default" data-dismiss="modal" value="Voltar"/>
						<input type="submit" className="btn btn-danger" value="Excluir"/>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
           
);
