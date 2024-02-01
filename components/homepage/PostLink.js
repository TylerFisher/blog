import Link from "next/link";
import { apdate } from "journalize";

export default function PostLink({ post, mt = false }) {
  return (
    <article className={mt ? "pt-8 border-t pb-8 border-gray-300" : "pb-8"}>
      <Link href={`/blog/post/${post.slug}`} className="block">
        <header>
          <h2 className="text-3xl font-bold hover:underline">
            {post.attributes.title}
          </h2>
        </header>
        <div className="text-xl leading-normal mt-5">
          {post.attributes.description}
        </div>
        <footer className="text-orange-600 text-xs leading-none mt-8 uppercase">
          {apdate(new Date(post.attributes.date))}
        </footer>
      </Link>
    </article>
  );
}
