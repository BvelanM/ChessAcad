package com.chessacad.appdev.controllers;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacad.appdev.dtos.MentorDTO;
import com.chessacad.appdev.Service.MentorService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/mentor")
public class MentorController {

    private MentorService mentorService;

    @PostMapping
    public ResponseEntity<MentorDTO> createMentor(@RequestBody MentorDTO mentorDTO) {
        MentorDTO savedMentor = mentorService.createMentor(mentorDTO);
        return new ResponseEntity<>(savedMentor, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<MentorDTO> getMentorById(@PathVariable("id") Integer mentorId) {
        MentorDTO mentorDTO = mentorService.getMentorById(mentorId);
        return ResponseEntity.ok(mentorDTO);
    }

    @GetMapping
    public ResponseEntity<List<MentorDTO>> getAllMentors() {
        List<MentorDTO> mentors = mentorService.getAllMentors();
        return ResponseEntity.ok(mentors);
    }
}