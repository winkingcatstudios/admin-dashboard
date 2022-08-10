import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useAuth } from "./hooks/auth-hook";
import { AuthContext } from "./context/auth-context";

function App() {
  const { token, login, logout, userId } = useAuth();

  let router;

  const user = false;

  if (user) {
    router = (
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/newUser" element={<NewUser />}></Route>
            <Route path="/user/:userId" element={<User />}></Route>
            <Route path="/videos" element={<ProductList />}></Route>
            <Route path="/newVideo" element={<NewProduct />}></Route>
            <Route path="/videos/:videosId" element={<Product />}></Route>
          </Routes>
        </div>
      </Router>
    );
  } else {
    router = (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
