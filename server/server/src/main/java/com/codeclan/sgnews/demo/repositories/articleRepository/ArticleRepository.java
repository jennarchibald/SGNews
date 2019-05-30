package com.codeclan.sgnews.demo.repositories.articleRepository;

import com.codeclan.sgnews.demo.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>, ArticleRepositoryCustom {
}
