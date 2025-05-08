 import React from 'react';
import {
  FiHome,
  FiUsers,
  FiPackage,
  FiSettings,
} from "react-icons/fi";
import { Link } from 'react-router-dom';
const Aside = () => {
   
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FiHome className="w-5 h-5" />,
      path: "/admin/dashboard",
    },
    {
      title: "Schemes",
      icon: <FiUsers className="w-5 h-5" />,
      path: "/admin/schemes",
     
    },
    {
      title: "Jobs",
      icon: <FiPackage className="w-5 h-5" />,
      path: "/admin/jobs",
    },
    {
      title: "Blogs",
      icon: <FiPackage className="w-5 h-5" />,
      path: "/admin/blogs",
    },
    {
      title: "Settings",
      icon: <FiSettings className="w-5 h-5" />,
      path: "/admin/settings",
    },
  ];
  return (
    <>
      <aside
        className='w-52 p-2 h-[100%] bg-gray-600 text-white fixed top-16 left-0 bottom-0 overflow-y-auto shadow-md'>
      
        {
          menuItems.map((menu) => (
            <Link 
              className='block p-3 hover:bg-gray-300 hover:text-gray-600 border-b border-gray-500 rounded-lg'
              to={menu.path}
            >
              {menu.title}
            </Link>
          ))
        }

     </aside>
    </>  
  
  );
 }
 
 export default Aside;
 