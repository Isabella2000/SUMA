import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "../context/AuthProvider.jsx";
import Login from "./components/Login.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App