package com.codeclan.sgnews.demo.projections;

import com.codeclan.sgnews.demo.enums.Category;
import com.codeclan.sgnews.demo.enums.Region;
import com.codeclan.sgnews.demo.models.Article;
import com.codeclan.sgnews.demo.models.Journalist;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedJournalists", types = Article.class)
public interface EmbedJournalists {
    public Long getId();
    public String getHeadline();
    public String getSummary();
    public String getStoryText();
    public String getImage();
    public String getDate();
    public Journalist getJournalist();
    public Category getCategory();
    public Region getRegion();
}
