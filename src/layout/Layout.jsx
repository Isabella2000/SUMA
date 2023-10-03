import Navbar from "../components/Navbar"
import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Layout = () => {
    const { authUsuario } = useAuth()

    return (
        <>
            {authUsuario.id_usuario ?
                <div className="flex h-screen">
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                </div>
                : <Navigate to="/" />}
        </>
    )
}

export default Layout