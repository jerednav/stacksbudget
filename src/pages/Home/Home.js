import "./Home.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className='home'>
      <section>
        {!user && (
          <div className='description'>
            <h5>Your new budgeting buddy.</h5>
            <ul>
              <li>✅ Budgeting App</li>
              <li>✅ Expense Tracker</li>
              <li>✅ Investments</li>
            </ul>
          </div>
        )}
        {user && <Navigate to='/budget' />}
      </section>
    </div>
  );
}
