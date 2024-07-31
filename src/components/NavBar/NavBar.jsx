import { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navbarHeight, setNavbarHeight] = useState('py-6'); 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarHeight('py-2'); 
      } else {
        setNavbarHeight('py-6'); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
<nav className={`bg-[#2C3E50] fixed top-0 right-0 left-0 ${navbarHeight} transition-all duration-600 ease-in z-50 text-white`}>
  <div className="container mx-auto  flex flex-wrap items-center justify-between ">
    <Link to="home" className="text-3xl font-bold uppercase">Start Framework</Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="uppercase font-bold text-white flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <NavLink to="about"  className=" inline-block  py-2 sm:m-3 px-3 transition-colors duration-300 ease-in-out  hover:bg-[#1ABC9C] hover:bg-opacity-30 hover:rounded-lg hover:transition-colors hover:duration-300 hover:ease-in-out  " aria-current="page">About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className=" inline-block py-2 sm:m-3 px-3 transition-colors duration-300 ease-in-out  hover:bg-[#1ABC9C] hover:bg-opacity-30 hover:rounded-lg hover:transition-colors hover:duration-300 hover:ease-in-out ">portfolio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className=" inline-block py-2 sm:m-3 sm:mb-0 px-3 transition-colors duration-300 ease-in-out  hover:bg-[#1ABC9C] hover:bg-opacity-30 hover:rounded-lg hover:transition-colors hover:duration-300 hover:ease-in-out ">contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>








    </div>
  );
}

export default Navbar;
