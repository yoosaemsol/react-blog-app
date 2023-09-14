import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const FOOTERLESS_URL = ['/posts/new'];

export default function Layout() {
  const location = useLocation();
  const shouldHideFooter = FOOTERLESS_URL.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
}
