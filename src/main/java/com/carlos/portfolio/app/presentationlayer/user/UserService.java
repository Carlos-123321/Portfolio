package com.carlos.portfolio.app.presentationlayer.user;

import com.carlos.portfolio.app.datalayer.project.Project;
import com.carlos.portfolio.app.datalayer.user.User;
import com.carlos.portfolio.app.datalayer.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setComment(updatedUser.getComment());
            existingUser.setRole(updatedUser.getRole());

            return userRepository.save(existingUser);
        });
    }


}
