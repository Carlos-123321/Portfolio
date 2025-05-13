package com.carlos.portfolio.app.presentationlayer.hobby;

import com.carlos.portfolio.app.datalayer.hobby.HobbyRepository;
import com.carlos.portfolio.app.datalayer.hobby.Hobby;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HobbyService {

    private final HobbyRepository hobbyRepository;

    public HobbyService(HobbyRepository hobbyRepository) {
        this.hobbyRepository = hobbyRepository;
    }

    public Optional<Hobby> getHobbyById(Long id) {
        Optional<Hobby> hobby = hobbyRepository.findById(id);
        hobby.ifPresentOrElse(
                data -> System.out.println("Found Hobby: " + data.getTitle()),
                () -> System.out.println("No Hobby found with ID " + id)
        );
        return hobby;
    }


    public Hobby saveHobby(Hobby hobby) {
        return hobbyRepository.save(hobby);
    }

    public Optional<Hobby> updateHobby(Long id, Hobby updatedHobby) {
        return hobbyRepository.findById(id).map(existingHobby -> {
            existingHobby.setTitle(updatedHobby.getTitle());
            existingHobby.setBelow(updatedHobby.getBelow());
            existingHobby.setHobbies(updatedHobby.getHobbies());

            return hobbyRepository.save(existingHobby);
        });
    }


}

