package com.chessacad.appdev.Service;

import com.chessacad.appdev.dtos.MentorDTO;
import java.util.List;

public interface MentorService {
    MentorDTO createMentor(MentorDTO mentorDTO);
    MentorDTO getMentorById(Integer mentorId);
    List<MentorDTO> getAllMentors();
}