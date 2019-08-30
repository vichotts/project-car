package com.vh.projectcars.services;

import java.io.Serializable;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vh.projectcars.domain.Cars;
import com.vh.projectcars.repositories.CarsRepository;

import javassist.tools.rmi.ObjectNotFoundException;

@Service
public class CarsService implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private CarsRepository repo;

	public Cars buscar(Long id) throws ObjectNotFoundException {
		Optional<Cars> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id:" + id + "Tipo: " + Cars.class.getName()));
		
	}
	
	
}