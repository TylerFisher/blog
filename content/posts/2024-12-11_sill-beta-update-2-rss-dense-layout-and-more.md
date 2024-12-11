---
title: "Sill Beta Update #2: RSS, Dense Layout, and more"
date: 2024-12-11T15:53:18.493Z
description: Sill gets closer to 1.0
leadImage:
  image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932449/Screenshot_2024-12-09_at_11.56.09_PM_ldrt8l.png
  alt: A screenshot of the new Daily Digest permalink route
  caption: A screenshot of the new Daily Digest permalink route
category: Sill
---
It’s been another great week! Another 500+ users have signed up since the last beta update, and [Sill](https://sill.social) is well on its way to a 1.0 release in the new year.

Today, I’m releasing a set of much-requested features that I’m really excited about, including RSS feeds, a dense layout option, and some navigation redesign. Let’s dig in!

## New Features

### Daily Digest updates: RSS, better permalinks, and more

*Daily Digests will be a paid feature after Sill’s beta period ends.*

Daily Digests — what I’m now calling the daily update you can get from Sill with your most popular links — are now accessible via RSS. To enable this, head to your [Daily Digest settings](https://sill.social/email) and change your Daily Digest delivery format to RSS. If you’re setting up your digest for the first time, make sure you select a delivery time as well. After you save, you’ll see an RSS feed link that you can copy and bring to the RSS reader of your choice.

![A two-panel screenshot of the Daily Digest settings page, with one panel pointing to the delivery format radio button group and the save button and another panel pointing to the RSS URL copy button.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932549/Screenshot_2024-12-10_at_10.27.31_PM_wa1q3h.png)

The RSS feed itself is a full-text feed. Here’s what it looks like for me in Reeder (the best RSS reader, if you’re on macOS or iOS).

![A screenshot of the Sill Daily Digest in Reeder](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932604/Screenshot_2024-12-09_at_11.53.11_PM_lh3jae.png)

RSS readers all handle images that are directly in RSS feeds a little differently, so I’m choosing not to show them in the full-text feed. However, every digest you get is linked to a new permalink route that sends you to a fully functional Sill web client for your day’s digest. This permalink route is also linked to throughout the email, if you continue to get your Daily Digest through email.

Speaking of the email, I made some significant design fixes. Most importantly, I fixed the image handling. My CSS for restricting the aspect ratio of the link images was not working in most email clients, so I committed some CSS crimes in order to get it to work properly. You should see fewer enormous images in your email now. I also narrowed the width of the whole digest so those images take up even less vertical space.

But what if you just don’t want to see any images, ever? Well, I have good news for you.

## A new “dense layout” option

Many people had asked for more information density in their Sill feeds. To solve this, I’m introducing the “dense layout” option for both the email and the web client. The dense layout removes images from links and tightens the spacing between links. In my testing, this gets roughly twice as much content on your screen at once. 

![A two-panel screenshot showing the difference between the default layout and the dense layout. The default layout shows the images for each story, while the dense layout does not. The dense layout also has tighter spacing between the stories.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932654/Screenshot_2024-12-10_at_10.35.17_PM_amq4wb.png)

In the web client, you’ll find the switch in the footer. On desktop, that’s on the bottom left of your screen. On mobile, you’ll need to open the hamburger menu (yes, that’s new too, see below!) in the top left, and then you’ll find it at the bottom of the menu.

![A screenshot of the desktop Sill UI, pointing to the layout switch in the lower left.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932750/Screenshot_2024-12-10_at_10.41.24_PM_man9hd.png)

![A two-panel screenshot showing where to find the Layout switch on mobile. The first panel points to the hamburger menu button in the top left. The second panel points to the layout switch in the menu at the bottom.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932714/Screenshot_2024-12-10_at_10.47.23_PM_tceo4s.png)

On the web, the layout switch works on a *per-browser* basis, meaning you can, for example, use the default layout on desktop where you have more space but use the dense layout on mobile.

You can also enable the dense layout in your Daily Digest email. To do so, head to your [Daily Digest settings](https://sill.social/email), select “Dense” in the layout section of the form, and click Save. Your next email should hide the images and present a denser layout.

Note that there is no layout configuration for the RSS feeds, since I don’t put images in the full text feed anyway. However, if you follow the link to the permalink route, the browser you open with will respect your layout preference on the permalink route.

## Redesigned navigation and filters

In the process of finding a place for the new layout switch, I ended up redesigning the whole navigation and filter UI. On mobile, I’ve removed the bottom bar navigation and moved all of the page-level navigation into a traditional hamburger menu. To expand it, tap the icon in the top left. You’ll find all the configuration pages, as well as the theme switcher and layout switcher, in the hamburger menu. To close the menu, tap anywhere outside the menu.

Taking the nav’s place in the bottom bar is a new filters drawer. Tap the filters button at the bottom of your screen to expand the filters. The filters function the same as before, but are now cleaner-looking dropdown menus rather than the bulky card-buttons from before.

![A two-panel screenshot of the mobile Sill UI, pointing to the filters button at the bottom in the first panel, and showing the expanded filters drawer in the second.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932941/Screenshot_2024-12-10_at_11.04.39_PM_s8yruc.png)

On desktop, I’ve used the newfound space in the right rail to keep the search bar and filters omnipresent. 

![A screenshot of the desktop Sill UI with the new, omnipresent filters UI in the right rail.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733932978/Screenshot_2024-12-10_at_11.05.50_PM_myaxf3.png)

## Fixes and tweaks

Technically, I released all these fixes already, but it’s worth noting these for posterity.

* Rewritten database schema: My initial pass at the database schema simply didn’t scale. I rewrote it (for the nerds: I denormalized) and immediately saw significant performance improvements across the board. I’m hoping this scales well into the future. This did cause [an issue with expanding posts](https://github.com/TylerFisher/sill/issues/29) later in the week that I’ve since addressed. If you’re still having trouble with that, try refreshing your cache.
* Removed Redis: It was causing more problems than it solved. If I have to do any job queueing again, I’ll just use Postgres for it.
* Improved link matching algorithm. I’m now removing the most common query parameters that have no effect on functionality, like UTM parameters. This still isn’t a perfect solution, but it helps. Also, this is not a retroactive fix, so it will take 24 hours before the full effects are seen in Sill.
* Properly handle newlines in Bluesky posts
* Display favicons next to the URL for easier scanning

## The road to 1.0

Next, I’m going to work on the notification system. Here’s what I’m thinking:

* Users will be able to configure notifications across several different dimensions: number of shares, source URL, keywords in the link and/or posts, specific accounts sharing, and more. Users can have as many notification types as they like and combine dimensions as they please.
* You will be able to get notifications via email or via RSS, just like the Daily Digest. I will have to put some maximum limit on the emails though, so someone doesn’t accidentally get 10,000 emails sent to them in a day or something.
* Notifications won’t be exactly real-time, but I’m going to speed up the account update process as much as I can so notifications go out in a timely manner. Hopefully I’ll be checking every 15 minutes or so, but we’ll see how it goes.

As always, thanks for reading and thanks for trying Sill. I’m always open to feedback about anything here or anything else. Email me at tyler@sill.social.