package com.chessacad.appdev.Service;

import com.chessacad.appdev.dtos.UserDTO;
import java.util.List;

public interface UserService {
    UserDTO createUser(UserDTO userdto);
    UserDTO getUserById(Integer userId);
    List<UserDTO> getAllUsers();
}