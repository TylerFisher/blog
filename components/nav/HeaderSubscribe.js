export default function HeaderSubscribe() {
  return (
    <div className="text-xs md:text-sm tracking-wide uppercase flex justify-end">
      <a className="items-center text-orange-600 inline-flex font-bold" href="#subscribe">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="ml-1">Subscribe</span>
      </a>
    </div>
  )
}