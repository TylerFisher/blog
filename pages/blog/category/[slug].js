import { NextSeo } from "next-seo";
import { getPathsForFolder, constructPostPath } from "../../../lib/serverUtils";
import Layout from "../../../components/layout";
import PostStream from "../../../components/homepage/PostStream";

const CategoryPage = ({ category, posts, slug }) => {
  if (!category) return <div>not found</div>;
  return (
    <Layout>
      <NextSeo
        canonical={`https://www.tylerjfisher.com/blog/category/${slug}`}
      />
      <PostStream
        posts={posts}
        label={category.attributes.title}
        about={category.attributes.about}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getPathsForFolder("categories");

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await import(`../../../content/categories/${slug}.md`).catch(
    () => null
  );

  const postPaths = getPathsForFolder("posts");
  const inCategory = [];

  for (var i = 0; i < postPaths.length; i++) {
    const postFilename = postPaths[i].params.slug;
    const [year, month, day, slug] = constructPostPath(postFilename);
    const postSlug = `${year}/${month}/${day}/${slug}`;
    const post = await import(
      `../../../content/posts/${postFilename}.md`
    ).catch(() => null);
    if (
      post.default.attributes.category === category.default.attributes.title
    ) {
      const postData = Object.assign(post.default, { slug: postSlug });
      inCategory.push(postData);
    }
  }

  return {
    props: {
      category: category.default,
      posts: inCategory,
      slug: slug,
    },
  };
}

export default CategoryPage;
