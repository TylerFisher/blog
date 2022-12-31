import Layout from "../components/layout";
import FeaturedPost from "../components/homepage/FeaturedPost";
import PostStream from "../components/homepage/PostStream";
import { importBlogPosts } from "../lib/serverUtils";
import { NextSeo } from "next-seo";
import generateRssFeed from "../lib/rss";

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
  await generateRssFeed(postsList);
  const homeData = await import("../content/home.md").catch(() => null);

  return {
    props: {
      postsList,
      homeData: homeData.default.attributes,
    },
  };
}

export default Home;
