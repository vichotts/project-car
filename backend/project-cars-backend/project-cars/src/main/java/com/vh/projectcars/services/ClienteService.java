package com.vh.projectcars.services;

import java.io.Serializable;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vh.projectcars.domain.Cliente;
import com.vh.projectcars.repositories.ClienteRepository;

import javassist.tools.rmi.ObjectNotFoundException;

@Service
public class ClienteService implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ClienteRepository repo;

	public Cliente buscar(Long id) throws ObjectNotFoundException {
		Optional<Cliente> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id:" + id + "Tipo: " + Cliente.class.getName()));
		
	}
	
	
}