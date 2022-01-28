import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Budget />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
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
