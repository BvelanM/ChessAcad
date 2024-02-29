package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.UserDTO;
import com.chessacad.appdev.models.User;

public class UserMapper {

    public static UserDTO maptoUserDTO(User user) {
        return new UserDTO(
                user.getUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getContactNumber(),
                user.getBio(),
                user.getAchievements(),
                user.getRanking());
    }

    public static User maptoUser(UserDTO userdto) {
        return new User(
                userdto.getUserId(),
                userdto.getFirstName(),
                userdto.getLastName(),
                userdto.getEmail(),
                userdto.getPassword(),
                userdto.getContactNumber(),
                userdto.getBio(),
                userdto.getAchievements(),
                userdto.getRanking());
    }

}