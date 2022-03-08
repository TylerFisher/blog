import Link from 'next/link';
import { apdate } from 'journalize';

export default function PostLink({ post, mt = false}) {
  return (
    <article className={mt ? 'mt-16' : undefined}>
      <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
        <a className="block hover:text-gray-600">
          <header>
            <h2 className="text-3xl font-bold">{post.attributes.title}</h2>
          </header>
          <div className="text-xl leading-normal mt-5">
            {post.attributes.description}
          </div>
          <footer className="text-orange-600 text-xs leading-none mt-8 uppercase">
            {apdate(new Date(post.attributes.date))}
          </footer>
        </a>
      </Link>
    </article>
  )
}