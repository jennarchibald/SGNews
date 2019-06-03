package com.codeclan.sgnews.demo.models;

import com.codeclan.sgnews.demo.enums.Category;
import com.codeclan.sgnews.demo.enums.Region;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="headline")
    private String headline;

    @Column(name="summary", columnDefinition = "TEXT")
    private String summary;

    @Column(name="story_text", columnDefinition = "TEXT")
    private String storyText;

    @Column(name= "image")
    private String image;

    @Column(name = "date")
    private String date;

    @Column(name = "category")
    private Category category;

    @Column(name = "region")
    private Region region;

    @JsonIgnoreProperties("articles")
    @ManyToOne
    @JoinColumn(name = "journalist_id", nullable = false)
    private Journalist journalist;

    public Article(String headline, String summary, String storyText, String image, Journalist journalist, String date, Category category, Region region) {
        this.headline = headline;
        this.summary = summary;
        this.storyText = storyText;
        this.image = image;
        this.journalist = journalist;
        this.date = date;
        this.category = category;
        this.region = region;
    }

    public Article() {
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getStoryText() {
        return storyText;
    }

    public void setStoryText(String storyText) {
        this.storyText = storyText;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Journalist getJournalist() {
        return journalist;
    }

    public void setJournalist(Journalist journalist) {
        this.journalist = journalist;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
