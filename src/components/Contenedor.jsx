import './contenedor.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contenedor = () => {
    return (
        <div className='flex bg-white rounded-lg ring-1 ring-slate-900/5 shadow-xl max-w-4xl mx-auto'>
            <div className=" px-6 py-8 w-1/2">
                <h3 className="text-slate-900  mt-1 text-2xl font-bold ">SUMA</h3>
                <p className="text-slate-500  mt-3 text-md">Sistema Unificado de Mejora</p>
                <form action="" className="flex space-y-7 flex-col w-100">
                    <select className="w-full mt-7 px-4 py-2 border rounded-lg focus:outline-none "> Selecciona perfil
                        <option selected>Selecciona Un Perfil</option>
                        <option>SuperAdministrador</option>
                        <option>Administrador</option>
                        <option>Cliente</option>
                    </select>

                    <div>
                        {/* <label htmlFor="usuario">Usuario</label> */}
                        <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" type="text" id="usuario" placeholder="Usuario" />
                    </div>

                    <div>
                        {/* <label htmlFor="contrasena">Contraseña</label> */}
                        <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" type="password" id="contrasena" placeholder="Contraseña" />
                    </div>

                    <input type="submit" value="Ingresar" className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none bg-yellow-200 hover:bg-yellow-300"/>
                </form>
            </div>

            <div className='bg-yellow-200 w-4/5'>
            <img src="/src/img/pexels-ann-h-4672949.jpg" alt="" className='h-full'/>
            </div>
        </div>
    )
}

export { Contenedor } 