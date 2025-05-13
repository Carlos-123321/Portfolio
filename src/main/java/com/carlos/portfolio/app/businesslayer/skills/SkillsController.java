package com.carlos.portfolio.app.businesslayer.skills;

import com.carlos.portfolio.app.datalayer.skills.Skills;
import com.carlos.portfolio.app.presentationlayer.skills.SkillsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://carlos-portfolio-mrl4c8exp-carlos-projects-606b522d.vercel.app",
        "https://carlos-portfolio-orcin.vercel.app"
})
@RestController
@RequestMapping("/api/v1")
public class SkillsController {

    private final SkillsService skillsService;

    public SkillsController(SkillsService skillsService) {
        this.skillsService = skillsService;
    }

    @GetMapping("/skills/{id}")
    public ResponseEntity<Skills> getSkillsById(@PathVariable Long id) {
        return skillsService.getSkillsById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



    @PutMapping("/skills/{id}")
    public ResponseEntity<Skills> updateSkills(@PathVariable Long id, @RequestBody Skills updatedSkills) {
        return skillsService.updateSkills(id, updatedSkills)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
