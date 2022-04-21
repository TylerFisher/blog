import { NextSeo } from "next-seo";
import showdown from "showdown";
import Layout from "../components/layout";
import Project from "../components/portfolio/Project";
import { attributes } from "../content/portfolio.md";

const converter = new showdown.Converter();

const Portfolio = () => (
  <Layout>
    <NextSeo canonical="https://www.tylerjfisher.com/portfolio" />
    <article className="max-w-7xl mx-auto">
      <header className="pb-16 border-b border-gray-300">
        <h1 className="text-4xl md:text-7xl font-bold leading-none text-center">
          {attributes.title}
        </h1>
        <div
          className="prose prose-xl max-w-3xl mx-auto mt-8 prose-a:text-orange-600"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(attributes.summary),
          }}
        />
      </header>
      <div>
        {attributes.projects.map((p, i) => (
          <Project project={p} i={i} converter={converter} key={i} />
        ))}
      </div>
    </article>
  </Layout>
);

export default Portfolio;
