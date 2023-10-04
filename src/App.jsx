import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./Pages/Login.jsx";
import Layout from "./layout/Layout.jsx";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primeicons/primeicons.css';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrimeReactProvider>
          <Routes>
            <Route index element={<Login />} />
          </Routes>

          {/* RUTAS DESPUES DE INICIAR SESION */}

          {/* <GlobalProvider> */}
          <Routes>
            <Route path="/home" element={<Layout />} />
          </Routes>
          {/* </GlobalProvider> */}
        </PrimeReactProvider>
      </AuthProvider>
    </BrowserRouter >
  )
}

export default App