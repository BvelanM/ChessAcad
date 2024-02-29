package com.chessacad.appdev.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Academy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int acadID;
    @Column(nullable = false)
    private String location;
    private String imgURL;
    @Column(nullable = false)
    private int maxTrainees;
    @Column(nullable = false)
    private String chiefProfessor;
    @Column(nullable = false)
    private int mentorsCount;
}
