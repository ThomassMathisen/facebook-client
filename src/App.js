import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Register />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App;