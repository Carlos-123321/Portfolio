package com.carlos.portfolio.app.presentationlayer.skills;

import com.carlos.portfolio.app.datalayer.skills.SkillsRepository;
import com.carlos.portfolio.app.datalayer.skills.Skills;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SkillsService {

    private final SkillsRepository skillsRepository;

    public SkillsService(SkillsRepository skillsRepository) {
        this.skillsRepository = skillsRepository;
    }

    public Optional<Skills> getSkillsById(Long id) {
        Optional<Skills> skills = skillsRepository.findById(id);
        skills.ifPresentOrElse(
                data -> System.out.println("Found Skills: " + data.getTitle()),
                () -> System.out.println("No Skills found with ID " + id)
        );
        return skills;
    }


    public Skills saveSkills(Skills skills) {
        return skillsRepository.save(skills);
    }

    public Optional<Skills> updateSkills(Long id, Skills updatedSkills) {
        return skillsRepository.findById(id).map(existingSkills -> {
            existingSkills.setTitle(updatedSkills.getTitle());
            existingSkills.setSoftSkills(updatedSkills.getSoftSkills());
            existingSkills.setFrontendTechnologies(updatedSkills.getFrontendTechnologies());

            return skillsRepository.save(existingSkills);
        });
    }


}

