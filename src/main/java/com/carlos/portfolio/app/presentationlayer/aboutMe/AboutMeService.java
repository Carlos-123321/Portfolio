package com.carlos.portfolio.app.presentationlayer.aboutMe;

import com.carlos.portfolio.app.datalayer.aboutMe.AboutMeRepository;
import com.carlos.portfolio.app.datalayer.aboutMe.AboutMe;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AboutMeService {

    private final AboutMeRepository aboutMeRepository;

    public AboutMeService(AboutMeRepository aboutMeRepository) {
        this.aboutMeRepository = aboutMeRepository;
    }

public Optional<AboutMe> getAboutMeById(Long id) {
    Optional<AboutMe> aboutMe = aboutMeRepository.findById(id);
    aboutMe.ifPresentOrElse(
            data -> System.out.println("Found AboutMe: " + data.getAboutMeText()),
            () -> System.out.println("No AboutMe found with ID " + id)
    );
    return aboutMe;
}
    

    public AboutMe saveAboutMe(AboutMe aboutMe) {
        return aboutMeRepository.save(aboutMe);
    }

    public Optional<AboutMe> updateAboutMe(Long id, AboutMe updatedAboutMe) {
        return aboutMeRepository.findById(id).map(existingAboutMe -> {
            existingAboutMe.setAboutMeText(updatedAboutMe.getAboutMeText());
            existingAboutMe.setTitle(updatedAboutMe.getTitle());

            return aboutMeRepository.save(existingAboutMe);
        });
    }


}

