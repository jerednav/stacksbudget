import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

//styles
import "./Sidebar.css";

export default function Sidebar() {
  const { logout } = useLogout();

  return (
    <div>
      <div className='sidebar'>
        <div className='sidebar-content'>
          <div className='logo'>Stacks</div>
          <nav className='links'>
            <ul>
              <li>
                <NavLink to='/budget'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/transactions'>Transactions</NavLink>
              </li>
            </ul>
          </nav>
          <div className='accounts-list'>
            <ul>
              <li>
                <h4>Accounts:</h4>
              </li>
              <li>
                <p>Chase $2000</p>
              </li>
              <li>
                <p>Discover $200</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
