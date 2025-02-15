package com.carlos.portfolio.app.businesslayer.project;

import com.carlos.portfolio.app.datalayer.project.Project;
import com.carlos.portfolio.app.presentationlayer.project.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        Optional<Project> existingProjectOpt = projectService.getProjectById(id);

        if (existingProjectOpt.isEmpty()) {
            return ResponseEntity.notFound().build(); // Return 404 if the project doesn't exist
        }

        projectService.deleteProject(id); // Call the service to delete the project
        return ResponseEntity.noContent().build(); // Return 204 No Content after successful deletion
    }

    @PostMapping("/projects")
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        // Save the new project
        Project createdProject = projectService.saveProject(project);

        // Return a response with the created project and a 201 Created status
        return ResponseEntity.status(201).body(createdProject);
    }

    @PutMapping("/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project updatedProject) {
        return projectService.updateProject(id, updatedProject)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
