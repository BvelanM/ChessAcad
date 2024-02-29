package com.chessacad.appdev.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chessacad.appdev.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}

