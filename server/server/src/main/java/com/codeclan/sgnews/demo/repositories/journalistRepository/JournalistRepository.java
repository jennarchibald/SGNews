package com.codeclan.sgnews.demo.repositories.journalistRepository;

import com.codeclan.sgnews.demo.models.Journalist;
import com.codeclan.sgnews.demo.projections.EmbedArticles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
//@RepositoryRestResource(excerptProjection = EmbedArticles.class)
public interface JournalistRepository extends JpaRepository<Journalist, Long>, JournalistRepositoryCustom {
}
