package com.chessacad.appdev.Service.ServiceImp;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.chessacad.appdev.dtos.UserDTO;
import com.chessacad.appdev.models.User;
import com.chessacad.appdev.exception.ResourceNotFoundException;
import com.chessacad.appdev.mappers.UserMapper;
import com.chessacad.appdev.repositories.UserRepository;
import com.chessacad.appdev.Service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDTO createUser(UserDTO userdto) {

        User user = UserMapper.maptoUser(userdto);
        User savedUser = userRepository.save(user);
        return UserMapper.maptoUserDTO(savedUser);
    }

    @Override
    public UserDTO getUserById(Integer userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("User is not exist with given id : " + userId));

        return UserMapper.maptoUserDTO(user);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();

        List<UserDTO> userDTOs = new ArrayList<>();
        for (User user : users) {
            userDTOs.add(UserMapper.maptoUserDTO(user));
        }

        return userDTOs;
    }

}
