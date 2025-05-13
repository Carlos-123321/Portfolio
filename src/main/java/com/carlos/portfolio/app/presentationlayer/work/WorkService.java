package com.carlos.portfolio.app.presentationlayer.work;

import com.carlos.portfolio.app.datalayer.work.WorkRepository;
import com.carlos.portfolio.app.datalayer.work.Work;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WorkService {

    private final WorkRepository workRepository;

    public WorkService(WorkRepository workRepository) {
        this.workRepository = workRepository;
    }

    public Optional<Work> getWorkById(Long id) {
        Optional<Work> work = workRepository.findById(id);
        work.ifPresentOrElse(
                data -> System.out.println("Found Work: " + data.getParagraph()),
                () -> System.out.println("No Work found with ID " + id)
        );
        return work;
    }


    public Work saveWork(Work work) {
        return workRepository.save(work);
    }

    public Optional<Work> updateWork(Long id, Work updatedWork) {
        return workRepository.findById(id).map(existingWork -> {
            existingWork.setTitle(updatedWork.getTitle());
            existingWork.setParagraph(updatedWork.getParagraph());

            return workRepository.save(existingWork);
        });
    }


}


