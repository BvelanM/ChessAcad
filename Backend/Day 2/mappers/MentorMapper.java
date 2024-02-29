package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.MentorDTO;
import com.chessacad.appdev.models.Mentor;

public class MentorMapper {

    public static MentorDTO mapToMentorDTO(Mentor mentor) {
        return new MentorDTO(
                mentor.getMentorId(),
                mentor.getMentorName(),
                mentor.getContact(),
                mentor.getCourseId());
    }

    public static Mentor mapToMentor(MentorDTO mentorDTO) {
        return new Mentor(
                mentorDTO.getMentorId(),
                mentorDTO.getMentorName(),
                mentorDTO.getContact(),
                mentorDTO.getCourseId());
    }
}