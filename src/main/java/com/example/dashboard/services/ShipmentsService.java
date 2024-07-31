package com.example.dashboard.services;

import com.example.dashboard.models.DocumentsModel;
import com.example.dashboard.models.ShipmentsModel;
import com.example.dashboard.repository.ShipmentsRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ShipmentsService {
    @Autowired
    ShipmentsRepo shipmentsRepo;

    public List<ShipmentsModel> getAll(){
        List<ShipmentsModel> l = shipmentsRepo.findAll();
        return l;
    }

    public int getBookedCount() {
        int booked = shipmentsRepo.findByBookingStatus("BOOKED").size();
//        int notBooked = (int) shipmentsRepo.count() - booked;
        return booked;
    }

    public int getCancelledCount(){
        int notBooked = shipmentsRepo.findByBookingStatus("CANCELLED").size();
        return notBooked;
    }

    public int getTotalCount(){
        int total = (int) shipmentsRepo.count();
        return total;
    }

//    public long getCount() {
//        Query query = new Query();
//        query.addCriteria(Criteria.where("booking_status").is("BOOKED"));
//        Map<String,String> map = new HashMap<>();
//        ShipmentsModel shipmentsModel = new ShipmentsModel();
//        shipmentsModel.setBooking_status("BOOKED");
//        map.put("booking_status", "BOOKED");
//
//        long bookedCount = shipmentsRepo.count(shipmentsModel);
//        return bookedCount;
//    }


}
