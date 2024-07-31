package com.example.dashboard.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@Document("locations")
public class Location {
    @Id
    String id;
    String location;
    String lat;
    @Field("long")
    String longitude;

    public Location(String id, String location, String lat, String longitude) {
        this.id = id;
        this.location = location;
        this.lat = lat;
        this.longitude = longitude;
    }
}
