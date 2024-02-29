package com.chessacad.appdev.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.chessacad.appdev.models.Mentor;

public interface MentorRepository extends JpaRepository<Mentor, Integer> {
}