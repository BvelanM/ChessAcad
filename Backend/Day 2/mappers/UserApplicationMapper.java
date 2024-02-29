package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.UserApplicationDTO;
import com.chessacad.appdev.models.UserApplication;

public class UserApplicationMapper {

    public static UserApplicationDTO mapToUserApplicationDTO(UserApplication userApplication) {
        return new UserApplicationDTO(
                userApplication.getAppId(),
                userApplication.getDuration(),
                userApplication.getMentor(),
                userApplication.getPayment(),
                userApplication.getUserComments());
    }

    public static UserApplication mapToUserApplication(UserApplicationDTO userApplicationDTO) {
        return new UserApplication(
                userApplicationDTO.getAppId(),
                userApplicationDTO.getDuration(),
                userApplicationDTO.getMentor(),
                userApplicationDTO.getPayment(),
                userApplicationDTO.getUserComments());
    }
}