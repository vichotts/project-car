package com.vh.projectcars.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vh.projectcars.domain.Cadastro;

@Repository
public interface CadastroRepository extends JpaRepository <Cadastro, Long> {

}
