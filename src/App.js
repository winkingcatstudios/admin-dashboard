import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/newProduct" element={<NewUser />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
