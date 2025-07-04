import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/BookHubLogo.svg";
import Container from "@/utils/Container";
import { ModeToggle } from "../mode-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // when dark mode is enabled, the navbar should have a dark background
    // and when light mode is enabled, it should have a light background
    <nav
      className={cn(
        "bg-white dark:bg-gray-800 border-b border-gray-200 shadow-sm sticky top-0 z-50"
      )}>
      <Container>
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img className="w-32 h-10" src={logo} alt="main Logo" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/books" className="hover:text-blue-600 font-medium">
              All Books
            </Link>
            <Link to="/create-book" className="hover:text-blue-600 font-medium">
              Add Book
            </Link>
            <Link
              to="/borrow-summary"
              className="hover:text-blue-600 font-medium">
              Borrow Summary
            </Link>
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          //cn use in mobile menu to add background color and padding
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 shadow-lg p-4 space-y-2">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <div className="mt-2 pb-4 space-y-2">
              <Link
                to="/books"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600">
                All Books
              </Link>
              <Link
                to="/create-book"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600">
                Add Book
              </Link>
              <Link
                to="/borrow-summary"
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-600">
                Borrow Summary
              </Link>
              <ModeToggle />
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
