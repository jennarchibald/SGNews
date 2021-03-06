package com.codeclan.sgnews.demo.projections;

import com.codeclan.sgnews.demo.models.Article;
import com.codeclan.sgnews.demo.models.Journalist;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedArticles", types = Journalist.class)
public interface EmbedArticles {
    public Long getId();
    public String getName();
    public String getImage();
    public String getBio();
    public List<Article> getArticles();
}
