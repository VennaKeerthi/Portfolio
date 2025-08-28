import React, { useState } from "react";
import { socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      {/* Mobile Menu Icon */}
      <div className="flex justify-between items-center py-2 md:py-10">
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${!isOpen ? "hidden" : ""} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content text-lg font-bold md:flex items-center md:space-x-8 md:mr-10">
          <li>
            <a href="#home" onClick={toggleClass} className="text-2xl hover:underline underline-offset-4">
               Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleClass} className="text-2xl hover:underline underline-offset-4">
            About
          </a>
        </li>
        <li>
          <a href="#technologies" onClick={toggleClass} className="text-2xl hover:underline underline-offset-4">
            Technologies
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleClass} className="text-2xl hover:underline underline-offset-4">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleClass} className="text-2xl hover:underline underline-offset-4">
            Contact
          </a>
        </li>

        </ul>

        {/* Social Links */}
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              {/* LinkedIn Icon */}
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.6C7.05 0.6 0.6 7.05 0.6 15C0.6 22.95 7.05 29.4 15 29.4C22.95 29.4 29.4 22.95 29.4 15C29.4 7.05 22.95 0.6 15 0.6ZM11.5 21H8.56V11.6h2.92V21Zm-1.48-10.5c-0.92 0-1.52-0.65-1.52-1.46 0-0.83 0.61-1.47 1.55-1.47s1.53 0.64 1.55 1.47c0 0.81-0.6 1.46-1.58 1.46ZM22.1 21h-2.92v-5.2c0-1.21-0.42-2.03-1.48-2.03-0.8 0-1.28 0.55-1.48 1.08-0.08 0.19-0.1 0.46-0.1 0.74V21h-2.92v-6.4c0-1.17-0.04-2.15-0.06-3.02h2.54l0.13 1.3h0.06c0.35-0.58 1.23-1.41 2.67-1.41 1.93 0 3.38 1.27 3.38 4.01V21Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              {/* GitHub Icon */}
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7 0 0 6.7 0 15c0 6.64 4.29 12.24 10.26 14.23 0.75 0.13 1.03-0.33 1.03-0.73 0-0.36-0.02-1.55-0.02-2.8-3.77 0.69-4.75-1.52-5.05-2.36-0.17-0.44-0.9-1.77-1.54-2.13-0.52-0.28-1.27-0.96-0.02-0.98 1.18-0.02 2.02 1.1 2.33 1.56 1.35 2.27 3.51 1.63 4.38 1.23 0.14-0.99 0.53-1.63 0.96-2.01-3.34-0.37-6.83-1.67-6.83-7.42 0-1.64 0.58-2.98 1.55-4.04-0.16-0.39-0.67-1.96 0.15-4.09 0 0 1.27-0.41 4.16 1.56 1.2-0.33 2.49-0.5 3.77-0.5s2.57 0.17 3.77 0.5c2.89-1.97 4.16-1.56 4.16-1.56 0.82 2.13 0.31 3.7 0.15 4.09 0.97 1.06 1.55 2.4 1.55 4.04 0 5.77-3.5 7.05-6.85 7.42 0.54 0.47 1.04 1.39 1.04 2.8 0 2.02-0.02 3.65-0.02 4.15 0 0.4 0.27 0.86 1.04 0.72C25.71 27.23 30 21.63 30 15c0-8.3-6.7-15-15-15Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
