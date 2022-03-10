---
title: How I built this website
date: 2022-03-10T01:03:45.947Z
description: How I configured next.js, Netlify CMS, Tailwind, and Buttondown to
  play nicely together.
leadImage:
  caption: Photo by Glen Carrie on Unsplash
  image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1646881432/glen-carrie-HpMihL323k0-unsplash_cokxxi.jpg
  alt: A Lego brick stacked on a larger Lego board
category: Writing code
---

I've wanted to have my own blog, or just a website for writing, for a long time. But every time I felt the stirrings of the written word within me, I couldn't decide on a platform. Bite the bullet and start a Substack? Try Ghost? Suffer through PHP and make a WordPress? Build something from scratch? I had real option paralysis when it came to choosing a platform for what is ultimately a very low-stakes blog with no revenue plan.

I did, in fact, try [Ghost](https://ghost.org/). I thought it hit the sweet spot of "does a lot for me so I can get moving" and "cheap enough for a personal blog." I built something very close to this very website, and very nearly launched it. Until I started tinkering with the themes and realized you had to pay $300/year for the privilege of theme editing. That's not worth it to me when I know I can replicate many of Ghost's features myself. Ghost is fairly priced for someone who means to start a real, revenue-generating business with their digital presence. But I'm doing this for free.

So, instead, I built this from scratch. Thankfully, the [default Ghost theme](https://github.com/TryGhost/Themes/tree/main/packages/journal) I was working from is MIT licensed, so I cribbed heavily from it for this site. Here are the tools I'm using for the build:

- **Web framework**: [next.js](https://nextjs.org)
- **CMS**: [Netlify CMS](https://www.netlifycms.org/)
- **Hosting platform**: [Vercel](https://vercel.com)
- **CSS framework**: [Tailwind](https://tailwindcss.com/)
- **Newsletters**: [Buttondown](https://buttondown.email)
- **Media library/image CDN**: [Cloudinary](https://cloudinary.com)

All in all, it took me two nights of hacking to put this all together.

The app is quite simple; you can read the source [here](https://github.com/TylerFisher/blog). But I did a few things that were new to me in order to make this all work, so I thought I'd write them down.

## Automated newsletter publishing

Newsletters. So hot right now. There's another version of this effort where I went newsletter-first and picked a newsletter platform to publish out of, such as Substack. But I'm too much of an open web nerd to let myself do that. Still, I wanted to give the option to any potential readers to get my posts via email if they choose. (Wanna subscribe? There's a form at the bottom of this post.)

I didn't want the newsletter to be extra work for me. Instead, I wanted to automatically publish my posts as editions of my newsletter. Ghost handles this really well, but as stated above, it felt too expensive for my needs.

Instead, I chose Buttondown as my email provider, which is free until I get past 1,000 subscribers. It also uses Markdown as a content format and has a handy [API](https://api.buttondown.email/v1/schema) that allows me to publish newsletters programmatically. Given my content is stored as Markdown anyway via Netlify CMS, this was an obvious fit.

I actually couldn't believe how easy it was to make this work. All I had to do was write a [simple script](https://github.com/TylerFisher/blog/blob/main/script/send-newsletter.js). Seriously, this is the whole function:

```javascript
const fetch = require("node-fetch");
const { program } = require("commander");
const matter = require("gray-matter");
require("dotenv").config();

program.version("0.0.1");

async function sendNewsletter(params) {
  const apiUrl = process.env.BUTTONDOWN_API_URL;
  const apiToken = process.env.BUTTONDOWN_API_KEY;

  // gray-matter parses Markdown files with frontmatter
  const data = matter.read(`${params.file}`);

  // construct required body for buttondown
  const newsletterData = {
    body: data.content,
    subject: data.data.title,
  };

  // send request to buttondown
  try {
    const response = await fetch(apiUrl, {
      method: "post",
      body: JSON.stringify(newsletterData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${apiToken}`,
      },
    });

    // tell me about it
    const respData = await response.json();
    console.log("Newsletter published!", respData);
  } catch (e) {
    // tell me if something went wrong
    console.log(e);
  }
}

// configure cli
program
  .requiredOption(
    "-f, --file <data>",
    "required, file to parse, ex: content/posts/2022-03-08_a-blog-in-this-economy.md"
  )
  .description("Parses posts and sends as newsletter via ButtondownAPI ")
  .action((opts) => {
    try {
      sendNewsletter(opts);
    } catch (e) {
      console.log(e);
    }
  });

program.parse(process.argv);
```

And I run it like this:

```
$ node script/send-newsletter.js -f content/posts/slug-of-post.md
```

If I want to get fancy, I'll hook this up to a Github action so that when I commit new posts, newsletters go out automatically. But running a simple script manually is good enough for now.

## Custom editor components in Netlify CMS

I like Netlify CMS, but it does one thing that requires a workaround. Its default image component does not support image captions. Image credit via captions is really important! So I had to build a custom editor component that included a field for captions.

I'm instantiating the CMS manually, instead of simply placing their HTML file in next.js's public directory. Doing this allows me to configure plugins and define my own components. You can see my full setup [here](https://github.com/TylerFisher/blog/blob/main/pages/admin/index.js). Netlify CMS exposes a \`CMS\` object where you register said plugins and components. Here's what I came up with:

```
CMS.registerEditorComponent({
  id: 'figure', // Internal id of the component
  label: 'Figure', // Visible label
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'image',
      label: 'Image',
      widget: 'image',
    },
    {
      name: 'alt',
      label: 'Alt',
      widget: 'string',
    },
    {
      name: 'caption',
      label: 'Caption',
      widget: 'string',
    },
  ],
  pattern:
    /^<figure><img src="(.*)" alt="(.*)" \/><figcaption>(.*)<\/figcaption><\/figure>/, // Pattern to identify a block as being an instance of this component
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      image: match[1],
      alt: match[2],
      caption: match[3],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return (
      '<figure><img src="' +
      obj.image +
      '" alt="' +
      obj.alt +
      '" /><figcaption>' +
      obj.caption +
      '</figcaption></figure>'
    )
  },
  // Preview output for this component.
  toPreview: function (obj) {
    return (
      '<figure><img src="' +
      obj.image +
      '" alt="' +
      obj.alt +
      '" /><figcaption>' +
      obj.caption +
      '</figcaption></figure>'
    )
  },
})
```

It's straightforward enough to do this: you define the HTML output of your block and work backward from there. In this case, I wanted a simple `<figure>` structure and needed to supply the image source, the alt text, and the caption text.

## Previewing posts in Netlify CMS while using Tailwind

Out of the box, Netlify CMS's preview pane is pretty useless, but you can supply a custom React component to the Netlify CMS to use instead. I'm using next.js, so it should be dead simple to just give the CMS my Post component, right?

Wrong. Because Netilfy CMS uses its own instance of React and doesn't crib from mine, it doesn't know anything about my Tailwind configuration. Meaning I can't do something like `<article className="max-w-7xl mx-auto">`. Those classes mean nothing to Netlify CMS's React instance. So instead, you have to supply Tailwind to the component as well.

I landed on doing this by writing a \`PostPreview\` component that injects the Tailwind CDN script after the component mounts. This is _not_ recommended behavior for production, but I'm the only person using this, so I made the compromise.

```
  componentDidMount() {
    const { document } = this.props;
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com?plugins=typography';
    document.head.appendChild(script);
  }
```

Now, my post preview in NetlifyCMS looks nearly identical to my actual posts. Perfect!

<figure><img src="https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1646879194/Screen_Shot_2022-03-09_at_9.26.16_PM_vj3ukt.png" alt="Screenshot of the Netlify CMS post editor and preview pane" /><figcaption>Live preview is so nice.</figcaption></figure>

## Overall thoughts

As a personal blog for a techncially-minded person, this system is pretty nice. It's smooth to operate and yet keeps everything close to the vest. All of my code and content is controlled via git, and I can run everything locally. By using next.js and Vercel, my site is speedy and performant while requiring almost no effort from me. But it's not perfect. I have some things I'd like to improve in the future:

- Somehow get image dimensions from Cloudinary and store that data so I can take advantage of next.js's [built-in image optimization and lazy loading](https://nextjs.org/docs/basic-features/image-optimization). Not using this feature is having the largest impact on performance.
- Use [preact](https://preactjs.com/) instead of React. I'm not doing anything remotely fancy with react, so this should be straightforward, and it'll cut down on the size of the JS on this site.
- Setup Netlify CMS properly so I can authenticate and log in on the production site. Right now, I'm doing everything locally. That's fine for now, but ideally, I'd be able to work on content even if I'm not at a computer that has my dev environment set up.

These are all minor issues though, and I needed to launch. If you want to make use of this system, [all the code is open source](https://github.com/TylerFisher/blog). Feel free to play around!
