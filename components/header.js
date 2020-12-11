import Link from "next/link";

export default function Header() {
  return (
    <h2 className="component-header">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      .
    </h2>
  );
}
