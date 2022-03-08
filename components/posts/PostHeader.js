import { apdate } from 'journalize';

export default function PostHeader({ attributes }) {
  let date = attributes.date;

  if (typeof date === 'string') {
    date = new Date(date);
  }

  date = apdate(date);

  return (
    <header>
      <span className="block text-xs leading-none mb-4 uppercase text-gray-400">
        By <span className="font-bold text-black">Tyler Fisher</span> &ndash;&nbsp;
        {date}
      </span>
      <h1 className="text-4xl md:text-7xl font-bold leading-none">{attributes.title}</h1>
      <p className="text-xl md:text-3xl mt-4 md:mt-6 max-w-4xl">{attributes.description}</p>
      {attributes.thumbnail && (
        <figure className="mt-8">
          <img src={attributes.thumbnail} />
        </figure>
      )}
    </header>
  )
}