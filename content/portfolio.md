---
title: Selected Works
summary: >-
  I've worked at the intersection of journalism and technology for nearly a
  decade. In that time, I've built a lot of stuff. I'm still proud of some of
  it! This is a selection of some of my favorite projects.


  Nearly every project I've ever worked on has been a team effort. I love collaborating with people who make me better. Every project in this portfolio is a result of collaboration with amazing people.


  My role in most of these projects was as a full-stack developer. I make the product work.
projects:
  - title: Tiny News Platform
    description: "As a co-founder of the [Tiny News
      Collective](https://tinynewsco.org), I architected the Tiny News Platform,
      a complete publishing system built for small publishers. The Tiny News
      Platform innovates in a number of ways: it is a completely serverless
      publishing system using Google Docs as the text editor. It integrates
      directly with the [Letterhead](https://tryletterhead.com) newsletter
      platform and the [MonkeyPod](https://monkeypod.io) donation platform. And
      the front-end runs faster than most other local news websites you'll find
      on the internet."
    published_date: 2020-2022
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650499165/Screen_Shot_2022-04-20_at_7.59.15_PM_rwgaqg.png
      alt: Screenshot of the Tiny News Collective homepage
      caption: How does one encapsulate a publishing system in an image?
    url: https://harveyworld.org
    repo: https://github.com/news-catalyst/next-tinynewsdemo
    tech: Node.js, JavaScript, next.js, React, GraphQL, Hasura, Postgres, AWS
      Lambda, TailwindCSS
  - title: Table Stakes Challenge Tracker
    description: In collaboration with the American Press Institute, I architected
      and built a performance challenge tracking system for the [Table Stakes
      Local News Transformation Program](https://www.tablestakes.org/). The
      Table Stakes program puts news organizations through a rigorous
      methodology called Performance Driven Change, where teams undertake
      performance challenges in order to solve critical problems at their
      organizations. The Challenge Tracker allows the Table Stakes program to
      track the many performance challenges happening across the Table Stakes
      universe.
    published_date: 2019-2020
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650500928/Screen_Shot_2022-04-20_at_8.28.35_PM_ervytc.png
      alt: Homepage of the Table Stakes Challenge Tracker
      caption: Homepage of the Table Stakes Challenge Tracker
    repo: https://github.com/news-catalyst/django-challenge-tracker
    tech: Python, Django, Mailgun, Bulma
  - title: Politico Election Results
    description: As a member of the Politico Interactive News Team, I architected
      our 2018 election results loader. Using AP election results, we optimized
      the loading process to get results to our users as fast as possible,
      processing the entire nation's results set in seconds. This results system
      powered pages for [national
      overviews](https://www.politico.com/election-results/2018/house/) as well
      as [state-specific
      pages](https://www.politico.com/election-results/2018/new-jersey/). While
      getting results to our pages as fast as possible, the system also
      reconciled results into a Postgres database, where they could be joined
      with demographic data allowing us to perform a deeper analysis of results
      in real-time.
    published_date: November 2018
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650499680/Screen_Shot_2022-04-20_at_8.07.48_PM_lezioq.png
      alt: A screenshot of Politico's 2018 house results
      caption: This chart was more fun during the night.
    url: https://www.politico.com/election-results/2018/house/
    repo: https://github.com/the-politico/politico-civic
    tech: React, Redux, JavaScript, Python, Django, jq, bash, Django REST Framework
  - title: DIY Congress
    description: Prior to the 2018 election, we wanted our audience to predict their
      own outcomes of the election with the most information we could give them.
      DIY Congress offers a way to predict races not only on a race-by-race
      level but also on a demographic level. For example, you could see the
      results of the election if all highly educated districts that voted for
      Hillary Clinton in 2016 elected Democrats. Technically, this work required
      significant performance optimization in React and creative CSS layouts to
      build a smooth experience.
    published_date: October 2018
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650500281/Screen_Shot_2022-04-20_at_8.11.31_PM_kvv1u3.png
      alt: Screenshot of the DIY Congress interface
      caption: For nerds
    url: https://www.politico.com/election-results/2018/predict-congress/
    tech: React, Redux, JavaScript
  - title: Politico 2018 Race Ratings
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650500508/Screen_Shot_2022-04-20_at_8.21.35_PM_o4i2wm.png
      alt: A screenshot of the overall race ratings chart
      caption: A screenshot of the overall race ratings chart
    description: At Politico, we had a stable of election experts reporting on all
      the major races in the country. We launched Politico's first-ever race
      ratings system in order to make use of our in-house expertise. I built a
      custom Django-backed application allowing our editors to change race
      ratings and track changes to the ratings over time. Then, I created a
      slimmed-down dataset for use in our front-end application for users.
    published_date: Summer 2018
    url: https://www.politico.com/election-results/2018/house-senate-race-ratings-and-predictions/
    tech: JavaScript, React, Redux, Python, Django, Django REST Framework
  - title: Rain Forest Was Here
    description: On the NPR Visuals Team, I worked on a visual storytelling project
      called [Look at This](https://lookatthisstory.tumblr.com/tagged/stories/).
      We specialized in telling sequential visual stories that made people care.
      Rain Forest Was Here was the final Look at This project, an encapsulation
      of everything we learned on the project. I built the front-end application
      and reported on the history of both Brazilian and US deforestation
      projects.
    published_date: November 2015
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650501757/Screen_Shot_2022-04-20_at_8.41.49_PM_bfbkre.png
      alt: A screenshot of the home screen for Rainforest Was Here
      caption: A screenshot of the home screen for Rainforest Was Here
    url: https://apps.npr.org/lookatthis/posts/brazil/
    repo: https://github.com/nprapps/lookatthis/tree/master/posts/brazil
    tech: JavaScript, d3, unfortunately jQuery, LESS
  - title: How Well Can You Hear Audio Quality?
    description: >-
      On the heels of high-fidelity streaming becoming widely available, I
      created a short quiz with a simple premise: can you really hear the
      difference between low-quality and high-quality audio files? The quiz
      gives you three files playing the same snippet of a song: one at 128kbps,
      one at 320kbps, and one as an uncompressed WAV. Your job is to guess which
      one is the uncompressed WAV.


      This quiz was NPR's most successful digital content ever until the 2016 election. It proves a theory I have about internet quizzes: the most successful quizzes either prove to you how hard something is (like this quiz) or teach you something about yourself (like, say, the NYT dialect quiz). Spoiler: [you probably can't hear the difference](https://www.npr.org/sections/therecord/2015/06/09/412271433/audio-quality-quiz-results-you-did-slightly-better-than-guessing-randomly).
    published_date: June 2015
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650502189/Screen_Shot_2022-04-20_at_8.49.37_PM_vdbmun.png
      alt: Screenshot of the first question in the quiz
      caption: Listen to the bass.
    url: https://www.npr.org/sections/therecord/2015/06/02/411473508/how-well-can-you-hear-audio-quality
    repo: https://github.com/nprapps/graphics-archive/tree/master/2015/06/streaming-quiz-20150519
    tech: JavaScript, unfortunately jQuery, LESS
  - title: A Photo I Love Featuring Astronaut Reid Wiseman
    description: "On the Look at This project, we typically told two forms of
      sequential visual story. The most common was user-driven: users could
      determine when they moved to the next piece of content. But sometimes, we
      built audio-driven sequential visual stories. These play like web-native
      videos, where the audio file plays, and code triggers at different
      timecodes in the audio file to display new images, or, in this case, make
      new tweets bounce around the screen. This playful story about an astronaut
      taking photos of Earth was a perfect fit for the format."
    published_date: March 2015
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650503074/Screen_Shot_2022-04-20_at_9.02.36_PM_vnj6sb.png
      alt: Screenshot of the interface
      caption: Pretty sure this doesn't conform to modern Twitter display guidelines
    tech: JavaScript, unfortunately jQuery, LESS
    url: https://apps.npr.org/lookatthis/posts/spacepix/
    repo: https://github.com/nprapps/lookatthis/tree/master/posts/astroreid-loves/
  - title: SoundCite
    description: "It's hard to believe I built SoundCite as a student a decade ago.
      I had a simple idea: what if, when writing about music, you could just
      embed the snippet of music you're talking about with your text, instead of
      painstakingly trying to describe it in words. Even today, the SoundCite
      format is used for just that format, like in this [New York Times piece on
      guitar
      solos](https://www.nytimes.com/interactive/2022/04/02/opinion/grammys-roc\
      k-guitar-solo.html)."
    published_date: "2012"
    image:
      image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1650503293/Screen_Shot_2022-04-20_at_9.07.48_PM_ylmehc.png
      alt: A screenshot of an example SoundCite embed
      caption: A screenshot of an example SoundCite embed
    url: https://soundcite.knightlab.com/
    repo: https://github.com/nuknightlab/soundcite
    tech: JavaScript
---
