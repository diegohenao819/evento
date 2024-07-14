import Link from "next/link";

const routes = [
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    path: "/terms-conditions",
    label: "Terms and Conditions",
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs"> &copy; 2025 Diego Henao. All rights reserverd</small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
