import Link from "next/link";
import { apdate } from "journalize";

export default function FeaturedPost({ post }) {
  return (
    <article className="mb-24">
      <Link href={`/blog/post/${post.slug}`}>
        <a className="block">
          <div className="flex flex-row flex-wrap">
            <div className="w-full md:w-1/2 md:pr-8">
              <header>
                <div className="text-orange-600 text-xs leading-none mb-4 uppercase">
                  Latest &ndash; {apdate(new Date(post.attributes.date))}
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight hover:underline">
                  {post.attributes.title}
                </h2>
              </header>
              <p className="text-xl md:text-2xl mt-6 max-w-4xl">
                {post.attributes.description}
              </p>
            </div>
            <figure className="w-full mt-8 md:mt-0 md:w-1/2">
              <img
                src={post.attributes.leadImage.image}
                alt={post.attributes.leadImage.alt}
              />
            </figure>
          </div>
        </a>
      </Link>
    </article>
  );
}
