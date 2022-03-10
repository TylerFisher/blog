import Link from "next/link";

export default function HeaderNavItem({ href, label, ml = false }) {
  let classStr = `hover:underline text-sm md:text-base ${ml && "ml-10"}`;

  return (
    <li className={classStr}>
      <Link href={href}>{label}</Link>
    </li>
  );
}
