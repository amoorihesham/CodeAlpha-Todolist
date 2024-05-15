import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import TopNav from '../Top-nav/TopNav';

const Layout = () => {
  return (
    <>
      <TopNav />
      <Toaster />
      <Outlet />
    </>
  );
};

export default Layout;
