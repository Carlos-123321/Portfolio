package com.carlos.portfolio.app.presentationlayer.journey;

import com.carlos.portfolio.app.datalayer.journey.JourneyRepository;
import com.carlos.portfolio.app.datalayer.journey.Journey;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JourneyService {

    private final JourneyRepository journeyRepository;

    public JourneyService(JourneyRepository journeyRepository) {
        this.journeyRepository = journeyRepository;
    }

    public Optional<Journey> getJourneyById(Long id) {
        Optional<Journey> journey = journeyRepository.findById(id);
        journey.ifPresentOrElse(
                data -> System.out.println("Found Journey: " + data.getTitle()),
                () -> System.out.println("No Journey found with ID " + id)
        );
        return journey;
    }


    public Journey saveJourney(Journey journey) {
        return journeyRepository.save(journey);
    }

    public Optional<Journey> updateJourney(Long id, Journey updatedJourney) {
        return journeyRepository.findById(id).map(existingJourney -> {
            existingJourney.setTitle(updatedJourney.getTitle());
            existingJourney.setAcademic(updatedJourney.getAcademic());

            return journeyRepository.save(existingJourney);
        });
    }


}

