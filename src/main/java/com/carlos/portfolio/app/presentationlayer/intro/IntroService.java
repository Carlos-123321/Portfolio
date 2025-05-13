package com.carlos.portfolio.app.presentationlayer.intro;

import com.carlos.portfolio.app.datalayer.intro.Intro;
import com.carlos.portfolio.app.datalayer.intro.IntroRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class IntroService {

    private final IntroRepository introRepository;

    public IntroService(IntroRepository introRepository) {
        this.introRepository = introRepository;
    }

    public Optional<Intro> getIntroById(Long id) {
        Optional<Intro> intro = introRepository.findById(id);
        intro.ifPresentOrElse(
                data -> System.out.println("Found Intro: " + data.getTitle()),
                () -> System.out.println("No Intro found with ID " + id)
        );
        return intro;
    }


    public Intro saveIntro(Intro intro) {
        return introRepository.save(intro);
    }

    public Optional<Intro> updateIntro(Long id, Intro updatedIntro) {
        return introRepository.findById(id).map(existingIntro -> {
            existingIntro.setTitle(updatedIntro.getTitle());
            existingIntro.setSecondTitle(updatedIntro.getSecondTitle());
            existingIntro.setThirdTitle(updatedIntro.getThirdTitle());
            existingIntro.setImage(updatedIntro.getImage());

            return introRepository.save(existingIntro);
        });
    }


}

