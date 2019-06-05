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
        Journalist ben = new Journalist("Ben", "https://media.licdn.com/dms/image/C4D03AQGUEQQwYMVXIA/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=EvPC0QIZxvI0JV3Z0CL-lQybkPcDxOdFhouGtYfEuQ8", "In Soviet Russia, news report you");
        journalistRepository.save(ben);

        Journalist grant = new Journalist("Grant", "https://media.licdn.com/dms/image/C5603AQFMqy1DXCwMYQ/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=y7jKxnyByyl4HrjjQ4vW-hYAgyoCn4Ak8hx5LWcmflY", "I’m indifferent to most items on the planet. Some people call me a Social Media Guru. I don’t correct them.");
        journalistRepository.save(grant);

        Journalist hamish = new Journalist("Hamish", "https://zcoin.io/wp-content/uploads/2017/01/blank-avatar-300x300.png", "90% of your problems can be solved by marketing.  Solving the other 10% just requires good procrastination skills.");
        journalistRepository.save(hamish);

        Journalist jenn = new Journalist("Jenn", "https://media.licdn.com/dms/image/C4D03AQG46HFFZmTcWw/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=r_nwa_S2VjxGKXDRtRY1HfWkCIPxiEiVYUtKXRlMnyw", "Insert pretentious crap about myself here.");
        journalistRepository.save(jenn);

        Article article = new Article("It's in the Database!", "We've saved it!", "It has successfully saved", "no picture", ben, "2019-05-31T11:13:12.725Z", Category.TECH, Region.HIGHLANDS);
        articleRepository.save(article);

        Article article1 = new Article("A Man Fell Into An Art Installation Called Descent Into Limbo", "Art can sometimes play tricks on the mind thanks to optical illusions, although rarely does this kind of art put anyone in real danger.", "But one art installation did, as a man visiting the Fundação de Serralves Museum of Contemporary Art in Porto, Portugal on Aug. 13 accidentally fell into the work of famed artist Anish Kapoor titled Descent Into Limbo — which features a hole in the ground made to look like a mere spot on the floor.\n" +
                "The visitor — reportedly an Italian man in his 60s — allegedly wanted to see if the void was indeed just that and subsequently fell about eight feet to the bottom of the installation. To the illusion’s credit, there were multiple caution signs set up around the piece as well as a guard tasked with keeping visitors away from the hole.\n" +
                "Although the man did have to be hospitalized after the fall, a spokesperson for the museum told Artnet News that the visitor has already left the hospital and he is recovering well.", "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/08/vantablack-kapoor-1.jpg", jenn, "2019-03-21", Category.ENTERTAINMENT, Region.WORLD);
        articleRepository.save(article1);

        Article article2 = new Article("Russian Student Activist Poured Bleach On “Manspreaders” In Public Transit","An activist in Russia is combating the public transportation plague known as manspreading by pouring a bleach-and-water mixture onto men’s crotches.","An activist in Russia is combating the public transportation plague known as “manspreading” by pouring a bleach-and-water mixture onto men’s crotches.\n" +
                "Manspreading refers to the instance of a man sitting with his legs set widely apart. It is considered problematic when in public as it can not only take up more space than necessary but has also been considered a symbol of masculine aggression.\n" +
                "20-year-old Anna Dovgalyuk, a law student, has balked against this by pouring a bleach mixture on men taking St. Petersburg public transit. She claims that her actions are on behalf of everyone who has to endure the manifestations of [men] declaring [their] macho qualities on public transportation.","https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/10/russia-manspreading.jpg",hamish,"2019-02-30", Category.SCIENCE, Region.BORDERS);
        articleRepository.save(article2);

        Article article3 = new Article("Sexually Frustrated Dolphin Forced The Closure Of A Beach In France", "A sexually frustrated dolphin wouldn’t stop harassing swimmers in western France and consequently forced the shutdown of a local beach entirely.", "Nicknamed Zafar by locals, the bottlenose dolphin had been hanging around the waters of the Bay of Brest for a couple of months and subsequently became a tourist attraction.\n" +
                "Zafar was known to playfully swim alongside people in the area and to even let them hold onto his dorsal fin. But Zafar’s behavior turned much more intimate, and in many cases, dangerous, over time. He began aggressively rubbing up on swimmers and boats, lifted one woman with his nose, and prevented yet another from returning to shore, BBC reported. Though that swimmer had to be rescued, she was fortunately not seriously harmed.\n" +
                "According to a report by a marine expert, Zafar was in heat, and therefore looking for companionship from unsuspecting bathers. Although no swimmers have been seriously hurt by Zafar thus far, authorities worried that he could if his behavior were to worsen. This prompted one French mayor to shut down the beaches in his town.", "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/08/GettyImages-695070756.jpg", grant, "2019-05-20", Category.HEALTH, Region.LOTHIAN);
        articleRepository.save(article3);

        Article article4 = new Article("Judge Rules 30-Year-Old Must Finally Move Out Of His Parents’ House", "Even after five notices and an offer of cash to move out of his parents’ home in Camillus, N.Y., Michael Rotondo pulled a real-life Failure to Launch and refused to leave. So, his parents did what every loving mother and father at the end of their rope would do.\n" +
                "They took him to court.", "Earlier this year, a New York judge ruled in favor of the parents, Christina and Mark Rotondo, and ordered the 30-year-old man to leave. However, he wasn’t going down without a fight. He claimed he’s owed a six-month notice which would give him ample time to prepare for such a big step. I just wanted a reasonable amount of time to vacate, with consideration to the fact that I was not really prepared to support myself at the time of the notices, Rotondo told WSTM News.\n" +
                "The notices Rotondo referred to are the five separate notices he had received over the last several months which informed him that his parents wanted him out. The first notice arrived on Feb. 2.\n" +
                "After a discussion with your Mother, we have decided you must leave this house immediately, the notice read. You have 14 days to vacate. You will not be allowed to return. We will take whatever actions are necessary to enforce this decision.”\n" +
                "But when Rotondo didn’t leave, Christina and Mark sought legal counsel who advised them to serve yet another notice. The second notice arrived 11 days after the first, on Feb. 13, and extended the timeframe. Rotondo now had 30 days to vacate the room he’d occupied for eight years before further action was taken.", "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/05/rotondo-parents-failure-to-launch.jpg", hamish, "2019-03-14", Category.EDUCATION, Region.CENTRAL );
        articleRepository.save(article4);

        Article article5 = new Article("A Robber Was Arrested After Interviewing For Job At Police Station Where He’s Wanted", "There are some things you expect to get out of a job interview. Arrested isn’t usually one of them. However, for Alberto Lopez, that was exactly what he got.", "During an interview for a job with the Cottonwood Police Department, Lopez was arrested for felony theft, after officers at the department realized he was a man they had been searching for over a year for.\n" +
                "In 2016, Lopez robbed the Bank of America branch where he was employed and stole roughly $5,000 over the course of three months. After his heist, he quit his job and moved two hours south of Cottonwood to Phoenix. Officials at the Bank of America in Cottonwood reported Lopez to the authorities in October of 2016, saying they suspected him of stealing the money. Officials attempted to contact him, to no avail, and eventually put out a warrant for his arrest.\n" +
                "Despite the warrant, and numerous attempts to contact him through phone calls and scheduled appointments, he refused to cooperate with police. Lopez managed to evade arrest for over a year.\n" +
                "Then, in December 2017, police got an unusual break in the case which led to some funny news headlines. Lopez himself had applied for a job with the very police department he had spent a year evading. During a routine background check, which the department performs on all applicants, the arrest warrant popped up.\n" +
                "After probable cause had been determined, police invited him down to the station, where they had staged a faux interview. When Lopez arrived, expecting a job, the officers arrested him for felony theft instead. Safe to say, Lopez is officially out of the running for a job with the department.", "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/01/alberto-lopez-theft.jpg", jenn, "2019-04-12", Category.POLITICS, Region.STRATHCLYDE);
        articleRepository.save(article5);


    }
}
