import '../App.css'
import { useRef, useState } from "react"
import { Navigate } from "react-router-dom"
import Error from "../components/Error"
import useAuth from '../hooks/useAuth'
import conexionCliente from '../config/ConexionCliente'
import ReCAPTCHA from "react-google-recaptcha";


const Login = () => {
    const {authUsuario, guardar_sesion } = useAuth()

    const captcha = useRef(null)
    const captchakey = import.meta.env.VITE_CAPTCHA_KEY

    const [usuario, setUsuario] = useState("")
    const [clave, setClave] = useState("")
    const [error, setError] = useState({ error: false, message: '' })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([usuario, clave].includes("")) {
            setError({ error: true, message: "Hay campos vacios" })
            setTimeout(() => {
                setError({ error: false, message: "" })
            }, 1500)

        } else {
            setError({ error: false, message: "" })
            const body = {
                "usuario": usuario,
                "clave": clave,
                "captcha": captcha.current.getValue()
            }

            try {
                const respuesta = await conexionCliente.post('usuarios/autenticar_usuario', body, { mode: "cors" })
                const data = await respuesta.data

                if (data?.error) {
                    setError({ error: true, message: data.message })
                    setUsuario("")
                    setClave("")
                    setTimeout(() => {
                        setError({ error: false, message: "" })
                    }, 1500)
                    return
                }
                guardar_sesion(data)

            } catch (error) {
                setError({ error: true, message:"Ha ocurrido un error" })
                setTimeout(() => {
                    setError({ error: false, message: "" })
                }, 1500)
                return
            }
        }
    }


    return (
        <>
            {
                authUsuario.id_usuario ?
                    <Navigate to="/layout" />
                    :
                    <div className="h-screen flex items-center justify-center container mx-auto ">
                        <div className='flex bg-white rounded-lg shadow-xl max-w-5xl flex-wrap' >
                            <div className="w-full sm:w-full md:w-1/2  lg:w-1/2  xl:w-1/2 p-4 flex justify-center items-center flex-col" >
                                <h3 className="text-slate-900  mt-1 text-3xl font-semibold text-center ">Ingrese a <span className='text-primaryYellow'>SUMA</span></h3>
                                <h4 className="text-slate-500  my-4 text-sm text-center">Sistema Unificado de Mejora y Autogestion</h4>
                                <form onSubmit={e => handleSubmit(e)} id='mySelect' className="flex space-y-7 flex-col w-3/4">
                                    {error.error ? <Error>{error.message}</Error> : ""}
                                    <div>
                                        <input className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-200" type="text" id="usuario" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} value={usuario} />
                                    </div>

                                    <div>
                                        <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200" type="password" id="contrasena" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)} value={clave} />
                                    </div>

                                    <div className='recaptcha self-center'>
                                        <ReCAPTCHA
                                            ref={captcha}
                                            sitekey={captchakey}
                                        />
                                    </div>

                                    <input type="submit" value="Ingresar" className="w-full px-4 py-2 border-2 border-primaryYellow rounded-lg bg-secundaryYellow hover:bg-primaryYellow font-bold" />
                                </form>
                            </div>
                            <div className=' rounded-r-lg w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 hidden md:block'>
                                <img src="/src/img/img_login.png" alt="" className='h-full rounded-r-lg' />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Login