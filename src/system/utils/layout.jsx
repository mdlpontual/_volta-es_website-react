import ScrollToTop from "./scrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;
