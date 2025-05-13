package com.carlos.portfolio.app.presentationlayer.reviews;

import com.carlos.portfolio.app.datalayer.reviews.Reviews;
import com.carlos.portfolio.app.datalayer.reviews.ReviewsRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewsService {

    private final ReviewsRepository reviewsRepository;

    public ReviewsService(ReviewsRepository reviewsRepository) {
        this.reviewsRepository = reviewsRepository;
    }

    public Optional<Reviews> getReviewsById(Long id) {
        Optional<Reviews> reviews = reviewsRepository.findById(id);
        reviews.ifPresentOrElse(
                data -> System.out.println("Found Reviews: " + data.getTitle()),
                () -> System.out.println("No Reviews found with ID " + id)
        );
        return reviews;
    }


    public Reviews saveReviews(Reviews reviews) {
        return reviewsRepository.save(reviews);
    }

    public Optional<Reviews> updateReviews(Long id, Reviews updatedReviews) {
        return reviewsRepository.findById(id).map(existingReviews -> {
            existingReviews.setTitle(updatedReviews.getTitle());

            return reviewsRepository.save(existingReviews);
        });
    }


}

