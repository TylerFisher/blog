---
title: "Sill Beta Update #1: Lists, Permalinks, more"
date: 2024-12-02T05:11:51.106Z
description: Some new features for Sill's public beta
leadImage:
  image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1732254117/Screenshot_2024-11-22_at_12.41.47_AM_huctxm.png
  alt: Sill's logo, with the tagline "Top news shared by the people you trust"
  caption: Really need to make some more social art
category: Sill
---
It's been an incredible week since Sill launched in public beta. Sill has nearly 4,000 users now, and Sill has been mentioned in [Nieman Lab](https://www.niemanlab.org/2024/11/remember-nuzzel-a-similar-news-aggregating-tool-now-exists-for-bluesky/), [The Verge](https://www.theverge.com/2024/11/24/24303359/surveilled-buy-now-documentaries-tech-dune-installer), [TechCrunch](https://techcrunch.com/2024/11/25/sills-new-app-rounds-up-the-best-links-from-your-bluesky-and-mastodon-network/), [Waxy.org](https://waxy.org/2024/11/sill-find-trending-links-from-your-bluesky-and-mastodon-network/), [The Changelog](https://changelog.com/news/122), [Lifehacker](https://lifehacker.com/tech/sill-app-links-in-bluesky-mastodon-feeds) and a lot more, especially natively on Bluesky and Mastodon. Thank you all for giving Sill a try and telling your friends!

Today, Sill is [live on Product Hunt](https://www.producthunt.com/posts/sill)! If you're a Product Hunt user, I'd love your support over there.

To kick off this week, I'm excited to announce some much-requested features are launching as the next phase of the beta process, including lists, permalinks for individual links, some redesigned navigation, and more.

## New features

Today I'm launching a set of new features that are among the most requested in the time since I've launched.

### Lists

*The list feature will be a paid feature after Sill's beta period ends.*

One of the most powerful features of both Bluesky and Mastodon is the ability to create custom lists and feeds. Sill can now collect links from any of your lists or feeds on Bluesky or Mastodon. To enable this, head to the connect screen and turn on the lists you're interested in. You will see all of the lists you have either created or subscribed to under each account you've connected in Sill.

![A screenshot of the lists UI in Sill](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116769/Screenshot_2024-12-01_at_10.01.23_PM_towgem.png)

When you enable a list in Sill, Sill will fetch links from the last 24 hours in that list immediately and continue to fetch links from that list going forward. Those links will be aggregated as part of your main feed in Sill and will go into your daily email if you have enabled the email. In the web client, you can also filter down to see just the links from an individual list.

![A screenshot of the filters UI in Sill with an arrow pointing to the new lists dropdown](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116796/Screenshot_2024-12-01_at_10.09.09_PM_isfmhi.png)

For Bluesky users, note that Sill's link collection works best with chronological feeds. Sill will stop fetching when it encounters a post more than 24 hours old. With algorithmic feeds like Discover, that can happen pretty quickly, so Sill might not pick up very many links.

On Mastodon, lists work differently. You can only add people you already follow to lists, so really, this is just another way of filtering your Sill feed down.

As always, give me your feedback on this feature. Does it meet your expectations? What else would you want from lists?

### Permalinks

Permalinks are accessible from the daily email, which will be a paid feature after Sill's beta period ends.

A key frustration in the initial Sill launch was the inability to see anything about the individual posts discussing a link in the daily email. I have solved this with permalinks. Starting after this launch, in the daily email you will be able to click on the "Shared by <n> accounts" language below each link.

![A screenshot of a link in a Sill email with language below that says "Shared by 3 accounts" that links to a permalink page](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116839/Screenshot_2024-12-01_at_10.19.22_PM_iad8uw.png)

Doing so will open a permalink route in the Sill web client where you can see all of the posts about a particular links.

![A screenshot of the permalink page, showing a link card and the three posts about the link](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116886/Screenshot_2024-12-01_at_10.17.26_PM_rnppqh.png)

Note that these permalinks are not shareable. They require being logged into Sill, and will only show you posts from accounts you follow.

### Customizable email options

The daily email will be a paid feature after Sill's beta period ends.

I've added a couple additional options for the daily email:

* You can now customize the amount of links you receive in an email. You can get anywhere from 1-20.
* You can hide reposts from counting in the email's calculation of your top links.

![A screenshot of the new email settings page, which allows you to hide reposts via a checkbox and use a slider to set the number of links you receive per email.](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116877/Screenshot_2024-12-01_at_10.22.23_PM_ow58fd.png)

To customize these options, visit the new(!) email settings page. What else would you like to customize in your email?

## Fixes and tweaks

* Redesigned navigation: You may have noticed in the screenshots above that I tweaked the navigation. The email settings now have their own page, and I've renamed "Home" to "Links" so it is clearer where to find that functionality.
* No more gifs: I am now filtering out any link that ends in .gif by default.
* Better link matching: I wasn't converting all links to lowercase before matching them. That's fixed now, so if someone capitalizes a letter in a link, it shouldn't matter.