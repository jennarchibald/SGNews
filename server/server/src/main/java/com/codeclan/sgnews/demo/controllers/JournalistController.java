package com.codeclan.sgnews.demo.controllers;

import com.codeclan.sgnews.demo.repositories.journalistRepository.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.JoinColumn;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/journalists")
public class JournalistController {

    @Autowired
    JournalistRepository journalistRepository;
}
