import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./Pages/Login.jsx";
import Layout from "./layout/Layout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
        </Routes>

        {/* RUTAS DESPUES DE INICIAR SESION */}
        
        {/* <GlobalProvider> */}
        <Routes>
          <Route path="/layout" element={<Layout />} />
        </Routes>
        {/* </GlobalProvider> */}

      </AuthProvider>
    </BrowserRouter >
  )
}

export default App