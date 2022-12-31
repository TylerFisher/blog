import fs from "fs";
import { Feed } from "feed";
import { importBlogPosts } from "./serverUtils";

export default async function generateRssFeed(posts) {
  const site_url = "https://www.tylerjfisher.com";

  const feedOptions = {
    title: "Tyler Fisher",
    description: "All posts from www.tylerjfisher.com",
    id: site_url,
    link: site_url,
    language: "en",
    image: `${site_url}/favicon.ico`,
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(posts[0].attributes.date),
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
    author: {
      name: "Tyler Fisher",
      email: "tyler@tylerjfisher.com",
      link: "https://www.tylerjfisher.com/about",
    },
  };

  const feed = new Feed(feedOptions);

  posts.forEach((post) => {
    feed.addItem({
      title: post.attributes.title,
      id: `${site_url}/blog/post/${post.slug}`,
      link: `${site_url}/blog/post/${post.slug}`,
      description: post.attributes.description,
      content: post.html,
      author: {
        name: "Tyler Fisher",
        email: "tyler@tylerjfisher.com",
        link: "https://www.tylerjfisher.com/about",
      },
      date: new Date(post.attributes.date),
      image: post.attributes.leadImage.image,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/rss.json", feed.json1());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
}
