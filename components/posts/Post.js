import PostHeader from "./PostHeader";
import { NextSeo, ArticleJsonLd } from "next-seo";


export default function Post({ post, renderHeader = true }) {
  const { html, attributes, slug } = post;
  return (
    <>
    <NextSeo
      title={`${attributes.title} | Tyler Fisher`}
      description={attributes.description}
      canonical={`https://www.tylerjfisher.com/blog/${slug}`}
      openGraph={{
        title: attributes.title,
        description: attributes.description,
        url: `https://www.tylerjfisher.com/blog/${slug}`,
        type: 'article',
        article: {
          publishedTime: attributes.date,
          section: 'Section II',
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
    <article className="max-w-7xl mx-auto">
      {renderHeader && <PostHeader attributes={attributes} />}
      <div className="prose md:prose-lg lg:prose-xl mt-8 mx-auto max-w-2xl" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
    </>
  )
}