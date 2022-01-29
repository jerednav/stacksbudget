import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//styles
import "./App.css";

//pages and components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Budget from "./pages/Budget/Budget";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Transactions from "./pages/Transactions/Transactions";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            {!user && <Navbar />}
            <Routes>
              <Route path='/budget' element={user ? <Budget /> : <Login />} />
              <Route
                path='/transactions'
                element={user ? <Transactions /> : <Login />}
              />
              <Route path='/login' element={!user ? <Login /> : <Budget />} />
              <Route path='/signup' element={!user ? <Signup /> : <Budget />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

/* pages 

-budget (homepage)
-login
-sign up
-transactions


*/
