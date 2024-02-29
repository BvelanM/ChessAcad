package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.AcademyDTO;
import com.chessacad.appdev.models.Academy;

public class AcademyMapper {

    public static AcademyDTO mapToAcademyDTO(Academy academy) {
        return new AcademyDTO(
                academy.getAcadID(),
                academy.getLocation(),
                academy.getImgURL(),
                academy.getMaxTrainees(),
                academy.getChiefProfessor(),
                academy.getMentorsCount());
    }

    public static Academy mapToAcademy(AcademyDTO academyDTO) {
        return new Academy(
                academyDTO.getAcadID(),
                academyDTO.getLocation(),
                academyDTO.getImgURL(),
                academyDTO.getMaxTrainees(),
                academyDTO.getChiefProfessor(),
                academyDTO.getMentorCount());
    }
}