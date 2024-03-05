package com.chessacad.appdev.Service.ServiceImp;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.chessacad.appdev.dtos.CourseDTO;
import com.chessacad.appdev.models.Course;
import com.chessacad.appdev.exception.ResourceNotFoundException;
import com.chessacad.appdev.mappers.CourseMapper;
import com.chessacad.appdev.repositories.CourseRepository;
import com.chessacad.appdev.Service.CourseService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CourseServiceImp implements CourseService {

    private CourseRepository courseRepository;

    @Override
    public CourseDTO createCourse(CourseDTO courseDTO) {
        Course course = CourseMapper.mapToCourse(courseDTO);
        Course savedCourse = courseRepository.save(course);
        return CourseMapper.mapToCourseDTO(savedCourse);
    }

    @Override
    public CourseDTO getCourseById(Integer courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course is not exist with given id : " + courseId));
        return CourseMapper.mapToCourseDTO(course);
    }

    @Override
    public List<CourseDTO> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        List<CourseDTO> courseDTOs = new ArrayList<>();
        for (Course course : courses) {
            courseDTOs.add(CourseMapper.mapToCourseDTO(course));
        }
        return courseDTOs;
    }
@Override
public CourseDTO updateCourse(Integer courseId, CourseDTO courseDTO) {
    Course course = courseRepository.findById(courseId)
            .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + courseId));

    course.setCourseName(courseDTO.getCourseName());
    course.setCoursePrice(courseDTO.getCoursePrice());
    course.setHours(courseDTO.getHours());
    course.setMentorId(courseDTO.getMentorId());

    Course updatedCourse = courseRepository.save(course);
    return CourseMapper.mapToCourseDTO(updatedCourse);
}

@Override
public void deleteCourse(Integer courseId) {
    courseRepository.deleteById(courseId);
}
}