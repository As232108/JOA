import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Organisation", href: "#" },
    { name: "SOA", href: "#" },
    { name: "Constituion", href: "#" },
    { name: "Report", href: "#" },
    { name: "State Sport Association", href: "#" },
    { name: "Distric olympic Association", href: "#" }
  ];

  return (
    <header className="w-full shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Olympic_rings_without_rims.svg"
            alt="Olympics Logo"
            className="h-8"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Search + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
