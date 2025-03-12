import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import './layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="rightbar">
        <Navbar />
        <div className="wraper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
