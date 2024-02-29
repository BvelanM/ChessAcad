package com.chessacad.appdev.Service;

import com.chessacad.appdev.dtos.AcademyDTO;
import java.util.List;

public interface AcademyService {
    AcademyDTO createAcademy(AcademyDTO academyDTO);
    AcademyDTO getAcademyById(Integer id);
    List<AcademyDTO> getAllAcademies();
}