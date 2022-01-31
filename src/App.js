import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//styles
import "./App.css";

//pages and components
import Navbar from "./components/Navbar";
import Budget from "./pages/Budget/Budget";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Transactions from "./pages/Transactions/Transactions";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import AddTransaction from "./pages/AddTransaction/AddTransaction";
import TransactionDetails from "./pages/Transactions/TransactionDetails";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {!user && <Navbar />}
          <Routes>
            <Route element={<Layout user={user} />}>
              <Route
                path='/addtransaction'
                element={user ? <AddTransaction /> : <Login />}
              />
              <Route path='/budget' element={user ? <Budget /> : <Login />} />
              <Route
                path='/transactions'
                element={user ? <Transactions /> : <Login />}
              />
              <Route
                path='/login'
                element={
                  !user ? (
                    <div className='container'>
                      <Login />
                    </div>
                  ) : (
                    <Budget />
                  )
                }
              />
              <Route path='/signup' element={!user ? <Signup /> : <Budget />} />

              <Route
                path='/transactions/:id'
                element={
                  !user ? (
                    <div className='container'>
                      <Login />
                    </div>
                  ) : (
                    <TransactionDetails />
                  )
                }
              />
            </Route>
            <Route
              path='/'
              element={
                user ? (
                  <div className='container'>
                    <Navbar />
                    <Home />
                  </div>
                ) : (
                  <div className='container'>
                    <Login />
                  </div>
                )
              }
            />
          </Routes>
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
