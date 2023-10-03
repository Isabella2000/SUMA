import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const [authUsuario, setAuthUsuario] = useState({})
  const [authPerfil, setAuthPerfil] = useState([])

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario')) || {}
    setAuthUsuario(usuario)
    const perfiles = JSON.parse(localStorage.getItem('perfiles')) || []
    setAuthPerfil(perfiles)
  }, [])


  const handleSalir = () => {
    setAuthUsuario({})
    localStorage.setItem('usuario', JSON.stringify({}))
    localStorage.setItem('perfiles', JSON.stringify([]))
    setAuthPerfil([])
    navigate("/")
  }


  return (
    <AuthContext.Provider
      value={{ authUsuario, setAuthUsuario, authPerfil, setAuthPerfil, handleSalir }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext };

export default AuthProvider