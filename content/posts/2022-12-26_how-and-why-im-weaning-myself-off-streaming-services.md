---
title: How and why I'm weaning myself off streaming services
date: 2022-12-26T23:00:07.139Z
description: Streaming does not support the artists I love, so I'm trying something else.
leadImage:
  image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1672096154/ben-szymanski-jRZGUdc4DRQ-unsplash_jnrnec.jpg
  caption: "Photo by Ben Szymanski on Unsplash   "
  alt: "An orange iPod mini sitting on the concrete in front of leaves and a
    pumpkin in an autumnal scene "
category: Music on the internet
---

The first song I downloaded illegally was blink-182's ["Man Overboard"](https://www.youtube.com/watch?v=-6WmSZyDysA), a studio cut released as part of the promotion for their live album, 2000's _The Mark, Tom, and Travis Show (The Enema Strikes Back!)_. I was 9, and I downloaded it on Napster. My mom was very upset with me, not because of the illegal download, but because Mark Hoppus sang the line, "'Cause in the end, it's fucking useless."

Regardless, I was hooked. I spent the next decade of my life downloading music incessantly, moving from peer-to-peer networks like Napster and Soulseek to file sharing sites like Mediafire and Megaupload. I filled my iPods to the brim and carried 100GB's worth of mp3s with me to college on an external hard drive. And I built a terrible habit of not paying artists for their work. This year, I wanted to change that.

In short, I'm using [Roon](https://roonlabs.com/) as a personal music server that I can access anywhere. The rest of this post details why it's the right thing for me, and how I set it up.

## Why streaming isn't the answer

Today, streaming services dominate music consumption. [A 2021 CBS News poll](https://www.cbsnews.com/news/streaming-tops-radio-as-the-top-way-to-listen-to-music/) found that 41% of Americans, and the majority of young people, use streaming services to listen to music. Streaming services like Spotify pitch themselves as the legal, ethical alternative to file sharing. You get easy access to music, the artists get paid.

However, streaming is a false messiah. Calculating an accurate "payment per stream" on a service like Spotify is nearly impossible, but the number is miniscule. [This Pudding essay](https://pudding.cool/2022/06/streaming/) does a great job explaining why. Suffice to say, most artists get paid so little through streaming that it makes little improvement over file sharing on the economic conditions for artists.

## Why we must match the convenience of streaming

What streaming has delivered is the ultimate experience for music listeners: nearly all of the world's music, instantly accessible on all devices, for the price of one CD per month. The technological progress streaming services have made — in tandem with the hardware manufacturers of smart speakers, phones, TVs, cars, and more — is undeniable. And the ability to easily try new music before you buy is a win for the listener.

It's easy to stake some moral high ground and simply demand people buy all their music to support artists. But any movement to tilt the scales back in artists' favor has to contend with the convenience streaming music has introduced. Maintaining a collection of CDs, vinyl, or digital files is far more cumbersome than just using Spotify.

An ethical, modern music collection needs the following features to compete:

1. A well-supported app ecosystem that ensures I can play music anywhere I am, through any device I might own
2. The ability to seamlessly switch between "try" and "buy", between streaming music I don't own and playing music I do own
3. The ability to import music files from many sources
4. A matching service for file metadata
5. Some stats. Spotify Wrapped makes me jealous.

## Introducing Roon

![A screenshot of Roon's "In their prime" career summary feature, showing David Bowie's career](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1672096339/how_roon_works-get_started-laptop-1_w2iopm.png)

For those willing to do a little extra work, [Roon](https://roonlabs.com/), a suite of music software aimed at audiophiles, hits all of these marks. This fall, I built myself a Roon server to manage my music collection, and I couldn't be happier. But it is complicated software to understand and set up, so I'm going to explain how Roon meets the needs detailed above and how I set it up.

Roon is more complicated than a streaming service. At its most basic, Roon is a music server. You install it on a computer and let it run on that computer at all times. Roon makes itself accessible on your local network so that any network-connected device can play music off of the server. Roon calls this your "Roon Core." You can run Roon Core on Windows, Mac, or Linux.

Roon also provides apps for Windows, Mac, Linux, iOS, and Android that let you access your Core on your network and control it. Roon calls this "Roon Remote." From your Remote, you can play audio on the remote device itself, but you can also control other network devices. Roon has a protocol called "[Roon Ready](https://roonlabs.com/partners)" that allows it to talk with select network players, but it also works with any Chromecast, Airplay or Sonos devices on your network. You can even setup multi-room playback across all those different services. It's pretty powerful.

## Feature one: access anywhere

Roon goes much further than local network access. Most appealingly for our needs, Roon can also set your Core to be accessible to the outside world. You can then use another mobile app, [Roon Arc](https://apps.apple.com/app/roon-arc/id1555549544), to access your Core from anywhere you have an internet connection. That means your Roon Core serves as your own personal streaming server, making your personal music collection just as accessible as your Spotify account.

(Technical sidenote: [Roon uses either UPnP or manual port forwarding for this](https://help.roonlabs.com/portal/en/kb/articles/arc-port-forwarding#Confirm_that_automatic_configuration_is_enabled). You can decide for yourself whether you're comfortable with a server being accessible on your home network in this way. I set up manual port forwarding on my router. I'd encourage you to read [this thread](https://community.roonlabs.com/t/security-with-roon-arc-roon-2-0/206917/35) on the Roon forums for more info.)

![A screenshot of Roon's audio device setup page](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1672096493/Screenshot_2022-12-26_at_6.14.35_PM_fmspcx.png)

By setting up a Roon Core, you can access Roon on your own network via Roon Remote, which can send music to any Airplay, Chromecast, Sonos, or Roon Ready-connected device on your network. Then, by using Roon Arc, you can access your Roon Core from anywhere you have an internet connection: in the car, on the train, even at your friend's house when they hand you the aux. For times you're not online, like on a plane, you can download files via Arc from your Core directly to your phone for offline listening. This satisfyingly solves our first necessary feature: a well-supported app ecosystem that ensures I can play music anywhere I am, through any device I might own. I wish the Remote app and Arc app were just the same thing, but it's not too cumbersome.

## Feature two: try before you buy

Roon can access music via two different routes: a locally connected hard drive or a streaming service. Yes, Roon works with streaming services, specifically [Tidal](https://tidal.com/) and [Qobuz](https://www.qobuz.com/us-en/discover). As Roon is audiophile-focused software, they've focused on streaming services where you can stream hifi audio. Tidal and Qobuz don't have quite the library coverage of a Spotify or Apple Music, but they get pretty damn close. I use Qobuz in tandem with Roon.

Thus, within the same application, you can try before you buy. Roon seamlessly integrates your local files with either or both of the streaming services you have an account with. This satisfies our second necessary feature: the ability to seamlessly switch between "try" and "buy".

## Feature three: import my files

By simply integrating with external USB storage, you can bring files from any source. Roon mounts any storage connected to the Core as a network drive, so you can connect via SMB and add the music yourself. I admit, this is a bit cumbersome. I wish Roon could provide a form through the remote UI where I could choose files on my local machine, and it would handle the upload process for me. But it works well enough to satisfy necessary feature #3: the ability to import music files from many sources.

## Feature four: match metadata

Once I have gotten the new files to my Roon Core, it will attempt to match metadata for you against its own database. In my experience so far, it has found a match 100% of the time. You do have to click through some manual UI for each individual album to get there, and I wish this process was a little more seamless. Still, I didn't have to edit ID3 tags manually like it was 2005, so this is a win for me. Consider feature #4 satisfied: A matching service for file metadata.

## Feature five: show me stats

![A screenshot of Roon's homepage, showing that I have 547 artists, 1,074 albums, 12,915 tracks, and 9 composers saved to my library.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1672096610/Screenshot_2022-12-26_at_6.16.29_PM_ijpjky.png)

To satisfy feature #5, showing me some stats about my listening, Roon goes above and beyond. To start, Roon's UI is _beautiful_. It is my favorite music player I have ever used, surpassing even the dearly departed Rdio. Yes, it does the basic stats well. It'll tell me, week by week, who I listened to the most, and roll that up into telling me what genres of music I spent the most time with.

![A screenshot of Roon's interface telling me what I've been listening to in the last year](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1672097742/Screenshot_2022-12-26_at_6.35.08_PM_yoipjf.png)

But Roon does far more than that. It has an enormous database of music knowledge and matches your library to it. It can trace cover versions back to the original source. It knows who produced, mixed, and mastered your music. It can tell you, for example, that legendary mastering engineer [Greg Calbi](https://en.wikipedia.org/wiki/Greg_Calbi) has mastered 47 albums in your library. Then, you can go to Greg Calbi's page, and it'll pull his Wikipedia bio for you, and you can browse his entire discography (thousands of albums!) via streaming. And that's just one of many rabbit holes you can go down. It's a treasure trove of knowledge, and I've already learned more about the music I love.

![A screenshot of Greg Calbi's Roon page](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1672096726/Screenshot_2022-12-26_at_6.18.21_PM_t9ch7c.png)

There are so many little details I love about Roon's UI (and a couple that drive me nuts), but this blog is getting too long already, and I have a few more points to hit.

## My Roon setup

The hardest part of getting started with Roon is setting up the Core. You need a computer that can run Roon at all times and stay connected to your network (preferably via ethernet). For this reason, I don't recommend using your everyday laptop. Thankfully, Roon Core doesn't use much power and can run on Windows, Mac, or Linux, so you can use an older computer if you have one around. You can read the system requirements, but generally you'll need 8GB of RAM, an SSD, and at least an Intel i3 processor.

I felt like making it a little harder on myself, so I used a special Linux distro Roon built called [ROCK](https://help.roonlabs.com/portal/en/kb/articles/roon-optimized-core-kit#So_what_is_Roon_Optimized_Core_Kit_ROCK_then). ROCK is built to install on an [Intel NUC](https://www.intel.com/content/www/us/en/products/details/nuc.html), an affordable mini-PC. [Roon will point you to the correct NUC model to buy](https://help.roonlabs.com/portal/en/kb/articles/roon-optimized-core-kit#What_hardware_does_ROCK_run_on), along with matching RAM and SSD; I followed their advice. Make sure you also have a small thumb drive around to install the OS.

Once all that arrived, I assembled my NUC by installing the RAM and SSD. Then, I followed [Roon's docs](https://help.roonlabs.com/portal/en/kb/articles/rock-install-guide#1_Prepare_your_NUCs_hardware) for installing ROCK. It entailed setting up the NUC BIOS to boot from the SSD, flashing ROCK from a separate USB drive to the SSD, and install ffmpeg on the server. It took a few tries, and my NUC's BIOS settings ended up not matching the Roon docs exactly (namely, I couldn't set up the boot order properly until I had flashed ROCK to the SSD), but once I got it working, I haven't had to touch my NUC since. It's been running for nearly two months without interruption.

I have a 1 GB external [Western Digital SSD](https://www.westerndigital.com/products/portable-drives/wd-my-passport-usb-3-2-ssd#WDBAGF0010BGD-WESN) connected to the NUC for music storage, and I have the NUC setup next to my router, connected via ethernet.

In the same room, I have a home theater/listening room setup, and all of that is powered by a [Bluesound Node](https://www.bluesound.com/products/node/). The NUC is connected to the Node via Ethernet. The Node also accepts connections from my TV via HDMI, and my turntable via the analog input. Then, I send those signals to a pair of powered Genelec monitors and an SVS subwoofer. I might talk about designing that room in a separate post.

Roon can also connect to other devices on the network, including my laptop's standard output, my phone, and any Chromecast/Airplay-enabled device in my house. So anywhere music plays in my house, Roon controls it. When I leave the house, I use Roon Arc to access my core and stream music through my phone.

## How I try and buy music

Remember, the point of all this was to build a more ethical way of listening to digital music. There is no cheap streaming service that will suffice. You have to buy the music. I buy in a few different ways:

1. **[Bandcamp](https://bandcamp.com/)**: Despite [my criticism of Epic Games' purchase of Bandcamp](https://www.tylerjfisher.com/blog/post/2022/03/22/epics-purchase-of-bandcamp-leaves-independent-music-in-the-cold), it remains the best place to buy music on the internet. These days, most of the music I listen to is there, though they don't have most major artists. If you listen to independent music of any kind, they're probably on Bandcamp now. Once you purchase on Bandcamp, you can download the files and send them to your Roon server.
2. Vinyl: I still love buying vinyl and collecting it. Now, with Roon, I can rip my vinyl to digital files and preserve it on my Roon server. Admittedly, I haven't done this yet! But my turntable has a USB output and I plan to do it soon once I make sure my turntable is properly setup to get a high-quality rip.
3. [Qobuz store](https://www.qobuz.com/us-en/shop): Qobuz, one of the streaming services that connects to Roon, maintains its own store of hi-fi audio. For everything that isn't on Bandcamp, I tend to go to Qobuz. Once you purchase on Qobuz, you can download the files and send them to your Roon server.

Because of Roon's Qobuz integration, I also maintain a Qobuz streaming account. This is how I try music. Any new music I want to listen to, I search for in Roon, and it finds that music on Qobuz. I can listen through Roon, and it all gets tracked through the same system as my purchases. I can even add it to my library so it connects to the graph database. If I like it, I put it on the list to buy.

Admittedly, I haven't bought all my music yet. I have 1,000 albums saved in Roon, and the vast majority of them are streamed via Qobuz. I have been listening to music for free/cheap for decades, so I have a lot of buying to do. It will take me a long time. But with Roon, I have a system to do so that works anywhere I go.

Nothing about this setup is cheap. I bought a whole separate computer for my Roon server, which ran me about $500. Roon has a fee of $15/month. My Qobuz account is $10/month. On top of that, I'm buying a lot of music. That doesn't even get into the unnecessary hifi system I built myself. This does not solve any problems for the 2022 version of 9-year-old me downloading "Man Overboard" on Napster who would rather do things more ethically.

But for someone with the means, privilege, and technical knowledge to build a system like this, it is deeply satisfying to know you're doing what you can to support the artists you love.
