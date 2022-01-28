//styles
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <form className='auth-form'>
      <div className='signup-content'>
        <h1 className='title'>Sign Up</h1>
        <h3 className='message'>
          We welcome you on your new financial journey!
        </h3>
        <p>
          Already signed up? <Link to='/'>Login here</Link>
        </p>
      </div>
      <label>
        <span>Name:</span>
        <input
          required
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
        <label>
          <span>Email:</span>
          <input
            required
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
      </label>
    </form>
  );
}
