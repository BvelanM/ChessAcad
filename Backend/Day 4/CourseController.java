package com.chessacad.appdev.controllers;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacad.appdev.dtos.CourseDTO;
import com.chessacad.appdev.Service.CourseService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/chessacad/course")
public class CourseController {

    private CourseService courseService;

    @PostMapping("/add")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<CourseDTO> createCourse(@RequestBody CourseDTO courseDTO) {
        CourseDTO savedCourse = courseService.createCourse(courseDTO);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourseById(@PathVariable("id") Integer courseId) {
        CourseDTO courseDTO = courseService.getCourseById(courseId);
        return ResponseEntity.ok(courseDTO);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CourseDTO>> getAllCourses() {
        List<CourseDTO> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }
@PutMapping("/update/{id}")
@PreAuthorize("hasAuthority('ADMIN')")
public ResponseEntity<CourseDTO> updateCourse(@PathVariable("id") Integer courseId, @RequestBody CourseDTO courseDTO) {
    CourseDTO updatedCourse = courseService.updateCourse(courseId, courseDTO);
    return ResponseEntity.ok(updatedCourse);
}

@DeleteMapping("/delete/{id}")
@PreAuthorize("hasAuthority('ADMIN')")
public ResponseEntity<Void> deleteCourse(@PathVariable("id") Integer courseId) {
    courseService.deleteCourse(courseId);
    return ResponseEntity.noContent().build();
}
}