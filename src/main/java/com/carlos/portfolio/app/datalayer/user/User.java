package com.carlos.portfolio.app.datalayer.user;

import com.carlos.portfolio.app.util.StringListConverter;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("email")
    private String email;

    @Convert(converter = StringListConverter.class)
    @Column(columnDefinition = "JSON")
    private List<String> comment;

    @JsonProperty("password")
    private String password;

    @JsonProperty("role")
    private String role;

}
