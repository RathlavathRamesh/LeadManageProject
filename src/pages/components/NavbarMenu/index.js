"use Client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const MobileNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { InconsArray } = props;

  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);

  const toggleMenu = () => {
    console.log("Toggle Menu Is Called")
    console.log(isOpen)
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-[0.7rem] mr-[0.2rem] py-[0.4rem] rounded-sm bg-gray-400 text-white relative"> {/* Make the navbar container relative */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-[5rem] rounded-sm bg-gray-800 text-white p-4 border border-gray-300"> {/* Set the menu container position to absolute */}
          <ul className="list-none">
            {InconsArray.map((each, index) => ( // Added index to use as key
              <li key={index} className='p-[0.3rem] mt-[0.3rem]  hover:bg-blue-700'>
                {each.svgElement}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex items-center" onClick={toggleMenu}> {/* Moved onClick to the navbar container */}
        <div className="menu-icon">
          <div className="w-6 h-px bg-white mb-1"></div>
          <div className="w-6 h-px bg-white mb-1"></div>
          <div className="w-6 h-px bg-white mb-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
