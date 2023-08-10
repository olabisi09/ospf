import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar bg-white lg:px-20 sticky top-0 left-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <div className="flex gap-4 items-center">
            <Image
              src="/logo.svg"
              alt="Shiffts Logo"
              className="w-12 h-12 md:w-20 md:h-16"
              width={`${83}`}
              height={`${68}`}
            />
            <h1 className="text-2xl">Shiffts</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="flex gap-20 items-center">
          <Link
            href="/"
            className="hover:border-b-2 hover:border-b-main no-underline"
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className="hover:border-b-2 hover:border-b-main no-underline"
          >
            Jobs
          </Link>
          <Link
            href="/register"
            className="hover:border-b-2 hover:border-b-main no-underline"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="hover:border-b-2 hover:border-b-main no-underline"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
