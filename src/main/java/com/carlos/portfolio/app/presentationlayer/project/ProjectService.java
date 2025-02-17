package com.carlos.portfolio.app.presentationlayer.project;

import com.carlos.portfolio.app.datalayer.project.ProjectRepository;
import com.carlos.portfolio.app.datalayer.project.Project;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public Optional<Project> updateProject(Long id, Project updatedProject) {
        return projectRepository.findById(id).map(existingProject -> {
            existingProject.setName(updatedProject.getName());
            existingProject.setDescription(updatedProject.getDescription());
            existingProject.setCover_Image(updatedProject.getCover_Image());
            existingProject.setReviews(updatedProject.getReviews());
            existingProject.setType(updatedProject.getType());
            existingProject.setImages(updatedProject.getImages());
            existingProject.setTechStack(updatedProject.getTechStack());
            existingProject.setFeatures(updatedProject.getFeatures());
            existingProject.setKnowledge(updatedProject.getKnowledge());
            existingProject.setSummary(updatedProject.getSummary());

            return projectRepository.save(existingProject);
        });
    }


}
