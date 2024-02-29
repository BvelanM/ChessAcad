package com.chessacad.appdev.Service;

import com.chessacad.appdev.dtos.UserApplicationDTO;
import java.util.List;

public interface UserApplicationService {
    UserApplicationDTO createUserApplication(UserApplicationDTO userApplicationDTO);
    UserApplicationDTO getUserApplicationById(Integer userApplicationId);
    List<UserApplicationDTO> getAllUserApplications();
}