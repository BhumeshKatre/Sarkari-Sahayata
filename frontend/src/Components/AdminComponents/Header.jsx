import React from 'react';
import LogoImg from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav className='w-full h-16 fixed top-0 left-0 flex justify-between align-middle  p-2 shadow-lg border-b-2 border-gray-300 box-border'>
        <div
          className='p-2 '>
          <img
            className='h-10 w-20'
            src={LogoImg}
            alt="Sarkari Sahayata" />
        </div>
        <div className='flex align-middle h-full p-2  '>
          <h1 className='text-2xl  font-bold opacity-20'>Admin Panel </h1>
        </div>
      </nav>
      
      <aside
        className='w-52 p-2 h-[100%] bg-gray-600 text-white fixed top-16 left-0 bottom-0 overflow-y-auto shadow-md'
      >
        <div className='h-full'>
          <Link
            to="/admin/dashboard"
            className='block p-3 hover:bg-gray-300 hover:text-gray-600 border-b border-gray-500 rounded-lg'
          >
            Dashboard
          </Link>
          <Link 
            to="/admin/schemes"
            className='block p-3 hover:bg-gray-300 hover:text-gray-600 border-b border-gray-500'
          >
            Manage Schemes
          </Link>
          <Link
            to="/admin/applications" 
            className='block p-3 hover:bg-gray-300 hover:text-gray-600 border-b border-gray-500'
          >
            Manage Jobs
          </Link>
          <Link
            to="/admin/users"
            className='block p-3 hover:bg-gray-300 hover:text-gray-600 border-b border-gray-500'
          >
            Manage Blogs
          </Link>
          <Link
            to="/admin/settings"
            className='block p-3 hover:bg-gray-300 hover:text-gray-600 border-b border-gray-500'
          >
            Settings
          </Link>
        </div>

        <Outlet />
      </aside>
    </>
  );
}

export default Header;
