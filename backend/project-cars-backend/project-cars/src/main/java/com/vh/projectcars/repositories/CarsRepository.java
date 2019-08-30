package com.vh.projectcars.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vh.projectcars.domain.Cars;


@Repository
public interface CarsRepository extends JpaRepository <Cars, Long> {

}