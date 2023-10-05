import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';

import { AuthProvider } from './context/AuthProvider.jsx';

import Login from "./Pages/Login.jsx";
import Home from './Pages/Home.jsx';
import Layout from "./layout/Layout.jsx";
import Usuarios from "./Pages/Usuarios.jsx";
import AuthLayouth from './layout/AuthLayouth.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrimeReactProvider>
          <Routes>
            {/* Area Publica */}
            <Route path="/" element={<AuthLayouth />}>
              <Route index element={<Login />} />
            </Route>

            {/* Area Privada */}
            <Route path='/home' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="config/usuarios" element={<Usuarios />} />
            </Route>

          </Routes>
        </PrimeReactProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
