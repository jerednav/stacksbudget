import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
//styles
import "./Navbar.css";

export default function Navbar() {
  const { logout, isPending } = useLogout();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>Stacks</li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
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
    </div>
  );
}
