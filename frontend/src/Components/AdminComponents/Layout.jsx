import React from 'react';
import Header from './Header';
import Aside from './Aside';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  return (
    <div className={`admin-layout ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <Header onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />
      <div className="content-wrapper">
        <Aside isCollapsed={isSidebarCollapsed} />
        <main className="mt-24 ms-56">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
