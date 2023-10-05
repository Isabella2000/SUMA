import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import conexionCliente from "../config/ConexionCliente";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const [authUsuario, setAuthUsuario] = useState({})
  const [authModulos, setAuthModulos] = useState([])

  // useEffect(() => {
  //   const usuario = JSON.parse(localStorage.getItem('usuario')) || {}
  //   setAuthUsuario(usuario)
  // }, [])


  useEffect(() => {
    const autenticarUsuario = async () => {
      //Se extrae el JWT para aprobar el inicio de sesion.
      const token = localStorage.getItem('token')
      //  console.log(token)
      if (!token) {
        // setCargando(false)
        return
      }

      //Bearer token y lo revisa en el checkout del backend.
      const config = {
        headers: {
          "Content-Type": "apllication/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {
        const { data } = await conexionCliente('/usuarios/perfil', config)
        setAuthUsuario(data)
        setAuthModulos(JSON.parse(localStorage.getItem('modulos')));
        //Siempre que haya un token al iniciar, redireccionara a la pag principal.
        navigate('/home')
      } catch (error) {
        setAuthUsuario({})
        navigate('/')
      }
    }
    autenticarUsuario()
  }, [])


  // const guardar_sesion = (data) => {
  //   const { usuario, modulos } = data
  //   setAuthUsuario(usuario)
  //   setAuthModulos(modulos)
  //   localStorage.setItem("usuario", JSON.stringify(usuario));

  //   return true
  // }

  const cerrar_salir = () => {
    setAuthUsuario({})
    setAuthModulos([])
    localStorage.removeItem('token')
    localStorage.removeItem('modulos')
    // localStorage.setItem('usuario', JSON.stringify({}))
    // localStorage.setItem('modulos', JSON.stringify([]))
    // setAuthModulos([])
    navigate("/")
  }

  return (
    <AuthContext.Provider
      value={{
        authUsuario, setAuthUsuario,
        authModulos, setAuthModulos,
        cerrar_salir
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };

export default AuthContext 