package com.example.dashboard.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document("shipments")
public class ShipmentsModel {
    @Id
    private String id;
    private String hbl_no;
    private String mbl_no;
    private String po_ref_no;
    private String recipt;
    private Date recipt_date;
    private String loading;
    private Date loading_date;
    private String discharge;
    private Date discharge_date;
    private String delivery;
    private Date delivery_date;
    private String booking_no;
    private Date booking_date;
    @Field("booking_status")
    private String bookingStatus;
    private String size_type;
    private String carrier;
    private String commodity;
    private String milestone;
    private String milestone_group;
    private String shipper;
    private String consignee;
    private Date created_at;
    private Date updated_at;
    private Date estimated_time_of_departure;
    private Date estimated_time_of_arrival;
    private Date actual_time_of_departure;
    private Date actual_time_of_arrival;
}
