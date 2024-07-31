package com.example.dashboard.services;

import com.example.dashboard.models.DocumentsModel;
import com.example.dashboard.repository.DocumentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentsService {
    @Autowired
    DocumentsRepo documentsRepo;

    public List<DocumentsModel> getAll(){
        return documentsRepo.findAll();
    }
}
