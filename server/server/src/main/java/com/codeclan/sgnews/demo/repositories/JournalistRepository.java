package com.codeclan.sgnews.demo.repositories;

import com.codeclan.sgnews.demo.models.Journalist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JournalistRepository extends JpaRepository<Journalist, Long> {
}
