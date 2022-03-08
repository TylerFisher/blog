import fs from 'fs'
import path from 'path'
import Layout from '../../../components/layout'
import Post from '../../../components/posts/Post'

const PostWrapper = ({ post }) => {
  if (!post) return <div>not found</div>

  return (
    <Layout>
      <Post post={post} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/posts'))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const post = await import(`../../../content/posts/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      post: post.default,
    },
  }
}

export default PostWrapper;
