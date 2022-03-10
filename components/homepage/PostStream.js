import PostLink from "./PostLink";
import About from "./About";

export default function PostStream({ posts, label, about, homeData }) {
  return (
    <div className="flex flex-row flex-wrap">
      <section className="max-w-3xl lg:w-2/3 w-full">
        <h2 className="items-center flex text-sm tracking-wide mb-8 uppercase after:bg-gray-300 after:flex-grow after:ml-4 after:h-[1px]">
          {label}
        </h2>
        {posts.map((post, i) => (
          <PostLink post={post} key={post.slug} mt={i > 0} />
        ))}
      </section>
      <aside className="text-lg h-max w-full mt-16 lg:mt-0 lg:pl-16 lg:sticky lg:top-20 lg:w-1/3">
        <section>
          <h2 className="items-center flex text-sm tracking-wide mb-4 uppercase after:bg-gray-300 after:flex-grow after:ml-4 after:h-[1px]">
            About
          </h2>
          <section className="flex flex-col justify-center">
            {about ? (
              <p className="mt-2 leading-normal">{about}</p>
            ) : (
              <About homeData={homeData} />
            )}
          </section>
        </section>
      </aside>
    </div>
  );
}
