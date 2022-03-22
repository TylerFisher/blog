import Layout from "../components/layout";
import FeaturedPost from "../components/homepage/FeaturedPost";
import PostStream from "../components/homepage/PostStream";
import { constructPostPath } from "../lib/serverUtils";
import { NextSeo } from "next-seo";

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context("../content/posts", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))
    .reverse();

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/posts/${path}`);
      const [year, month, day, slug] = constructPostPath(path);

      return { ...markdown, slug: `${year}/${month}/${day}/${slug}` };
    })
  );
};

const Home = ({ postsList, homeData }) => {
  const featuredPost = postsList[0];
  const streamPosts = postsList.slice(1);
  return (
    <Layout>
      <NextSeo canonical={`https://www.tylerjfisher.com`} />
      <div className="max-w-7xl mx-auto">
        <FeaturedPost post={featuredPost} />
        <PostStream
          posts={streamPosts}
          label="More Posts"
          homeData={homeData}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const postsList = await importBlogPosts();
  const homeData = await import("../content/home.md").catch(() => null);

  return {
    props: {
      postsList,
      homeData: homeData.default.attributes,
    },
  };
}

export default Home;
