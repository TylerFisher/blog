import Link from 'next/link';

export default function HeaderBrand() {
  return (
    <div className="items-center flex h-24 leading-none w-full">
      <Link href="/">
        <a className="font-sans text-2xl md:text-5xl font-black tracking-tight text-orange-600">
          Tyler Fisher
        </a>
      </Link>
    </div>
  )
}