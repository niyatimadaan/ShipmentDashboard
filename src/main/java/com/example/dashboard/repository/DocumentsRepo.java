package com.example.dashboard.repository;

import com.example.dashboard.models.DocumentsModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentsRepo extends MongoRepository<DocumentsModel,String> {

}
