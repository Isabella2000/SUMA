import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
// import {data} from "../Pages/Login.jsx"


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const [authUsuario, setAuthUsuario] = useState({})
  const [authModulos, setAuthModulos] = useState([])

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario')) || {}
    setAuthUsuario(usuario)
    const modulos = JSON.parse(localStorage.getItem('modulos')) || []
    setAuthModulos(modulos)
  }, [])

  const guardar_sesion = (data) => {
    const { usuario, modulos } = data
    setAuthUsuario(usuario)
    setAuthModulos(modulos)
    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("modulos", JSON.stringify(modulos));
    navigate("/home")
  }

  const cerrar_salir = () => {
    setAuthUsuario({})
    localStorage.setItem('usuario', JSON.stringify({}))
    localStorage.setItem('modulos', JSON.stringify([]))
    setAuthModulos([])
    navigate("/")
  }

  return (
    <AuthContext.Provider
      value={{
        authUsuario, setAuthUsuario,
        authModulos, setAuthModulos,
        cerrar_salir, guardar_sesion
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext };

export default AuthProvider