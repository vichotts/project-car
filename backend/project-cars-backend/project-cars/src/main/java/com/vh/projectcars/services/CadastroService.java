package com.vh.projectcars.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vh.projectcars.domain.Cadastro;
import com.vh.projectcars.repositories.CadastroRepository;

@Service
public class CadastroService {

	@Autowired
	private CadastroRepository repo;

	public Cadastro buscar(Long id) {
		Optional<Cadastro> obj = repo.findById(id);
		return obj.orElse(null);
		
	}
}