package com.chessacad.appdev.repositories;

import com.chessacad.appdev.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}