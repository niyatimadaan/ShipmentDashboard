package com.example.dashboard.controller;

import com.example.dashboard.models.DocumentsModel;
import com.example.dashboard.models.Location;
import com.example.dashboard.models.ShipmentsModel;
import com.example.dashboard.repository.DocumentsRepo;
import com.example.dashboard.services.DocumentsService;
import com.example.dashboard.services.LocationService;
import com.example.dashboard.services.ShipmentsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

    @Autowired
    LocationService locationService;
    @Autowired
    ShipmentsService shipmentsService;
    @Autowired
    DocumentsService documentsService;

    @GetMapping("/")
    public String home() {
        return "index"; // JSP file name without extension
    }

    @GetMapping("/dashboard")
    public String dashboard(Model model){
        List<DocumentsModel> documents = documentsService.getAll();
        List<ShipmentsModel> shipments = shipmentsService.getAll();
        List<Location> locations = locationService.getAll();
        int cancelledCount = shipmentsService.getCancelledCount();
        int bookedCount = shipmentsService.getBookedCount();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Convert Java objects to JSON strings
            String documentsJson = objectMapper.writeValueAsString(documents);
            String shipmentsJson = objectMapper.writeValueAsString(shipments);
            String locationsJson = objectMapper.writeValueAsString(locations);

            // Add JSON strings to the model
            model.addAttribute("documentsJson", documentsJson);
            model.addAttribute("shipmentsJson", shipmentsJson);
            model.addAttribute("locationsJson", locationsJson);
            model.addAttribute("cancelledCount", cancelledCount);
            model.addAttribute("bookedCount", bookedCount);
            model.addAttribute("totalCount", shipmentsService.getTotalCount());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "dashboard-page";
    }

    @GetMapping("/analytics-page")
    public String analy(Model model){
        List<DocumentsModel> documents = documentsService.getAll();
        List<ShipmentsModel> shipments = shipmentsService.getAll();
        List<Location> locations = locationService.getAll();
        int cancelledCount = shipmentsService.getCancelledCount();
        int bookedCount = shipmentsService.getBookedCount();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Convert Java objects to JSON strings
            String documentsJson = objectMapper.writeValueAsString(documents);
            String shipmentsJson = objectMapper.writeValueAsString(shipments);
            String locationsJson = objectMapper.writeValueAsString(locations);

            // Add JSON strings to the model
            model.addAttribute("documentsJson", documentsJson);
            model.addAttribute("shipmentsJson", shipmentsJson);
            model.addAttribute("locationsJson", locationsJson);
            model.addAttribute("cancelledCount", cancelledCount);
            model.addAttribute("bookedCount", bookedCount);
            model.addAttribute("totalCount", shipmentsService.getTotalCount());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "analytics-page";
    }
}
