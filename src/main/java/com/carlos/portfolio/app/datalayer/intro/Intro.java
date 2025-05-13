package com.carlos.portfolio.app.datalayer.intro;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Data
@Setter
@Getter
@Table(name = "intro")
public class Intro {
    @Id
    private Long id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("secondTitle")
    private String secondTitle;

    @JsonProperty("thirdTitle")
    private String thirdTitle;

    @JsonProperty("image")
    private String image;

}
