import { Link, useLocation } from 'react-router-dom';


const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const location = useLocation();
  return (
    <header className="w-full bg-pastel-blue shadow-sm">
      <nav
        className="flex items-center justify-between container mx-auto px-4 py-4 md:py-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-pastel-yellow rounded-2xl focus:outline-none focus:ring-2 focus:ring-pastel-yellow"
        >
          Pawfect Store
        </Link>
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={(
                  'rounded-xl px-4 py-2 transition duration-150 hover:bg-pastel-yellow/20 focus:outline-none focus:ring-2 focus:ring-pastel-yellow',
                  location.pathname === link.to ? 'bg-pastel-yellow text-white shadow' : 'text-pastel-blue'
                )}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {/* For this static site, nav is always shown; implement hamburger only if dynamic menu is needed. */}
          <ul className="flex gap-4 text-base font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={(
                    'rounded-xl px-2 py-1 transition duration-150 hover:bg-pastel-yellow/20 focus:outline-none focus:ring-2 focus:ring-pastel-yellow',
                    location.pathname === link.to ? 'bg-pastel-yellow text-white shadow' : 'text-pastel-blue'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
