import Link from "next/link";

const Nav = () => (
  <nav className="nav bg-light d-flex justify-content-between">
    <Link href="/">
      <a className="nav-link">Home</a>
    </Link>
    <Link href="/login">
      <a className="nav-link">Login</a>
    </Link>
  </nav>
);

export default Nav;
