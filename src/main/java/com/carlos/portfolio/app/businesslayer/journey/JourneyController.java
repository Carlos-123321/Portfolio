package com.carlos.portfolio.app.businesslayer.journey;

import com.carlos.portfolio.app.datalayer.journey.Journey;
import com.carlos.portfolio.app.presentationlayer.journey.JourneyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://carlos-portfolio-mrl4c8exp-carlos-projects-606b522d.vercel.app",
        "https://carlos-portfolio-orcin.vercel.app"
})
@RestController
@RequestMapping("/api/v1")
public class JourneyController {

    private final JourneyService journeyService;

    public JourneyController(JourneyService journeyService) {
        this.journeyService = journeyService;
    }

    @GetMapping("/journey/{id}")
    public ResponseEntity<Journey> getJourneyById(@PathVariable Long id) {
        return journeyService.getJourneyById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



    @PutMapping("/journey/{id}")
    public ResponseEntity<Journey> updateJourney(@PathVariable Long id, @RequestBody Journey updatedJourney) {
        return journeyService.updateJourney(id, updatedJourney)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
