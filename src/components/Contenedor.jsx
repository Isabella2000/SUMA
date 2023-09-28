import '../App.css'
import axios from 'axios'
import { useState } from "react"

const Contenedor = () => {

    const [perfil, setPerfil] = useState("")
    const [usuario, setUsuario] = useState("")
    const [clave, setClave] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        const login = async () => {
            console.log("Iniciando función login");
            const body = {
                "perfil": perfil,
                "usuario": usuario,
                "clave": clave
            }

            try {
                const respuesta = await axios.post('http://192.168.88.161:3000/suma/api/usuarios/autenticar_usuario', body, { mode: "cors" })
                const json = await respuesta.data
                console.log("Datos JSON:", json);
            } catch (error) {
                console.error("Error en la solicitud:", error)
            }
        }

        login()
    }




    return (
        <div className="h-screen flex items-center justify-center container mx-auto ">

            <div className='flex bg-white rounded-lg shadow-xl max-w-5xl flex-wrap' >
                <div className="w-full sm:w-full md:w-1/2  lg:w-1/2  xl:w-1/2 p-4" >
                    <h3 className="text-slate-900  mt-1 text-2xl text-center">SUMA</h3>
                    <p className="text-slate-500  my-4 text-md text-center">Sistema Unificado de Mejora</p>
                    <form onSubmit={handleSubmit} id='mySelect' className="flex space-y-7 flex-col">
                        <select onChange={(e)=>setPerfil(e.target.value)} className=" px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 appearance-none"> Selecciona perfil
                            <option selected>Selecciona Un Perfil</option>
                            <option value="1">Administrador</option>
                            <option value="2">Consultor</option>
                        </select>

                        <div>
                            <input className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-200" type="text" id="usuario" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
                        </div>

                        <div>
                            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200" type="password" id="contrasena" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)} />
                        </div>

                        <input type="submit" value="Ingresar" className="w-full px-4 py-2 border-2 border-yellow-300 rounded-lg bg-yellow-200 hover:bg-yellow-300 font-bold" />

                    </form>
                </div>

                <div className=' rounded-r-lg w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 hidden md:block'>
                    <img src="/src/img/pexels-ann-h-4672949.jpg" alt="" className='h-full rounded-r-lg' />
                </div>
            </div>
        </div>
    )
}

export { Contenedor } 