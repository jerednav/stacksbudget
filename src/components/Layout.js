import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ user }) => (
  <>
    {user && <Sidebar />}
    <div className='container'>
      {!user && <Navbar />}
      <Outlet />
    </div>
  </>
);

export default Layout;
