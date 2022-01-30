import "./Home.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className='home'>
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
    </div>
  );
}
