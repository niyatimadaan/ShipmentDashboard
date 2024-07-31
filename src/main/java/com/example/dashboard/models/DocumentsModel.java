package com.example.dashboard.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@Document("documents")
public class DocumentsModel {
    String title;
    String description;
    Date created_at;
    Date updated_at;
}
