import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "SDOA", href: "#" },
    { name: "Constituion", href: "#" },
    { name: "Organisation", href: "/originization" },
    {
      name: "Affilated Unit",
      href: "#",
      dropdown: [
        { name: "Distric Sport Association", href: "#" },
        { name: "Associate Distric Sport Association", href: "#" },
        { name: "Upcoming Event", href: "#" },
      ],
    },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full shadow-md bg-gradient-to-r from-[#256479] to-[#051831]">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dwd6bd0zy/image/upload/v1758389671/Sonbhadra_Badminton_mq5j9l.png"
            alt="Olympics Logo"
            className="h-8 scale-125"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold text-[#FFEFD5] relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
              >
                <span className="cursor-pointer relative text-white hover:text-[#24728e] transition-all duration-300">
                  {link.name}
                  <span className="ml-1">&#x25BE;</span> {/* small down arrow */}
                </span>
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-[#256479] hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-[#24728e] transition-all duration-300 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                  after:bg-[#24728e] after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="hover:tracking-wide transition-all duration-300">
                  {link.name}
                </span>
              </a>
            )
          )}
        </nav>

        {/* Search + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden bg-blue-600 text-white p-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="flex flex-col">
                  <span
                    className="cursor-pointer text-gray-800 font-semibold"
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === link.name ? "" : link.name)
                    }
                  >
                    {link.name} &#x25BE;
                  </span>
                  {dropdownOpen === link.name &&
                    link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="pl-4 py-1 text-gray-600 hover:text-blue-600"
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
