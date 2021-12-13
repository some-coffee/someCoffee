package com.example.some_coffee.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User>getUsers(){
        return userRepository.findAll();
    }

    public User getUser(String id){
        Long user_id=Long.parseLong(id);
        return userRepository.findById(user_id).orElse(null);
    }

    public User addUser(User user){
        return userRepository.save(user);
    }
}
