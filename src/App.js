import "./App.css";
import { createContext, useState } from "react";

import Todo from "./pages/Todo.jsx";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register.jsx";

export const auth = createContext(null);

function App() {
  const [state, setstate] = useState(0);

  const ProtectedRouteMainAdmin = ({ children }) => {
    if (localStorage.getItem("_auth")) {
      return children;
    }
    return <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <auth.Provider value={{ state, setstate }}>
        <Navbar />
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route
            path={"/"}
            element={
              <ProtectedRouteMainAdmin>
                <Todo />
              </ProtectedRouteMainAdmin>
            }
          />
          \
        </Routes>
      </auth.Provider>
    </BrowserRouter>
  );
}

export default App;
