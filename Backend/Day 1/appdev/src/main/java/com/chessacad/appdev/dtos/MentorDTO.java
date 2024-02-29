package com.chessacad.appdev.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MentorDTO {
   private int mentorId;
   private String mentorName;
   private int contact;
   private int courseId;
}
