package com.chessacad.appdev.dtos;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private int contactNumber;
    private String bio;
    private String achievements;
    private String ranking;
}
