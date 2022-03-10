import PostHeader from "./PostHeader";

export default function Post({ post, renderHeader = true }) {
  const { html, attributes } = post;
  return (
    <>
    <article className="max-w-7xl mx-auto">
      {renderHeader && <PostHeader attributes={attributes} />}
      <div
        className="prose md:prose-lg lg:prose-xl prose-a:text-orange-600 mt-8 mx-auto max-w-2xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
    </>
  )
}