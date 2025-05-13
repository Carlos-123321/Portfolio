package com.carlos.portfolio.app.businesslayer.aboutMe;

import com.carlos.portfolio.app.datalayer.aboutMe.AboutMe;
import com.carlos.portfolio.app.presentationlayer.aboutMe.AboutMeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://carlos-portfolio-mrl4c8exp-carlos-projects-606b522d.vercel.app",
        "https://carlos-portfolio-orcin.vercel.app"
})
@RestController
@RequestMapping("/api/v1")
public class AboutMeController {

    private final AboutMeService aboutMeService;

    public AboutMeController(AboutMeService aboutMeService) {
        this.aboutMeService = aboutMeService;
    }

    @GetMapping("/aboutMe/{id}")
    public ResponseEntity<AboutMe> getAboutMeById(@PathVariable Long id) {
        return aboutMeService.getAboutMeById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



    @PutMapping("/aboutMe/{id}")
    public ResponseEntity<AboutMe> updateAboutMe(@PathVariable Long id, @RequestBody AboutMe updatedAboutMe) {
        return aboutMeService.updateAboutMe(id, updatedAboutMe)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
