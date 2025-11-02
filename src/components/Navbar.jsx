import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/LOGO-removebg-preview.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['/about', '/projects', '/marketing', '/acting', '/contact']

  return (
    <header className="w-full bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="w-14 sm:w-12 md:w-16 lg:w-20 xl:w-24 rounded-lg bg-white flex items-center justify-center font-bold shadow-md border border-blue-300"
        >
          <img
            src={Logo}
            alt="Theo Breaux Logo"
            className="w-full h-full object-contain rounded-lg"
          />
        </NavLink>

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 z-30"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 sm:w-6 sm:h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <nav
          className={`
    ${isOpen ? 'block' : 'hidden'}
    sm:flex sm:items-center sm:gap-6 text-base font-medium
    sm:static sm:bg-transparent sm:shadow-none
    absolute top-full left-0 w-full bg-white shadow-md z-20
  `}
        >
          {links.map((path) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} block mt-4 sm:mt-0 hover:text-blue-400 transition px-4 py-2`}
            >
              {path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
