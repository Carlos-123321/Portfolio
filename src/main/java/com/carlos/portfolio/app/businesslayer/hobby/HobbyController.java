package com.carlos.portfolio.app.businesslayer.hobby;

import com.carlos.portfolio.app.datalayer.hobby.Hobby;
import com.carlos.portfolio.app.presentationlayer.hobby.HobbyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://carlos-portfolio-mrl4c8exp-carlos-projects-606b522d.vercel.app",
        "https://carlos-portfolio-orcin.vercel.app"
})
@RestController
@RequestMapping("/api/v1")
public class HobbyController {

    private final HobbyService hobbyService;

    public HobbyController(HobbyService hobbyService) {
        this.hobbyService = hobbyService;
    }

    @GetMapping("/hobby/{id}")
    public ResponseEntity<Hobby> getHobbyById(@PathVariable Long id) {
        return hobbyService.getHobbyById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



    @PutMapping("/hobby/{id}")
    public ResponseEntity<Hobby> updateHobby(@PathVariable Long id, @RequestBody Hobby updatedHobby) {
        return hobbyService.updateHobby(id, updatedHobby)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
