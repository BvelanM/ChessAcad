package com.chessacad.appdev.Service.ServiceImp;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.chessacad.appdev.dtos.UserApplicationDTO;
import com.chessacad.appdev.models.UserApplication;
import com.chessacad.appdev.exception.ResourceNotFoundException;
import com.chessacad.appdev.mappers.UserApplicationMapper;
import com.chessacad.appdev.repositories.UserApplicationRepository;
import com.chessacad.appdev.Service.UserApplicationService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserApplicationServiceImp implements UserApplicationService {

    private UserApplicationRepository userApplicationRepository;

    @Override
    public UserApplicationDTO createUserApplication(UserApplicationDTO userApplicationDTO) {
        UserApplication userApplication = UserApplicationMapper.mapToUserApplication(userApplicationDTO);
        UserApplication savedUserApplication = userApplicationRepository.save(userApplication);
        return UserApplicationMapper.mapToUserApplicationDTO(savedUserApplication);
    }

    @Override
    public UserApplicationDTO getUserApplicationById(Integer userApplicationId) {
        UserApplication userApplication = userApplicationRepository.findById(userApplicationId)
                .orElseThrow(() -> new ResourceNotFoundException("UserApplication is not exist with given id : " + userApplicationId));
        return UserApplicationMapper.mapToUserApplicationDTO(userApplication);
    }

    @Override
    public List<UserApplicationDTO> getAllUserApplications() {
        List<UserApplication> userApplications = userApplicationRepository.findAll();
        List<UserApplicationDTO> userApplicationDTOs = new ArrayList<>();
        for (UserApplication userApplication : userApplications) {
            userApplicationDTOs.add(UserApplicationMapper.mapToUserApplicationDTO(userApplication));
        }
        return userApplicationDTOs;
    }
}