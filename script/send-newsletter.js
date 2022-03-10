const fetch = require('node-fetch');
const { program } = require('commander');
const matter = require('gray-matter');
require('dotenv').config()

program.version('0.0.1');

async function sendNewsletter(params) {
  const apiUrl = process.env.BUTTONDOWN_API_URL;
  const apiToken = process.env.BUTTONDOWN_API_KEY;

  const data = matter.read(`${params.file}`);

  const newsletterData = {
    body: data.content,
    subject: data.data.title,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'post',
      body: JSON.stringify(newsletterData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${apiToken}`,
      },
    });
  
    const respData = await response.json();
    console.log('Newsletter published!', respData);
  } catch(e) {
    console.log(e);
  }
}

program
  .requiredOption(
    '-f, --file <data>',
    'required, file to parse, ex: content/posts/2022-03-08_a-blog-in-this-economy.md'
  )
  .option(
    '-r, --requireDotEnv',
    'optional, require dotenv when running on localhost'
  )
  .description('Parses posts and sends as newsletter via ButtondownAPI ')
  .action((opts) => {
    try {
      sendNewsletter(opts);
    } catch (e) {
      core.setFailed(`Action failed with error ${e}`);
    }
  });

program.parse(process.argv);