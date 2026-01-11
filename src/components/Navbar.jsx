import { Link, NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm ${isActive ? "text-accent" : "text-slate-300 hover:text-accent"}`
    }
  >
    {label}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-slate-800">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <Link to="/" className="text-lg font-semibold tracking-tight">mywebsite</Link>
        <div className="flex items-center gap-1">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/experience" label="Experience" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/skills" label="Skills" />
          <NavItem to="/contact" label="Contact" />
        </div>
      </nav>
    </header>
  );
}
