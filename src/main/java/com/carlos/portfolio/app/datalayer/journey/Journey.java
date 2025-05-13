package com.carlos.portfolio.app.datalayer.journey;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Data
@Setter
@Getter
@Table(name = "journey")
public class Journey {
    @Id
    private Long id;

    @JsonProperty("title")
    private String title;

    @Convert(converter = com.carlos.portfolio.app.util.AcademicListToJsonConverter.class)
    @Column(name = "academic", columnDefinition = "json")
    private List<Academic> academic;

}
