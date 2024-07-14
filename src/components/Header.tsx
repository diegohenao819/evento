"use client"; 

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

  const activePath = usePathname();


  return (
    <header className="flex justify-between items-center boder-b border-white/10 h-14 px-3 md:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm ">
          {routes.map((route) => (
            <li
              key={route.path}
              className= {`${activePath === route.path ? "text-white" : "text-white/50"} hover:text-white transition`}
            >
              <Link href={route.path}>{route.name}</Link>
              {
                activePath === route.path && (
                  <motion.div layoutId="motion" className="bg-accent h-1 w-full bottom-0"></motion.div>
                )
              
              }
      
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
