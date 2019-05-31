package com.codeclan.sgnews.demo.controllers;

import com.codeclan.sgnews.demo.models.Article;
import com.codeclan.sgnews.demo.repositories.articleRepository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping(value = "/bydate")
    public List<Article> findAllArticlesByOrderByDateDesc(){
        return articleRepository.findAllArticlesByOrderByDateDesc();
    }
}
