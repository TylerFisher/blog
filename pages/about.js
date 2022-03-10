import Layout from "../components/layout";
import Post from "../components/posts/Post";
import { attributes, html } from "../content/about.md";
import { NextSeo } from "next-seo";

const About = () => (
  <Layout>
    <NextSeo canonical="https://www.tylerjfisher.com/about" />
    <Post
      post={{
        attributes,
        html,
      }}
      renderHeader={false}
    />
  </Layout>
);

export default About;
