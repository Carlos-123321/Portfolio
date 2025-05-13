package com.carlos.portfolio.app.datalayer.skills;

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
@Table(name = "skills")
public class Skills {
    @Id
    private Long id;

    @JsonProperty("title")
    private String title;

    @Convert(converter = com.carlos.portfolio.app.util.ListToJsonConverter.class)
    @Column(name = "soft_Skills", columnDefinition = "json")
    private List<String> softSkills;

    @Convert(converter = com.carlos.portfolio.app.util.FrontendTechnologyListToJsonConverter.class)
    @Column(name = "frontend_technologies", columnDefinition = "json")
    private List<FrontendTechnology> frontendTechnologies;

    @Convert(converter = com.carlos.portfolio.app.util.FrontendTechnologyListToJsonConverter.class)
    @Column(name = "backend_technologies", columnDefinition = "json")
    private List<BackendTechnology> backendTechnologies;
}
