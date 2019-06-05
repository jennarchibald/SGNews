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

        Article article6 = new Article("French tourist's appeal after camera full of topless snaps lost on Skye", "French tourist Lily Mika, 26, has made an appeal to find her lost camera that she left at a rest stop near Sligachan, Skye last week - which is packed full of topless photos of herself.", "A French tourist visiting Britain has appealed for help to find a missing camera - which is packed with racy pictures of her.\n" +
                "Travel blogger Lily Mika lost the camera with the precious snaps while visiting the Isle of Skye for a three-day break last week.\n" +
                "Lily, from Picardy, France, has been trying to raise awareness of breast cancer by taking topless pictures with the Lumix GX80 at beauty spots around the world.\n" +
                "And the 26-year-old is now calling on kindhearted Scots to help reunite her with the camera, which she left at a rest stop near Sligachan, Skye last Thursday.\n" +
                "She said: \"I was so impressed with the kindness of Scottish people that I am sure that the people who found my camera are willing to give it back to its owner.\n" +
                "\"The topless picture is not for catching attention, they are the reason I want to do everything to find my camera.\n" +
                "\"All of this is not about the money, the pictures inside are very important for me.\n" +
                "\"I'm taking artistic topless pictures in the most beautiful places that I visit.\n" +
                "\"My goal is to publish a book with these pictures to empower women, encourage them to become more free and confident and to do what they want.\n" +
                "\"I also want to raise awareness about breast cancer.\n" +
                "\"My grandmother had to fight against it, which is the reason why I chose to do topless pictures.\n" +
                "\"I took beautiful pictures for the project in Scotland and desperately want them back.\n" +
                "\"Pictures of my travels with my Grand Pa and with my boyfriend are also in the camera and it would mean the world to me to have them back.\n" +
                "\"I want the pictures to be able to add them to the book as I loved Scotland and I want to include the country in the book.\"", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4933508.1558630410!/image/image.jpg", grant,  "2019-05-23", Category.ENTERTAINMENT, Region.HIGHLANDS);
        articleRepository.save(article6);

        Article article7 = new Article("Goat pilates: everything you need to know about Scotland’s new fitness class", "If you're looking for something different in your workout, baby goats might just be the answer.", "Goat yoga is all the rage in America, and now it has made its way across to Scotland.\n" +
                "\n" +
                "Thanks to this fitness class on this Scottish farm, now you can you book in for some pilates with pygmy goats.\n" +
                "\n" +
                "Baby goats and pilates?\n" +
                "\n" +
                "At Bellcraig Farm in Fife, the unusual exercise class has taken off, mixing pilates and pygmy goats.\n" +
                "Jo Munro is the organiser at the heart of bringing the American craze to Scotland. Having experienced the unusual activity first-hand in the US, she knew straight away that she needed to bring it home with her.\n" +
                "“I went to California last year and it’s massive there so I went and tried it and thought I have to bring this back to Scotland,” said Jo.\n" +
                "Having offered the classes for a few months, it’s clear to see that people who have tried it out love it.\n" +
                "“We have been doing it for a couple of months now and it has been really popular with fully booked classes,” explained Jo.\n" +
                "“Goat pilates is something everyone has seen on YouTube and I think you either love it or hate it.”\n" +
                "\n" +
                "How is it different to regular pilates?\n" +
                "\n" +
                "The class starts out the way a regular fitness class would, with a warm up - except you’ll have two little goats wandering around named Mabel and Hazel.\n" +
                "When the class gets started, be prepared to have a goat hop up on your back.\n" +
                "“It's not sore but the goats are reasonably heavy so it does make it more challenging,” explained Jo. For that reason, the class is perfect for anyone looking to upgrade their workout.\n" +
                "“The kids are quite agile and nimble so it can be like a massage with their hooves, but you wouldn't want it on your bare skin,” continued Jo.\n" +
                "A kid is another name for a baby goat, and - according to Jo - they add an extra element to the pilates workout.\n" +
                "“If you are holding a plank with a 10kg goat on your back it is going to be much harder,” she said.\n" +
                "‘Complete hilarity’\n" +
                "The goats aren’t just there to make you work up a sweat.\n" +
                "“There is an animal therapy side to it. You let you endorphins that make you feel good, like when you pet an animal,” explained Jo.\n" +
                "“It is complete hilarity and it makes everyone really happy and they leave on a high feeling really joyful.”\n" +
                "Benefits of working out with animals?\n" +
                "According to the goat pilates website, there are a variety of positive effects that exercising with animals can bring, including:\n" +
                "- Promoting relaxation\n" +
                "- Bringing down anxiety levels\n" +
                "- Lowering blood pressure\n" +
                "- Promoting joyful feelings and the release of happy hormones like serotonin\n" +
                "And that’s not even taking into account the physical benefits of pilates.\n" +
                "After class you’ll also get the chance to get up close with the other animals that live on the farm.\n" +
                "If you’re interested in participating in a pygmy goat pilates class, you can book your spot in the class on their website.", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4940592.1559646094!/image/image.jpg", jenn, "2019-06-23", Category.HEALTH, Region.LOTHIAN);
        articleRepository.save(article7);

        Article article8 = new Article("Edinburgh scientists discovers DNA mutation link to dog breathing problems", "A DNA mutation linked to breathing problems in popular dog breeds has been discovered by scientists.", "Breathing difficulties are often associated with flat-faced breeds, but experts have found that the mutation is also carried by a breed that has proportional noses.\n" +
                "\n" +
                "Scientists believe the finding could raise the prospect of genetic tests to identify at-risk animals and help breeders avoid producing affected pups.\n" +
                "\n" +
                "Breeds such as French and English bulldogs and pugs are commonly affected by a condition called Brachycephalic Obstructive Airway Syndrome (BOAS), which leaves dogs gasping for breath.\n" +
                "It was thought that their short faces were the only explanation for their breathing problems, but Norwich terriers - which have proportional noses - suffer from a similar breathing problem called Upper Airway Syndrome.\n" +
                "A team led by The Roslin Institute at the University of Edinburgh's Royal (Dick) School of Veterinary Studies, studied DNA from more than 400 Norwich terriers, while vets carried out clinical examinations.\n" +
                "The researchers pinpointed a DNA mutation in a gene called ADAMTS3, which is not linked to skull shape and has previously been found to cause fluid retention and swelling.\n" +
                "\n" +
                "The mutated version of the gene was also found to be common in French and English bulldogs, which the team said may help to explain why those breeds can develop breathing problems and complications after surgery to treat them.\n" +
                "The institute's Dr Jeffrey Schoenebeck, who led the study, said: \"BOAS is a complex disease. Although skull shape remains an important risk factor, our study suggests that the status of ADAMTS3 should be considered as well.\n" +
                "\"More studies are needed to dissect the complex nature of this devastating disease.\"\n" +
                "The study, published in PLOS Genetics, also involved experts from the Royal Veterinary College and the University of Bern in Switzerland.", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4928487.1558022826!/image/image.jpg", grant, "2019-05-15", Category.SCIENCE, Region.LOTHIAN);
        articleRepository.save(article8);

        Article article9 = new Article("Tourists are throwing Haribo into Loch Ness in an attempt to find Nessie", "Could this be the way catch Nessie once and for all?", "Loch Ness is one of Scotland's most iconic landmarks, and mention of it often prompts a much debated question - does the Loch Ness Monster exist?\n" +
                "\n" +
                "For those who say yes, the next question is often, ‘How do we find it?’\n" +
                "\n" +
                "Some German tourists think they have the answer.\n" +
                "\n" +
                "Capturing Nessie with Haribo?\n" +
                "Thanks to a German advert for Haribo, which aired last year, copycat tourists think they have the solution to finding Nessie.\n" +
                "And now German holidaymakers have been spotted throwing the sweet treats into the loch.\n" +
                "\n" +
                "The advert shows a tour guide and his troupe gathered by Loch Ness, with some bagpipes playing in the background. The tour guide has his binoculars out, clearly hoping to impress his crew with a sight of the elusive creature, but unfortunately he can see nothing but water.\n" +
                "Suddenly, he has an idea and grabs a bag of Haribo, which he distributes into a bowl and offers amongst his patrons.\n" +
                "Looking to show off, the tour guide then tosses a sweet into the air, going to catch it in his mouth when suddenly Nessie emerges behind him and snatches it out of the air. The crowd looks on in awe and as quick as she came, the monster disappears again.\n" +
                "Real or fake?\n" +
                "\n" +
                "The Loch Ness monster has been the fascination of monster hunters around the globe and the discussion over its existence has never been settled.\n" +
                "\n" +
                "The first sighting of Nessie dates back to 565 AD. She reportedly emerged from the waters of Loch Ness and grabbed a servant before retreating into the water. This account was written in the Life of St Columba by Adomnn, which was written in the sixth century, AD.\n" +
                "The most famous alleged photograph of the monster was taken in 1933, but this was later revealed to be a hoax.\n" +
                "The hope of catching a glimpse of the famous monster is what brings scores of tourists to the shore of Loch Ness and reports of sightings are ever growing, with 2017 marking a record year for supposedly spotting Nessie.", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4932518.1558536488!/image/image.jpg", hamish, "2019-05-22", Category.EDUCATION, Region.HIGHLANDS);
        articleRepository.save(article9);

        Article article10 = new Article("Lewis Capaldi dubbed ‘king of Glasgow’ after face appears on Duke of Wellington statue", "A Lewis Capaldi fan with a head for heights has performed the ultimate face swap on Glasgow’s most famous equestrian landmark.", "One individual scaled the city’s Duke of Wellington statue - which is almost permanently topped with at least one traffic cone - to decorate it with a cut-out of the chart-topping singer’s face.\n" +
                "\n" +
                "Images of the new-look duke made their way to Lewis Capaldi himself, who shared them with his army of Twitter followers on Thursday.\n" +
                "\n" +
                "A delighted Capaldi, whose single Someone You Loved recently occupied the UK number for seven straight weeks, expressed his gratitude for the effort.\n" +
                "He tweeted: “Someone’s put ma face on the Duke of Wellington statue. Glasgow a f*****g love ya.”\n" +
                "\n" +
                "Responding to the tweet, one fan wrote the singer was now the ‘king a Glasgow’, while another asked if it was an unusual style of album promotion.\n" +
                "\n" +
                "The statue-scaling fan’s bold homage, which is accompanied by two traffic cones, appears just hours before Capaldi’s debut album hits shelves at midnight tonight.\n" +
                "Entitled Divinely Uninspired To A Hellish Extent, the hotly-anticipated album is already the most pre-added on Apple Music in the UK of all-time with more than 113,000 pre-adds as of Wednesday.\n" +
                "The 22-year-old, who hails from Bathgate, West Lothian, has a big following in Scotland’s biggest city - evidenced by how quickly he managed to sell out two nights at the SSE Hydro after tickets went on sale last month.", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4928424.1558028649!/image/image.jpg", ben, "2019-05-16", Category.POLITICS, Region.STRATHCLYDE);
        articleRepository.save(article10);

        Article article11 = new Article("Escaped emu on the loose in Dumfries and Galloway", "The 4ft bird escaped through a hole in the fence at Burnfoot Care Home in Ecclefechan. ", "An emu has been on the run for more than 24-hours after escaping during a visit to a care home in Dumfries and Galloway.\n" +
                "The male bird, which stands 4ft tall, was brought to visit elderly residents, along with a female emu.\n" +
                "\n" +
                "But since it escaped through a hole in the fence at Burnfoot Care Home in Ecclefechan, Dumfries and Galloway yesterday, there have been no sightings of it.\n" +
                "\n" +
                "The emu vanished at 3pm, and as it can run at speeds of 35mph, it could have covered a wide expanse of land.\n" +
                "\n" +
                "Dennis Agnew, 52, a groundsman at the care home, brought the emus to visit as it is believed visits from animals help dementia sufferers.\n" +
                "Mr Agnew said: “I bought two emus, male and female, a couple of days ago and I brought them to the home.\n" +
                "“But yesterday one disappeared.\n" +
                "“As it is 4ft high, you can’t miss the thing - it’s a big grey bird.\n" +
                "￼\n" +
                "“I went through the woods and I still can’t find it.\n" +
                "“The Burnfoot Care Home is an old folks home and the animals help them with their dementia.\n" +
                "“It’s there somewhere, I just don’t know where.\n" +
                "“It’s a big bird but they are really quick, they can run at about 35mph.\n" +
                "\n" +
                "“It must have gone through a hole in the fence.\n" +
                "\n" +
                "“I just need someone to phone and tell me where it is and I’ll get it.”\n" +
                "The emu is the second-largest living bird by height, after its relative, the ostrich.\n" +
                "They can grow up to 2m tall and can live between ten and 20 years in the wild.\n" +
                "Mr Agnew added: “I’ve had to take the female one back to the farm because it looks unsettled.”", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4929621.1558105974!/image/image.jpg", ben, "17-05-2019", Category.BUSINESS, Region.BORDERS);
        articleRepository.save(article11);

        Article article12 = new Article("Hugh Jackman gives homeless man £100 and dinner offer on visit to Glasgow", "The Australian film star was in Glasgow for his recent three night performance at the SSE Hydro.", "The movie star was spotted by a stunned eye witness\n" +
                "Hugh Jackman was spotted giving a homeless man £100 in Glasgow on Sauchiehall Street.\n" +
                "\n" +
                "What happened?\n" +
                "\n" +
                "An eye witness to the kind deed, who asked not to be named, told The Evening Times , “At first I didn’t even notice it was him as he was wearing a cap but I stopped and saw him put all these notes in this homeless guy’s hands.”\n" +
                "Amazed by the encounter, the woman added, “It wasn’t until I heard his accent and looked closer that I recognised him. I heard him chatting to the homeless man about his life and then he asked him to go with him for a meal.”\n" +
                "Jackman offered to take the gentleman for dinner at The Blythswood, a five star hotel in Glasgow.\n" +
                "“The guy was laughing, saying he wasn’t well-dressed enough,” the eyewitness said.\n" +
                "\n" +
                "Jackman reportedly shook the mans hand and left, which is when she approached the homeless man to discuss what just happened.\n" +
                "“He counted the money and said, ‘He’s given me £100’ and looked like he was ready to cry. I felt like crying after it as well and I have huge respect for Hugh,” she said.\n" +
                "Why was Hugh Jackman in Glasgow?\n" +
                "Jackman has been performing his new tour - titled The Man. The Music. The Show. - around the globe. It features Jackman performing hit songs from his own film career, including The Greatest Showman and Les Miserable, as well as other classics from broadway and cinema.\n" +
                "￼\n" +
                "The 50 year old star is also accompanied by a live orchestra, singers and dancers.\n" +
                "\n" +
                "Following his Scottish performances, Jackman is now jetting off to Germany for the next leg of the tour.\n" +
                "He’ll be returning to the UK in the coming months for shows at venues including the Manchester Arena, The Resorts World Arena in Birmingham and the O2 in London.\n" +
                "You can keep up to date with details of the tour on the shows website.", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4925885.1557742358!/image/image.jpg", hamish, "2019-05-13", Category.EDUCATION, Region.STRATHCLYDE);
        articleRepository.save(article12);

        Article article13 = new Article("Beltane Fire Festival 2019: Around 8,000 revellers head for Edinburgh's Calton Hill for spectacular show", "It is the wild celebration that heralds the start of summer in Edinburgh – with a heady mix of fire, drums, costumed performers and dramatic storytelling.", "A 300-strong cast brought ancient Celtic traditions to life as the annual Beltane Fire Festival took over Calton Hill for the night.\n" +
                "\n" +
                "Beltane 2019. PIC: Ian Georgeson Photography\n" +
                "Beltane 2019. PIC: Ian Georgeson Photography\n" +
                "\n" +
                "Up to 8000 revellers, many of them tourists, watched the cavalcade of colourful characters mark the changing of the seasons in style on a dry and relatively mild night for the scantily-clad performers.\n" +
                "\n" +
                "Billed as “an alternative May Day celebration”, the festival saw throngs of crowds follow the journey of the May Queen, the Green Man and their followers around the hill before a grand finale around 12.30am as the ritual bonfire was lit.\n" +
                "\n" +
                "The goddess-like figure, who brings the Green Man back to life once he has shaken off the “last vestiges” of winter, was given a makeover this year as part of a bid by the event to tackle climate change concerns.\n" +
                "\n" +
                "READ MORE: The ancient rituals of the Beltane festival in Scotland\n" +
                "\n" +
                "Wearing a costume of recycled materials depicting oil spills, pesticides and deforestation, the “ordinarily stoic” May Queen, played by Katie O’Neill, expressed rage at the damage being done to the planet as the four-hour performance unfolded shortly after 9.30pm with the lighting of the first flaming torches and the dramatic roll of drums heralded the arrival of the \"Devine Femine\" at the centre of the performance..\n" +
                "\n" +
                "Speaking before the show, O'Neill said: “The May Queen’s story and character this year is quite different from the past. When she rises out of the Acropolis on Calton Hill she is not the flowery goddess she has always been. She is really angry, looks down at her dress covered in oil spills,\n" +
                "\n" +
                "\n" +
                "pesticides and deforestation and is enraged. She wants to call war.\n" +
                "\n" +
                "“But she comes out of her state of anger, which is ultimately from a place of fierce love for the Earth and her children. Her story is one of alchemy and of taking that anger and turning it into joy.”\n" +
                "\n" +
                "The modern-day Beltane, which is said to be the biggest event of its kind anywhere in the world, was first staged in 1988, but can trace its roots as an agricultural festival back to the Iron Age.\n" +
                "\n" +
                "Although based on celebrations marking the “return of the fertility of the land,” when livestock would have been put out to pasture, the festival draws on a variety of historical, mythological and literary influences.", "https://images-e.jpimedia.uk/imagefetch/w_700,f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4918318.1556699306!/image/image.jpg", jenn, "2019-05-01", Category.EDUCATION, Region.LOTHIAN);
        articleRepository.save(article13);

        Article article14 = new Article("cottish farmer pranks tourists by claiming sheep are tartan because they drink Irn-Bru", "A cheeky farmer is winding up American tourists by spray-painting her sheep tartan - and claiming it’s caused by the animals drinking Irn Bru.", "Owner Maxine Scott, 62, used her skills with a spray-can to brighten up ewes April and Daisy.\n" +
                "\n" +
                "Bright red tartan sheep loving their new coats at Auchingarrich Wildlife Centre, Perthshire. \n" +
                "\n" +
                "She puts up a sign pretending the sheep turn that colour naturally and the wool then used to make tartan wool for kilts and blankets.\n" +
                "\n" +
                "They live on Auchingarrich Wildlife Centre, Comrie, Perthshire, and are decorated using marker spray, used by farmers to identify sheep during lamb numbering.\n" +
                "A sign on their pen explains that their diet consists of ‘mainly grass, but are known to enjoy Irn Bru and Scottish Tablet or shortbread’.\n" +
                "\n" +
                "Bright red tartan sheep loving their new coats at Auchingarrich Wildlife Centre, Perthshire. \n" +
                "\n" +
                "Maxine said: “When we got the park, they always had tartan sheep. It was just for the tourists.\n" +
                "\n" +
                "“We just continued the tradition. The public do like it - Americans are really impressed by them.\n" +
                "“We have got a sign up saying the lambs come out normal, but they change as they grow older and tartan starts to develop.”\n" +
                "The jokey sign explains: “A spectacular sight to see, tartan sheep were first discovered here at Auchingarrich many years ago.\n" +
                "“When sheared, their wool can be used to make tartan kilts, scarves and blankets.\n" +
                "￼\n" +
                "“As a lamb they will look similar to a regular sheep, as their colours won’t fully show until they are about a year old.\n" +
                "\n" +
                "‘Then as they get older their colours can change, so if you visit us again you may see a new tartan.”\n" +
                "Maxine bought the farm ten years ago, and has been decorating the sheep since then.\n" +
                "She added: “You can buy marker spray, if they are lambing or in a race you would mark them with spray to identify which is which, to tell if they have all been done.\n" +
                "“We tried hair dye, that worked quite well, but we’ve gone back to using the marker spray.\n" +
                "\n" +
                "“Certainly American visitors seem to think it’s funny.”", "https://images-e.jpimedia.uk/imagefetch/f_auto,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.scotsman.com/webimage/1.4912414.1555856245!/image/image.jpg", ben, "2019-04-21", Category.TECH, Region.CENTRAL);
        articleRepository.save(article14);


    }
}
