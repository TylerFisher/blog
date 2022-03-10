export default function About({ homeData }) {
  return (
    <div>
      <p className="lead mb-8">{homeData.summary}</p>

      <div className="mb-8">
        <h4 className="font-bold text-sm uppercase">Currently listening</h4>
        <p>
          <a target="_blank" className="underline text-orange-600" href={homeData.listening.link}>
            {homeData.listening.artist} &ndash; <em>{homeData.listening.album}</em>
          </a>
        </p>
      </div>
      <div className="mb-8">
        <h4 className="font-bold text-sm uppercase">Currently reading</h4>
        <p>
          <a target="_blank" className="underline text-orange-600" href={homeData.reading.link}>
            <em>{homeData.reading.title}</em> by {homeData.reading.author}
          </a>
        </p>
      </div>
      <div>
        <h4 className="font-bold text-sm uppercase">Currently playing</h4>
        <p>
          <a target="_blank" className="underline text-orange-600" href={homeData.playing.link}>
            {homeData.playing.title} ({homeData.playing.platform})
          </a>
        </p>
      </div>
    </div>
  )
}