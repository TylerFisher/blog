import HeaderNav from "./HeaderNav";
import HeaderBrand from "./HeaderBrand";
import HeaderSubscribe from "./HeaderSubscribe";
export default function Header() {
  return (
    <header className="px-6 md:px-14">
      <div
        className="gap-x-14 content-center grid grid-flow-row-dense mx-auto max-w-7xl p-0"
        style={{
          gridTemplateColumns: "auto 1fr",
        }}
      >
        <HeaderBrand />
        <HeaderNav />
        <HeaderSubscribe />
      </div>
    </header>
  );
}
