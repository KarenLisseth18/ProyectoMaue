package com.example.demo.repository;

import com.example.demo.model.Categoria;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoriaRepository extends MongoRepository<Categoria, String> {
}