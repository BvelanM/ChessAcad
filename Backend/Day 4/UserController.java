package com.chessacad.appdev.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacad.appdev.dtos.UserDTO;
import com.chessacad.appdev.Service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/chessacad/user")
public class UserController {

    private UserService userService;

    // Build Add users REST API
    @PostMapping("/add")
    public ResponseEntity<UserDTO> createusers(@RequestBody UserDTO userDTO) {
        UserDTO savedUser = userService.createUser(userDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build Get users REST API
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserId(@PathVariable("id") Integer userId) {
        UserDTO userDTO = userService.getUserById(userId);
        return ResponseEntity.ok(userDTO);
    }

    // Build Get All users REST API
    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") Integer userId) {
        userService.deleteUser(userId);
        return "Deleted";
    }
            @PutMapping("/update/{id}")
        public ResponseEntity<UserDTO> updateUser(@PathVariable("id") Integer userId, @RequestBody UserDTO userDto) {
            UserDTO updatedUser = userService.updateUser(userId, userDto);
            return ResponseEntity.ok(updatedUser);
        }
}
