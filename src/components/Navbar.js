import { Link } from "react-router-dom";

//styles
import "./Navbar.css";

export default function Navbar() {
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
          <button class='btn'>Logout</button>
        </li>
      </ul>
    </div>
  );
}
