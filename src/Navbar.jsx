import { useState, useEffect } from 'react';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './assets/abm.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', href:'/services',
      submenu: [
        { name: 'Web Development', href: '/services' },
        { name: 'UI/UX Design', href: '/services' },
        { name: 'Mobile Apps', href: '/services' },
      ]
    },
    { name: 'About', href: '/aboutus' },
    { name: 'Contact', href: '/contactus' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[--bg-color] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} width={100} alt="" srcset="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="relative dropdown"
                onMouseEnter={() => item.submenu && setDropdownOpen(index)}
                onMouseLeave={() => item.submenu && setDropdownOpen(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium ${
                    scrolled ? 'text-[--text-color] hover:text-[--primary-color]' : '--primary-color hover:--secondary-color'
                  } transition-colors duration-200`}
                >
                  {item.name}
                  {item.submenu && (
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className="ml-1 w-3 h-3 transition-transform duration-200"
                    />
                  )}
                </a>

                {item.submenu && (
                  <div 
                    className="absolute top-full left-0 w-48 bg-[--bg-color] shadow-lg rounded-lg py-2 mt-1 transition-all duration-300 ease-out origin-top"
                    style={{
                      opacity: dropdownOpen === index ? 1 : 0,
                      transform: `scale(${dropdownOpen === index ? 1 : 0.95}) translateY(${dropdownOpen === index ? 0 : -10}px)`,
                      pointerEvents: dropdownOpen === index ? 'auto' : 'none',
                    }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-[--text-color] hover:bg-[--primary-color] transition-colors duration-200"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[--text-color] hover:text-[--primary-color] focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon 
                icon={isOpen ? faTimes : faBars} 
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[--bg-color] shadow-xl transition-all duration-300 ease-out`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index} className="dropdown">
                <div className="flex flex-col">
                  <a
                    href={item.href}
                    onClick={() => !item.submenu && setIsOpen(false)}
                    className="px-3 py-2 text-[--text-color] hover:text-[--secondary-color] hover:border-2 hover:border-[--secondary-color] rounded-md transition-colors duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <span>{item.name}</span>
                      {item.submenu && (
                        <button
                          onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                          className="p-1"
                        >
                          <FontAwesomeIcon 
                            icon={faChevronDown} 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              dropdownOpen === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  </a>

                  {item.submenu && (
                    <div 
                      className={`pl-4 overflow-hidden transition-all duration-300 ease-out ${
                        dropdownOpen === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-[--text-color] hover:bg-[--primary-color] rounded-md transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;