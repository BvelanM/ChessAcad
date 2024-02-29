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
public class UserApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appId;
    @Column(nullable = false)
    private int duration;
    @Column(nullable = false)
    private String mentor;
    @Column(nullable = false)
    private String payment;
    @Column(nullable = false)
    private String userComments;
}
