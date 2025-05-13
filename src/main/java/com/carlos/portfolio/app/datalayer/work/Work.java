package com.carlos.portfolio.app.datalayer.work;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Setter
@Getter
@Table(name = "work")
public class Work {
    @Id
    private Long id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("paragraph")
    @Column(name = "paragraph", columnDefinition = "TEXT")
    private String paragraph;
}
