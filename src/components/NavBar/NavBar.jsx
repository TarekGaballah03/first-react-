import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-[#2C3E50] fixed top-0 right-0 left-0 py-8 z-50 text-white'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="home" className="text-3xl font-bold uppercase">Start Framework</Link>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <i className='fas fa-bars w-5 h-5 text-white text-xl'></i>
        </button>
        <div className={`md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
          <ul className='flex md:flex-row gap-3 uppercase font-bold '>
          <NavLink 
                to="about" 
                className={({ isActive }) => 
                  isActive ? 'bg-[#1ABC9C] text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out' 
                            : 'hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out'
                }
              >
                About
              </NavLink>
            <li><NavLink to="portfolio"className={({ isActive }) => 
                  isActive ? 'bg-[#1ABC9C] text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out'
                           : 'hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out'
                }>Portfolio</NavLink></li>
            <li><NavLink to="contact" className={({ isActive }) => 
                  isActive ? 'bg-[#1ABC9C] text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out' 
                            : 'hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out'
                }>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
