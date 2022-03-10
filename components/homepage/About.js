export default function About({ homeData }) {
  return (
    <div>
      <p className="lead mb-8">{homeData.summary}</p>

      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase">Currently listening</h3>
        <p>
          <a
            target="_blank"
            className="underline text-orange-600"
            href={homeData.listening.link}
            rel="noreferrer"
          >
            {homeData.listening.artist} &ndash;{" "}
            <em>{homeData.listening.album}</em>
          </a>
        </p>
      </div>
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase">Currently reading</h3>
        <p>
          <a
            target="_blank"
            className="underline text-orange-600"
            href={homeData.reading.link}
            rel="noreferrer"
          >
            <em>{homeData.reading.title}</em> by {homeData.reading.author}
          </a>
        </p>
      </div>
      <div>
        <h3 className="font-bold text-sm uppercase">Currently playing</h3>
        <p>
          <a
            target="_blank"
            className="underline text-orange-600"
            href={homeData.playing.link}
            rel="noreferrer"
          >
            {homeData.playing.title} ({homeData.playing.platform})
          </a>
        </p>
      </div>
    </div>
  );
}
