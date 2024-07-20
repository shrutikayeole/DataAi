import { useState, useEffect, useRef } from "react";
import { Menu, X } from "react-feather"; // Using react-feather icons for Menu and X
import { Link } from "react-scroll"; // Importing Link from react-scroll

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Features", href: "features" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const drawerRef = useRef();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMobileDrawerOpen(false);
      }
    };

    if (mobileDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileDrawerOpen]);

  return (
    <nav className="sticky top-0 z-50 py-3 px-4 background-color: rgba(0,0,0,0.0) text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          DataAI
        </div>
        <ul className="hidden lg:flex space-x-8 flex items-center justify-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                className="text-white hover:text-secondary cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex justify-end">
          <button onClick={toggleNavbar} className="text-white">
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div
          ref={drawerRef}
          className="fixed top-0 right-0 z-50 bg-dark w-full p-8 flex flex-col justify-center items-center lg:hidden"
        >
          <ul className="text-white">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="hover:text-primary cursor-pointer"
                  onClick={toggleNavbar}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
