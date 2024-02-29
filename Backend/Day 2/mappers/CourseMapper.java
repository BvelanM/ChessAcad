package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.CourseDTO;
import com.chessacad.appdev.models.Course;

public class CourseMapper {

    public static CourseDTO mapToCourseDTO(Course course) {
        return new CourseDTO(
                course.getCourseID(),
                course.getCourseName(),
                course.getCoursePrice(),
                course.getHours(),
                course.getMentorId());
    }

    public static Course mapToCourse(CourseDTO courseDTO) {
        return new Course(
                courseDTO.getCourseID(),
                courseDTO.getCourseName(),
                courseDTO.getCoursePrice(),
                courseDTO.getHours(),
                courseDTO.getMentorId());
    }
}