package com.chessacad.appdev.dtos;

import lombok.AllArgsConstructor;import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AcademyDTO {
    private int acadID;
    private String location;
    private String imgURL;
    private int maxTrainees;
    private String chiefProfessor;
    private int mentorCount;
}
