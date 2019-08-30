package com.vh.projectcars.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.vh.projectcars.domain.Cliente;
import com.vh.projectcars.event.RecursoCriadoEvent;
import com.vh.projectcars.repositories.ClienteRepository;


@RestController
@RequestMapping(value="/cliente")		
public class ClienteResource {
	
	
	@Autowired
	private ClienteRepository clienteRepository; 
	

	@Autowired
	private ApplicationEventPublisher eventCliente; 	
	
	@Autowired
	private ClienteRepository repo ;
	
	@GetMapping
	
	public List<Cliente> findAll(){	     
		return repo.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Cliente> findById(@PathVariable Long id){
		return repo.findById(id);
	}
	
	@DeleteMapping("/{id}")						 
	@ResponseStatus(HttpStatus.NO_CONTENT)		
	public void remover(@PathVariable Long id){	
		clienteRepository.deleteById(id);			
	}
	
	@PutMapping("/{id}")						
	public ResponseEntity<Cliente> atualizarCliente(@PathVariable Long id, @Valid @RequestBody Cliente cliente) {
		Cliente attCliente = atualizar(id, cliente);

		return ResponseEntity.ok(attCliente);
	}

	@PostMapping	
	public ResponseEntity<Cliente> criar(@Valid @RequestBody Cliente cliente, HttpServletResponse response) {
		Cliente newCliente = clienteRepository.save(cliente);
		
		eventCliente.publishEvent(new RecursoCriadoEvent(this, response, newCliente.getId()));		
		
		/*
		 * Retorna o HTTP request como 201 CREATED
		 */
		return ResponseEntity.status(HttpStatus.CREATED).body(newCliente);
	}

	
	public Cliente atualizar(Long id, Cliente cliente) {
		Cliente attCliente = buscarPeloId(id);

		BeanUtils.copyProperties(cliente, attCliente, "id");
		
		return clienteRepository.save(attCliente);
	}


	public Cliente buscarPeloId(Long id) {
		Cliente attClient = clienteRepository.getOne(id);
		if (attClient == null) {
			throw new EmptyResultDataAccessException(1);
		}		
		return attClient;
	}
}