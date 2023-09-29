import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [authUsuario, setAuthUsuario] = useState({})
    const [authPerfil, setAuthPerfil] = useState({})

  return (
    <AuthContext.Provider
        value={{authUsuario, setAuthUsuario, authPerfil, setAuthPerfil }}
    >
    {children}
    </AuthContext.Provider>
  )
}

export {AuthContext};

export default AuthProvider