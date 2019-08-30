package com.vh.projectcars.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vh.projectcars.domain.Cliente;

	@Repository
	public interface ClienteRepository extends JpaRepository <Cliente, Long> {
		
		@Transactional
		Cliente findByEmail(String email);

	}

