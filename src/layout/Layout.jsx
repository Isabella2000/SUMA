import Sidebar from "../components/Sidebar"
import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Layout = () => {
    const { authUsuario } = useAuth()

    return (
        <>
            {authUsuario.id_usuario ?
                <div className="flex h-screen">
                    <Sidebar />
                    <main>
                        <Outlet />
                    </main>
                </div>
                : <Navigate to="/" />}
        </>
    )
}

export default Layout