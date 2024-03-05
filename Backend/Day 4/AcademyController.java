package com.chessacad.appdev.controllers;

import com.chessacad.appdev.dtos.AcademyDTO;
import com.chessacad.appdev.Service.AcademyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chessacad/academy")
public class AcademyController {

    private final AcademyService academyService;

    @Autowired
    public AcademyController(AcademyService academyService) {
        this.academyService = academyService;
    }

    @PostMapping("/add")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AcademyDTO> createAcademy(@RequestBody AcademyDTO academyDTO) {
        AcademyDTO savedAcademy = academyService.createAcademy(academyDTO);
        return new ResponseEntity<>(savedAcademy, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AcademyDTO> getAcademyById(@PathVariable("id") Integer id) {
        AcademyDTO academyDTO = academyService.getAcademyById(id);
        return ResponseEntity.ok(academyDTO);
    }

    @GetMapping("/all")
    public ResponseEntity<List<AcademyDTO>> getAllAcademies() {
        List<AcademyDTO> academies = academyService.getAllAcademies();
        return ResponseEntity.ok(academies);
    }
    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AcademyDTO> updateAcademy(@PathVariable("id") Integer academyId, @RequestBody AcademyDTO academyDTO) {
        AcademyDTO updatedAcademy = academyService.updateAcademy(academyId, academyDTO);
        return ResponseEntity.ok(updatedAcademy);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteAcademy(@PathVariable("id") Integer academyId) {
        academyService.deleteAcademy(academyId);
        return ResponseEntity.noContent().build();
    }
    }
