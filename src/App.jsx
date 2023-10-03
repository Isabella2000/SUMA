import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "../context/AuthProvider.jsx";
import Login from "./components/Login.jsx";
import Layout from "./layout/Layout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/layout" element={<Layout />}>
            {/* <Route index element={<Login />} /> */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App