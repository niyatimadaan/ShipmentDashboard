package com.example.dashboard.services;

import com.example.dashboard.models.DocumentsModel;
import com.example.dashboard.models.Location;
import com.example.dashboard.repository.DocumentsRepo;
import com.example.dashboard.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {
    @Autowired
    LocationRepository locationRepository;

    public List<Location> getAll(){
        return locationRepository.findAll();
    }
}
