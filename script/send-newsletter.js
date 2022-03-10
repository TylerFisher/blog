const fetch = require("node-fetch");
const { program } = require("commander");
const matter = require("gray-matter");
require("dotenv").config();

program.version("0.0.1");

async function sendNewsletter(params) {
  const apiUrl = `${process.env.BUTTONDOWN_API_URL}/emails`;
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
