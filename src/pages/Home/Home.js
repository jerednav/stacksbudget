import "./Home.css";
import Sidebar from "../../components/Sidebar";
// import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  // const { user } = useAuthContext();

  return (
    <div className='home'>
      <div className='description'>
        <Sidebar />
        <h5>Your new budgeting buddy.</h5>
        <ul>
          <li>✅ Budgeting App</li>
          <li>✅ Expense Tracker</li>
          <li>✅ Investments</li>
        </ul>
      </div>
    </div>
  );
}
