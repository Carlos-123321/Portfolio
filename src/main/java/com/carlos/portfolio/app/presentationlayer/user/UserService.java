package com.carlos.portfolio.app.presentationlayer.user;

import com.carlos.portfolio.app.datalayer.user.User;
import com.carlos.portfolio.app.datalayer.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
