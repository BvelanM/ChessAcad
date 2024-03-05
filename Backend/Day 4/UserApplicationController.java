package com.chessacad.appdev.controllers;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacad.appdev.dtos.UserApplicationDTO;
import com.chessacad.appdev.Service.UserApplicationService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/chessacad/user-application")
public class UserApplicationController {

    private UserApplicationService userApplicationService;

    @PostMapping("/add")
    public ResponseEntity<UserApplicationDTO> createUserApplication(@RequestBody UserApplicationDTO userApplicationDTO) {
        UserApplicationDTO savedUserApplication = userApplicationService.createUserApplication(userApplicationDTO);
        return new ResponseEntity<>(savedUserApplication, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserApplicationDTO> getUserApplicationById(@PathVariable("id") Integer userApplicationId) {
        UserApplicationDTO userApplicationDTO = userApplicationService.getUserApplicationById(userApplicationId);
        return ResponseEntity.ok(userApplicationDTO);
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserApplicationDTO>> getAllUserApplications() {
        List<UserApplicationDTO> userApplications = userApplicationService.getAllUserApplications();
        return ResponseEntity.ok(userApplications);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserApplicationDTO> updateUserApplication(@PathVariable("id") Integer userApplicationId, @RequestBody UserApplicationDTO userApplicationDTO) {
        UserApplicationDTO updatedUserApplication = userApplicationService.updateUserApplication(userApplicationId, userApplicationDTO);
        return ResponseEntity.ok(updatedUserApplication);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUserApplication(@PathVariable("id") Integer userApplicationId) {
        userApplicationService.deleteUserApplication(userApplicationId);
        return ResponseEntity.noContent().build();
    }
    }