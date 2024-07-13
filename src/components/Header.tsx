import Link from "next/link";
import Logo from "./Logo";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",

    path: "/events/all",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center boder-b border-white/10 h-14 px-3 md:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
