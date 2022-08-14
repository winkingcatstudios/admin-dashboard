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
import VideoList from "./pages/videoList/VideoList";
import Video from "./pages/video/Video";
import NewVideo from "./pages/newVideo/NewVideo";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import Login from "./pages/login/Login";
import { useAuth } from "./hooks/auth-hook";
import { AuthContext } from "./context/auth-context";
import { VideoContextProvider } from "./context/videoContext/VideoContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { UserContextProvider } from "./context/userContext/UserContext";

function App() {
  const { token, login, logout, userId } = useAuth();

  let router;

  if (token) {
    router = (
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/newUser" element={<NewUser />}></Route>
            <Route path="/users/:userId" element={<User />}></Route>
            <Route path="/videos" element={<VideoList />}></Route>
            <Route path="/newVideo" element={<NewVideo />}></Route>
            <Route path="/videos/:videoId" element={<Video />}></Route>
            <Route path="/lists" element={<ListList />}></Route>
            <Route path="/newList" element={<NewList />}></Route>
            <Route path="/lists/:listId" element={<List />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
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
      <VideoContextProvider>
        <ListContextProvider>
          <UserContextProvider>{router}</UserContextProvider>
        </ListContextProvider>
      </VideoContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
