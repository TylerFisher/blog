import HeaderNavItem from "./HeaderNavItem";

export default function HeaderNav() {
  return (
    <nav className="row-start-2 h-14 tracking-widest uppercase items-center flex before:bg-gray-300 before:h-[1px] before:left-0 before:absolute before:top-24 before:w-full after:bg-gray-300 after:h-[1px] after:left-0 after:absolute after:top-[9.5rem] after:w-full">
      <ul className="inline-flex items-center list-none m-0 p-0">
        <HeaderNavItem label="Home" href="/" />
        <HeaderNavItem label="About" href="/about" ml />
        <HeaderNavItem label="Portfolio" href="/portfolio" ml />
        <a href="https://bsky.app/profile/tylerjfisher.com">
          <img
            src="/bluesky-logo.svg"
            alt="Bluesky"
            className="h-5 w-6 ml-10"
          />
        </a>
        <a href="https://social.tylerjfisher.com/@tylrfishr">
          <img
            src="/mastodon-logo.svg"
            alt="Mastodon"
            className="h-6 w-6 ml-10"
          />
        </a>
      </ul>
    </nav>
  );
}
