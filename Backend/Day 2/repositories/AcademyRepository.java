package com.chessacad.appdev.repositories;

import com.chessacad.appdev.models.Academy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AcademyRepository extends JpaRepository<Academy, Integer> {
}