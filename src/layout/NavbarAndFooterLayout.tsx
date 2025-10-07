import { Outlet } from "react-router";
import  Navbar  from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Layout.css"


const NavbarAndFooterLayout = () => (
  <div className="layout">
    <Navbar />
      <main className="content">
        <Outlet />
      </main>
    <Footer />
  </div>
);

export default NavbarAndFooterLayout;
