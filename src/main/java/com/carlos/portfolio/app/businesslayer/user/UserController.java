package com.carlos.portfolio.app.businesslayer.user;

import com.carlos.portfolio.app.datalayer.user.User;
import com.carlos.portfolio.app.presentationlayer.user.UserService;  // Import the service class
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

//@GetMapping("/users")
//public List<User> getAllUsers() {
//    List<User> users = userService.getAllUsers();
//    System.out.println("Fetched users: " + users);
//    return users;
//}

}
