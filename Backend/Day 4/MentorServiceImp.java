package com.chessacad.appdev.Service.ServiceImp;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.chessacad.appdev.dtos.MentorDTO;
import com.chessacad.appdev.models.Mentor;
import com.chessacad.appdev.exception.ResourceNotFoundException;
import com.chessacad.appdev.mappers.MentorMapper;
import com.chessacad.appdev.repositories.MentorRepository;
import com.chessacad.appdev.Service.MentorService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MentorServiceImp implements MentorService {

    private MentorRepository mentorRepository;

    @Override
    public MentorDTO createMentor(MentorDTO mentorDTO) {
        Mentor mentor = MentorMapper.mapToMentor(mentorDTO);
        Mentor savedMentor = mentorRepository.save(mentor);
        return MentorMapper.mapToMentorDTO(savedMentor);
    }

    @Override
    public MentorDTO getMentorById(Integer mentorId) {
        Mentor mentor = mentorRepository.findById(mentorId)
                .orElseThrow(() -> new ResourceNotFoundException("Mentor is not exist with given id : " + mentorId));
        return MentorMapper.mapToMentorDTO(mentor);
    }

    @Override
    public MentorDTO updateMentor(Integer mentorId, MentorDTO mentorDTO) {
        Mentor mentor = mentorRepository.findById(mentorId)
                .orElseThrow(() -> new ResourceNotFoundException("Mentor not found with id : " + mentorId));
        mentor.setMentorName(mentorDTO.getMentorName());
        mentor.setContact(mentorDTO.getContact());
        mentor.setCourseId(mentorDTO.getCourseId());
        Mentor updatedMentor = mentorRepository.save(mentor);
        return MentorMapper.mapToMentorDTO(updatedMentor);
    }

    @Override
    public void deleteMentor(Integer mentorId) {
        mentorRepository.deleteById(mentorId);
    }
    public List<MentorDTO> getAllMentors() {
        List<Mentor> mentors = mentorRepository.findAll();
        List<MentorDTO> mentorDTOs = new ArrayList<>();
        for (Mentor mentor : mentors) {
            mentorDTOs.add(MentorMapper.mapToMentorDTO(mentor));
        }
        return mentorDTOs;
    }
}