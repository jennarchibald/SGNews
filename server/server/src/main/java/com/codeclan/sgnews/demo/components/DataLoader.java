package com.codeclan.sgnews.demo.components;

import com.codeclan.sgnews.demo.enums.Category;
import com.codeclan.sgnews.demo.enums.Region;
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
        Journalist ben = new Journalist("Ben", "no image found", "In Soviet Russia, news report you");
        journalistRepository.save(ben);

        Journalist grant = new Journalist("Grant", "no image found", "I’m indifferent to most items on the planet. Some people call me a Social Media Guru. I don’t correct them.");
        journalistRepository.save(grant);

        Journalist hamish = new Journalist("Hamish", "no image found", "90% of your problems can be solved by marketing.  Solving the other 10% just requires good procrastination skills.");
        journalistRepository.save(hamish);

        Journalist jenn = new Journalist("Jenn", "no image found", "Insert pretentious crap about myself here.");
        journalistRepository.save(jenn);

        Article article = new Article("It's in the Database!", "We've saved it!", "It has successfully saved", "no picture", ben, "2019-05-31T11:13:12.725Z", Category.TECH, Region.HIGHLANDS);
        articleRepository.save(article);
    }
}
