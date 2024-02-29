package com.chessacad.appdev.Service.ServiceImp;

import com.chessacad.appdev.dtos.AcademyDTO;
import com.chessacad.appdev.models.Academy;
import com.chessacad.appdev.repositories.AcademyRepository;
import com.chessacad.appdev.Service.AcademyService;
import com.chessacad.appdev.mappers.AcademyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AcademyServiceImp implements AcademyService {

    private final AcademyRepository academyRepository;

    @Autowired
    public AcademyServiceImp(AcademyRepository academyRepository) {
        this.academyRepository = academyRepository;
    }

    @Override
    public AcademyDTO createAcademy(AcademyDTO academyDTO) {
        Academy academy = AcademyMapper.mapToAcademy(academyDTO);
        Academy savedAcademy = academyRepository.save(academy);
        return AcademyMapper.mapToAcademyDTO(savedAcademy);
    }

    @Override
    public AcademyDTO getAcademyById(Integer id) {
        Academy academy = academyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Academy not found"));
        return AcademyMapper.mapToAcademyDTO(academy);
    }

    @Override
    public List<AcademyDTO> getAllAcademies() {
        List<Academy> academies = academyRepository.findAll();
        List<AcademyDTO> academyDTOs = new ArrayList<>();
        for (Academy academy : academies) {
            academyDTOs.add(AcademyMapper.mapToAcademyDTO(academy));
        }
        return academyDTOs;
    }
}