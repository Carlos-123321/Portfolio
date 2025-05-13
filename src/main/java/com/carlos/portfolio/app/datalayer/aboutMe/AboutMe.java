package com.carlos.portfolio.app.datalayer.aboutMe;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Setter
@Getter
@Table(name = "aboutme")
public class AboutMe {
    @Id
    private Long id;

    @JsonProperty("aboutMeText")
    @Column(name = "about_Me_Text", columnDefinition = "TEXT")
    private String aboutMeText;

    @JsonProperty("title")
    private String title;
}
