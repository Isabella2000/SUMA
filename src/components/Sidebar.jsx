import {
    AlignJustify,
    BadgePlus,
    Building2,
    User2,
    UserSquare2
  } from "lucide-react";
  import { useState } from "react";
  
  function Sidebar() {
  
      const [sidebar, setSidebar] = useState(true)
  
    return (
      <aside className="h-screen">
        <nav className={`${sidebar ? "w-60" : "w-16"} h-full flex flex-col bg-white border-r shadow-sm` }>
          {/* informacion del usuario */}
          <div className=" flex p-3 mx-4">
            <img
              src="https://img.freepik.com/vector-premium/avatar-hombre-sonriente-joven-hombre-bigote-barba-marron-cabello-sueter-amarillo-o-sudadera-ilustracion-personaje-personas-vector-3d-estilo-minimalista-dibujos-animados_365941-860.jpg?w=740"
              alt=""
              className={`w-10 h-10 rounded-md ${sidebar ? "" : "hidden"}`}
            />
            <div className={`flex justify-between items-center w-40 ml-3  ${sidebar ? "" : "hidden"}`}>
              <div className={`leading-4 ${sidebar ? "" : "hidden"}`}>
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">Admin</span>
              </div>
            </div>
              <button onClick={e => setSidebar(!sidebar)}>
                <AlignJustify size={20} />
              </button>
          </div>
          {/* opciones del sidebar */}
          <div className="mt-6">
            <button className="flex p-2 hover:bg-primaryYellow hover:rounded-md mx-4">
              <UserSquare2 size={20} />
              <div className={`flex justify-between items-center ${sidebar ? "w-40" : "hidden"}`}>
              <div className="leading-4">
                  <h4 className={`font-semibold ml-4 ${sidebar ? "" : "hidden"}`}>Clientes</h4>
                </div>
              </div>
            </button>
            <button className=" flex p-2 hover:bg-primaryYellow hover:rounded-md mx-4">
              <Building2 size={20} />
              <div className={`flex justify-between items-center ${sidebar ? "w-40" : "hidden"}`}>
                <div className="leading-4">
                  <h4 className={`font-semibold ml-4 ${sidebar ? "" : "hidden"}`}>Proveedores</h4>
                </div>
              </div>
            </button>
            <button className=" flex p-2 hover:bg-primaryYellow hover:rounded-md mx-4">
              <User2 size={20} />
              <div className={`flex justify-between items-center ${sidebar ? "w-40" : "hidden"}`}>
                <div className="leading-4">
                  <h4 className={`font-semibold ml-4 ${sidebar ? "" : "hidden"}`}>Usuarios</h4>
                </div>
              </div>
            </button>
            <button className=" flex p-2 hover:bg-primaryYellow hover:rounded-md mx-4">
              <BadgePlus size={20} />
              <div className={`flex justify-between items-center ${sidebar ? "w-40" : "hidden"}`}>
                <div className="leading-4">
                  <h4 className={`font-semibold ml-4 ${sidebar ? "" : "hidden"}`}>Otros</h4>
                </div>
              </div>
            </button>
          </div>
        </nav>
      </aside>
    );
  }
  
  export { Sidebar };
  