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

import com.vh.projectcars.domain.Cars;
import com.vh.projectcars.event.RecursoCriadoEvent;
import com.vh.projectcars.repositories.CarsRepository;


@RestController
@RequestMapping(value="/cars")		
public class CarsResource {
	
	
	@Autowired
	private CarsRepository carsRepository; 
	
	
	@Autowired
	private ApplicationEventPublisher eventCar; 	
	
	@Autowired
	private CarsRepository repo ;
	
	@GetMapping
	public List<Cars> find(){	     
		return repo.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Cars> findById(@PathVariable Long id){
		return repo.findById(id);
	}
	
	
	@DeleteMapping("/{id}")						 
	@ResponseStatus(HttpStatus.NO_CONTENT)		
	public void remover(@PathVariable Long id){	
		carsRepository.deleteById(id);			
	}
	
	@PutMapping("/{id}")						
	public ResponseEntity<Cars> atualizarCarro(@PathVariable Long id, @Valid @RequestBody Cars cars) {
		Cars attCars = atualizar(id, cars);
		

		return ResponseEntity.ok(attCars);
	}

	@PostMapping	
	public ResponseEntity<Cars> criar(@Valid @RequestBody Cars cars, HttpServletResponse response) {
		Cars newCars = carsRepository.save(cars);
		
		eventCar.publishEvent(new RecursoCriadoEvent(this, response, newCars.getId()));		
		
		/*
		 * Retorna o HTTP request como 201 CREATED
		 */
		return ResponseEntity.status(HttpStatus.CREATED).body(newCars);
	}

	
	public Cars atualizar(Long id, Cars cars) {
		Cars attCars = buscarPeloId(id);

		BeanUtils.copyProperties(cars, attCars, "id");
		
		return carsRepository.save(attCars);
	}


	public Cars buscarPeloId(Long id) {
		Cars attCars = carsRepository.getOne(id);
		if (attCars == null) {
			throw new EmptyResultDataAccessException(1);
		}		
		return attCars;
	}
}