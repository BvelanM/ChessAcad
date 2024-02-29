package com.chessacad.appdev.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.chessacad.appdev.models.UserApplication;

public interface UserApplicationRepository extends JpaRepository<UserApplication, Integer> {
}