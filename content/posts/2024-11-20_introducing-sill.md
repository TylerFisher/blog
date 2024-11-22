---
title: Introducing Sill
date: 2024-11-20T21:36:55.214Z
description: Sill streamlines your Bluesky and Mastodon feeds to give you a
  clear picture of what’s happening.
leadImage:
  image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1732254117/Screenshot_2024-11-22_at_12.41.47_AM_huctxm.png
  alt: 'A wordmark for Sill with the tagline: "Top news shared by the people you
    trust".'
  caption: I thought it had a nice magazine-y look, you know?
category: Sill
---
Today I’m excited to launch the public beta of [Sill](https://sill.social), my new social media tool. Sill connects to your Bluesky and Mastodon accounts and aggregates the most popular links in your network. (Yes, a little like [Nuzzel](https://daringfireball.net/linked/2021/05/05/nuzzel).)

## Sill Today

Today, Sill has a small but powerful feature set. Sill can:

- Connect to your Bluesky and Mastodon accounts and watch your home timeline for new links.
- Aggregate the links to show you the most popular links in your network and what people said about those links.
- Send you a daily email with your most popular links.
- Allow you to curate your links by muting phrases, domains, and accounts you don’t want to see.

This will remain the core feature set of Sill going forward. It also provides a strong foundation to build a powerful link-forward platform in the future. If this excites you, sign up for Sill now at [sill.social](https://sill.social).

Sill is an [open source project](https://github.com/TylerFisher/sill/), and I’m committed to keeping it that way. Theoretically, you can self-host Sill anywhere you can run a Docker container, though at scale, the infrastructure costs are considerable and I haven’t written nearly enough documentation. However, if you have some technical know-how and want to run Sill for yourself or a couple folks, it should work on small-ish machines.

## Sill in the future

I built Sill as a passion project, but I'd also like to keep it sustainable, which means making plans for revenue. While I am committed to always keeping the basic Sill web client free, once we exit the public beta period (likely early next year), I plan to launch some paid plans for Sill with additional features. These may include:

- Connecting multiple accounts from the same network
- Pulling in custom lists and feeds from your Mastodon/Bluesky accounts
- A customized email alert system where you can get notified when a link meets certain requirements that you define. Think of this as a Google Alert system built into Sill.
- Native apps (this is a very big maybe, I don't know if I have the capacity to support this)
- Account analytics. I'd love to show you the most popular news sources, most commonly reposted accounts, and other insights I can gain by analyzing the links your networks posts.

In addition to all of this, I may have a cheaper paid plan for the daily emails. Bulk email is expensive, so I may need to recoup my costs on that going forward.

## Why Sill?

As decentralized social media continues to grow, I believe it is important to build a strong ecosystem of third party tools that support these networks and embellish their functionality. Sill adds an important piece of that puzzle, a way to get the biggest stories from your networks *without* remaining glued to your feeds. Above all, Sill promotes a healthier way to use social media.

Philosophically, Sill prioritizes the link, a fundamental building block of the web that our overlord platforms have completely lost sight of. On Instagram, TikTok, YouTube, X, Facebook, and almost every other big social media platform, the link is deprioritized in favor of keeping your eyes on the platform at all costs. This has had disastrous consequences for journalism, art, and the fundamental connective nature of the web.

The link is what makes the web unlike any communication technology ever devised. A link opens a portal to another world. A link demonstrates trust. It's proof. A citation. In a world on the edge of post-reality, links are the way back.

So Sill is all about the link. It inverts the traditional social media paradigm of post over link to something that feels, to me, more natural. Posts about links are basically comments. We should read the link, then the comments.

## The technical details

Sill is built with [Remix](https://remix.run), [Postgres](https://www.postgresql.org), and [Redis](https://redis.io). I host the whole thing on a big server on [Latitude](https://www.latitude.sh). I was pretty inspired by Hadi Javeed’s [Docker Compose Anywhere project](https://www.hadijaveed.me/2024/09/08/does-your-startup-really-need-complex-cloud-infrastructure/) that gets you a really powerful single-server setup and gets you off the ground quickly. I’m a solo developer on this project, so every technical decision I made was in the name of technical simplicity.

Again, if you're interested in diving deeper, [Sill is open source](https://github.com/TylerFisher/sill/). You can self-host if you want, though you might have to do some digging in the code before I write full self-hosting documentation. The good news is it should run anywhere you can run a Docker container, so your deployment options are numerous. If you're planning to only use it for yourself, you won't need nearly as large of a server as I'm running.

## Some known issues

This is a beta, after all, so Sill is far from perfect. Here are some things I know about and will be working on:

- The link matching isn’t perfect. If people post with different query parameters, those get logged as different links. I’ve tried a few solutions to this, but none of them were perfect.
- Sometimes Sill fails to pull the title, description, and image for an article. My fetcher gets blocked sometimes. I have some work to do to optimize this process.
- If you follow people on both Mastodon and Bluesky, they get counted as two different accounts rather than the same person. This is a tricky problem to solve, but I have some ideas I’d like to try when I have the time.

## Give Sill a try

I built Sill because I value the people in my social network, and I believe I can learn the most about the world by reading what they read and hearing what they have to say. Sill listens to them at scale and helps me understand the conversation. In the month or so I’ve been using it myself, Sill has completely changed my relationship to my social network.

If you’d like to better understand your network and the world around you, [sign up for Sill](https://sill.social). If you have feedback, you can find me on [Bluesky](https://bsky.app/profile/tylerjfisher.com), [Mastodon](https://social.tylerjfisher.com/@tylrfishr) or [email](mailto:tyler@sill.social).