import React from 'react';
// import TopBarLogo from '../path/to/TopBarLogo.png'; // Replace '../path/to/TopBarLogo.png' with the relative path to your logo file

const TopBar = () => {
  return (
    <header className="bg-white px-4 py-3 flex w-4/5 mx-auto">
      <nav className="flex flex-1 items-center gap-10">
        <img src="/TopBarLogo.png" alt="logo" />
        <ul className="ml-4 font-bold flex gap-10" >
          <li className="flex items-center"><span>Solution</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 text-blue-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          </li>
          <li className="flex items-center"><span>Features</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1  text-blue-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg></li>
          <li className="flex items-center"><span>Blogs</span></li>
          <li className="flex items-center" ><span>About</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1  text-blue-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg></li>
        </ul>
      </nav>
      <div>
        <button className="bg-white-500 border border-blue-300 font-bold text-blue-500 py-2 px-4 rounded mr-6 ">
          Log In
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </header>
  );
};

export default TopBar;
