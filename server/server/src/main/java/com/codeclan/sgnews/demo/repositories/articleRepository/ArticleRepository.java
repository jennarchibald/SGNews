package com.codeclan.sgnews.demo.repositories.articleRepository;

import com.codeclan.sgnews.demo.models.Article;
import com.codeclan.sgnews.demo.projections.EmbedArticles;
import com.codeclan.sgnews.demo.projections.EmbedJournalists;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(excerptProjection = EmbedJournalists.class)
public interface ArticleRepository extends JpaRepository<Article, Long>, ArticleRepositoryCustom {
    List<Article> findAllArticlesByOrderByDateDesc();
}
