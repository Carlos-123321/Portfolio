package com.carlos.portfolio.app.datalayer.reviews;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Data
@Setter
@Getter
@Table(name = "reviews")
public class Reviews {
    @Id
    private Long id;

    @JsonProperty("title")
    private String title;

}
