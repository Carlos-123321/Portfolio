package com.carlos.portfolio.app.businesslayer.intro;

import com.carlos.portfolio.app.datalayer.intro.Intro;
import com.carlos.portfolio.app.presentationlayer.intro.IntroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://carlos-portfolio-mrl4c8exp-carlos-projects-606b522d.vercel.app",
        "https://carlos-portfolio-orcin.vercel.app"
})
@RestController
@RequestMapping("/api/v1")
public class IntroController {

    private final IntroService introService;

    public IntroController(IntroService introService) {
        this.introService = introService;
    }

    @GetMapping("/intro/{id}")
    public ResponseEntity<Intro> getIntroById(@PathVariable Long id) {
        return introService.getIntroById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



    @PutMapping("/intro/{id}")
    public ResponseEntity<Intro> updateIntro(@PathVariable Long id, @RequestBody Intro updatedIntro) {
        return introService.updateIntro(id, updatedIntro)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}

