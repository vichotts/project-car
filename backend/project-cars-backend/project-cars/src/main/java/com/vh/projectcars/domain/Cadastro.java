package com.vh.projectcars.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Cadastro implements Serializable {

	private static final long serialVersionUID = 1L;

	public Cadastro() {

	}

	public Cadastro(String nome, String cpf, String email, String telefone, String senha) {
		super();
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.telefone = telefone;
		this.senha = senha;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nome;
	private String cpf;
	private String email;
	private String telefone;
	private String senha;

}