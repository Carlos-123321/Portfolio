package com.carlos.portfolio.app.businesslayer.work;

import com.carlos.portfolio.app.datalayer.work.Work;
import com.carlos.portfolio.app.presentationlayer.work.WorkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://carlos-portfolio-mrl4c8exp-carlos-projects-606b522d.vercel.app",
        "https://carlos-portfolio-orcin.vercel.app"
})
@RestController
@RequestMapping("/api/v1")
public class WorkController {

    private final WorkService workService;

    public WorkController(WorkService workService) {
        this.workService = workService;
    }

    @GetMapping("/work/{id}")
    public ResponseEntity<Work> getWorkById(@PathVariable Long id) {
        return workService.getWorkById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



    @PutMapping("/work/{id}")
    public ResponseEntity<Work> updateWork(@PathVariable Long id, @RequestBody Work updatedWork) {
        return workService.updateWork(id, updatedWork)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
