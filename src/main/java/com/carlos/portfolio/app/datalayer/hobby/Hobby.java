package com.carlos.portfolio.app.datalayer.hobby;

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
@Table(name = "hobby")
public class Hobby {
    @Id
    private Long id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("below")
    private String below;

    @Convert(converter = com.carlos.portfolio.app.util.HobbiesListToJsonConverter.class)
    @Column(name = "hobbies", columnDefinition = "json")
    private List<Hobbies> hobbies;

}
