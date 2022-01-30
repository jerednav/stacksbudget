import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavLink } from "react-router-dom";

//styles
import "./Navbar.css";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <Link to='/'>Stacks</Link>
        </li>

        {!user ? (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </>
        ) : (
          <>
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
            <ul>
              <li>
                {!isPending && (
                  <button className='btn' onClick={logout}>
                    Logout
                  </button>
                )}
                {isPending && (
                  <button className='btn' disabled>
                    Logging out...
                  </button>
                )}
              </li>
            </ul>
          </>
        )}
      </ul>
    </div>
  );
}
