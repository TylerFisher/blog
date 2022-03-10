import Link from 'next/link';
import { apdate } from 'journalize';
import { stringToSlug } from '../../lib/clientUtils';

export default function PostHeader({ attributes }) {
  let date = attributes.date;

  if (typeof date === 'string') {
    date = new Date(date);
  }

  date = apdate(date);

  return (
    <header>
      <span className="block text-xs leading-none mb-4 uppercase text-gray-400">
        By&nbsp;
        <span className="font-bold text-black">Tyler Fisher</span> in&nbsp;
        <Link href={`/blog/category/${stringToSlug(attributes.category)}`}>
          <a className="font-bold text-orange-600 hover:underline">{attributes.category}</a>
        </Link> &ndash;&nbsp;
        {date}
      </span>
      <h1 className="text-4xl md:text-7xl font-bold leading-none">{attributes.title}</h1>
      <p className="text-xl md:text-3xl mt-4 md:mt-6 max-w-4xl">{attributes.description}</p>
      {attributes.leadImage?.image && (
        <figure className="mt-8">
          <img src={attributes.leadImage.image} alt={attributes.leadImage.alt} />
          <figcaption className="mt-2 text-gray-500 text-sm">{attributes.leadImage.caption}</figcaption>
        </figure>
      )}
    </header>
  )
}