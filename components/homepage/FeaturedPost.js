import Link from 'next/link';
import { apdate } from 'journalize';

export default function FeaturedPost({ post }) {
  return (
    <article className="mb-24">
      <Link href={`/blog/post/${post.slug}`}>
        <a className="block hover:text-gray-600">
          <div className="flex flex-row flex-wrap">
            <div className="w-full md:w-1/2 md:pr-8">
              <header>
                <div className="text-orange-600 text-xs leading-none mb-8 uppercase">
                  Latest &ndash; {apdate(new Date(post.attributes.date))}
                </div>
                <h2 className="text-4xl md:text-7xl font-bold leading-none tracking-tight">
                  {post.attributes.title}
                </h2>
              </header>
              <p className="text-xl md:text-3xl mt-6 max-w-4xl">{post.attributes.description}</p>
            </div>
            <figure className="w-full mt-8 md:mt-0 md:w-1/2">
              <img src={post.attributes.thumbnail} />
            </figure>
          </div>
        </a>
      </Link>
    </article>
  )
}