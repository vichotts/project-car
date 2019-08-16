package com.vh.projectcars.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vh.projectcars.domain.Cadastro;

@RestController
@RequestMapping(value="/clientes")
public class CadastroResource {
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Cadastro> listar() {
		Cadastro cad1 = new Cadastro("Victor","42425836958", "hot.v@gmail.com","11925252525","victor");
		Cadastro cad2 = new Cadastro("Amanda","42425852145", "amanda@gmail.com","11925252555","amanda");
	
		List<Cadastro> lista = new ArrayList<>();
		lista.add(cad1);
		lista.add(cad2);
	
		return lista;
	
	}
}