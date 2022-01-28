import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

//styles
import "./Signup.css";

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName, email, password);
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <div className='signup-content'>
        <h3 className='message'>
          We welcome you on your new financial journey!
        </h3>
        <p>
          Already signed up? <Link to='/login'>Login here</Link>
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
      {!isPending && <button className='btn'>Sign Up</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading...
        </button>
      )}
      {error && <div className='erro'>{error}</div>}
    </form>
  );
}
