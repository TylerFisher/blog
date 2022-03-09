import { getPostParamsForFolder } from '../../../../../../lib/serverUtils';
import Layout from '../../../../../../components/layout';
import Post from '../../../../../../components/posts/Post';
import { NextSeo, ArticleJsonLd } from "next-seo";

const PostWrapper = ({ post, slug }) => {
  if (!post) return <div>not found</div>
  const { attributes } = post;

  return (
    <Layout>
      <NextSeo
        title={`${attributes.title} | Tyler Fisher`}
        description={attributes.description}
        canonical={`https://www.tylerjfisher.com/blog/post/${slug}`}
        openGraph={{
          title: attributes.title,
          description: attributes.description,
          url: `https://www.tylerjfisher.com/blog/post/${slug}`,
          type: 'article',
          article: {
            publishedTime: attributes.date,
            authors: [
              'https://www.tylerjfisher.com/about',
            ],
          },
          images: [
            {
              url: attributes.thumbnail
            },
          ],
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={`https://www.tylerjfisher.com/blog/post/${slug}`}
        title={attributes.title}
        images={[
          attributes.thumbnail,
        ]}
        datePublished={attributes.date}
        authorName="Tyler Fisher"
        description={attributes.description}
      />
      <Post post={post} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostParamsForFolder('posts');
  console.log(paths);

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { year, month, day, slug } = params
  const filename = `${year}-${month}-${day}_${slug}`;
  const fullSlug = `${year}/${month}/${day}/${slug}`;

  const post = await import(`../../../../../../content/posts/${filename}.md`).catch(
    () => null
  )

  return {
    props: {
      post: post.default,
      slug: fullSlug,
    },
  }
}

export default PostWrapper;
