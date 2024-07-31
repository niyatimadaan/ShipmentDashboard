package com.example.dashboard.repository;

import com.example.dashboard.models.ShipmentsModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShipmentsRepo  extends MongoRepository<ShipmentsModel,String> {

    List<ShipmentsModel> findByBookingStatus(String bookingStatus);

}
