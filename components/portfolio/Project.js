export default function Project({ project, i, converter }) {
  return (
    <div
      className={`mt-16 flex flex-wrap ${
        i % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="lg:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-0">{project.title}</h2>
        <h5 className="text-sm uppercase text-gray-400">
          {project.published_date}
        </h5>
        <div
          className="prose prose-lg prose-a:text-orange-600 my-4"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(project.description),
          }}
        />
        <p>
          <a
            className="underline text-orange-600 cursor-pointer"
            href={project.url}
          >
            Live site
          </a>{" "}
          {project.repo && (
            <>
              |{" "}
              <a
                className="underline text-orange-600 cursor-pointer"
                href={project.repo}
              >
                Repository
              </a>
            </>
          )}
        </p>
      </div>
      <div className="lg:w-1/2 px-4">
        <figure>
          <img
            src={project.image.image}
            alt={project.image.alt}
            className="border"
          />
          <figcaption className="mt-2 text-gray-500 text-sm">
            {project.image.caption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
