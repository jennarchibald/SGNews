package com.codeclan.sgnews.demo.components;

import com.codeclan.sgnews.demo.models.Article;
import com.codeclan.sgnews.demo.models.Journalist;
import com.codeclan.sgnews.demo.repositories.articleRepository.ArticleRepository;
import com.codeclan.sgnews.demo.repositories.journalistRepository.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    JournalistRepository journalistRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        Journalist ben = new Journalist("Ben", "no image found");
        journalistRepository.save(ben);

        Journalist grant = new Journalist("Grant", "no image found");
        journalistRepository.save(grant);

        Journalist hamish = new Journalist("Hamish", "no image found");
        journalistRepository.save(hamish);

        Journalist jenn = new Journalist("Jenn", "no image found");
        journalistRepository.save(jenn);

        Article article = new Article("It's in the Database!", "We've saved it!", "It has successfully saved", "no picture", ben, "2019-05-31T11:13:12.725Z");
        articleRepository.save(article);
    }
}
