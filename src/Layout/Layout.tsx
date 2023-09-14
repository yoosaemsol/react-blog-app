import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const NAVLESS_URL = ['/login', '/signup'];

const FOOTERLESS_URL = ['/posts/new', '/posts/edit/:id', '/login', '/signup'];

export default function Layout() {
  const location = useLocation();
  const shouldHideFooter = FOOTERLESS_URL.some((url) => {
    const pattern = new RegExp(`^${url.replace('/:id', '/\\d+')}$`);
    return pattern.test(location.pathname);
  });

  const shouldHideNav = NAVLESS_URL.some((url) => {
    const pattern = new RegExp(`^${url.replace('/:id', '/\\d+')}$`);
    return pattern.test(location.pathname);
  });

  return (
    <>
      <Navbar hideMenu={shouldHideNav} />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
}
