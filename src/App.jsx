import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "../context/AuthProvider.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App