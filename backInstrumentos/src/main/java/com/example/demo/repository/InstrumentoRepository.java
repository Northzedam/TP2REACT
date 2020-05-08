package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Instrumento;

@Repository
public interface InstrumentoRepository extends JpaRepository<Instrumento, Integer>{
	
	@Query("SELECT a FROM Instrumento a ORDER BY a.id DESC")
	List<Instrumento> findTopByOrderByIdDesc();
	
	
}
   