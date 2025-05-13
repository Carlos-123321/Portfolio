package com.carlos.portfolio.app.businesslayer.reviews;

import com.carlos.portfolio.app.datalayer.reviews.Reviews;
import com.carlos.portfolio.app.presentationlayer.reviews.ReviewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://carlos-portfolio-mrl4c8exp-carlos-projects-606b522d.vercel.app",
        "https://carlos-portfolio-orcin.vercel.app"
})
@RestController
@RequestMapping("/api/v1")
public class ReviewsController {

    private final ReviewsService reviewsService;

    public ReviewsController(ReviewsService reviewsService) {
        this.reviewsService = reviewsService;
    }

    @GetMapping("/reviews/{id}")
    public ResponseEntity<Reviews> getReviewsById(@PathVariable Long id) {
        return reviewsService.getReviewsById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



    @PutMapping("/reviews/{id}")
    public ResponseEntity<Reviews> updateReviews(@PathVariable Long id, @RequestBody Reviews updatedReviews) {
        return reviewsService.updateReviews(id, updatedReviews)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}

