import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { BadgePlus, Building2, LogOut, User2, UserSquare2 } from "lucide-react";
import useAuth from '../../hooks/useAuth'


const Menus = [
    { title: "Clientes", icon: <User2 /> },
    { title: "Proveedores", icon: <Building2 /> },
    {
        title: "Usuarios",
        src: "Services",
        icon: <UserSquare2 />,
        subMenus: [
            {
                title: "Lista de Perfiles",
                src: "/services/services1",

                cName: "sub-nav",
            },
            {
                title: "Lista de Usuarios",
                src: "/services/services2",

                cName: "sub-nav",
            },
        ],
        isOpen: false,
    },
    { title: "Otros", icon: <BadgePlus /> },
];

const Navbar = () => {

    const { handleSalir } = useAuth()

    const [Menu, SetMenu] = useState(Menus);
    const [open, setOpen] = useState(true);
    const setSubMenuOpen = (index) => {
        SetMenu((prevMenus) =>
            prevMenus.map((menu, i) => {
                if (i === index) {
                    return { ...menu, isOpen: !menu.isOpen };
                }
                return menu;
            })
        );
    };
    const toggleSidebar = () => {
        setOpen(!open);
    };



    return (

        <div className="h-full flex border-r shadow-sm">
            <button
                className="fixed lg:hidden z-90 bottom-10 right-8 bg- bg-primaryYellow w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-amber-500 duration-300"
                onClick={toggleSidebar}
            >
                <span className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 m-auto"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
                        />
                    </svg>
                </span>
            </button>

            <div
                className={` ${open ? "w-48 px-2" : "w-16"
                    } lg:w-48 h-screen relative duration-500 bg-white`}
            >
                <div className=" flex p-2 mx-1">
                    <img
                        src="https://img.freepik.com/vector-premium/avatar-hombre-sonriente-joven-hombre-bigote-barba-marron-cabello-sueter-amarillo-o-sudadera-ilustracion-personaje-personas-vector-3d-estilo-minimalista-dibujos-animados_365941-860.jpg?w=740"
                        alt=""
                        className={`w-10 h-10 rounded-md`}
                    />
                    <div className={`flex justify-between items-center w-40 ml-3`}>
                        <div className={`leading-4 ${!open && "invisible"}`}>
                            <h4 className=" font-semibold">John Doe</h4>
                            <span className=" text-xs text-gray-600">Admin</span>
                        </div>
                    </div>
                </div>

                <ul className={`pt-6`}>
                    {Menu.map((Menu, index) => (
                        <div key={index}>
                            <li
                                onClick={() => setSubMenuOpen(index)}
                                className={`flex rounded-md p-2 mx-2 cursor-pointer hover:bg-primaryYellow text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"
                                    }`}
                            >
                                <div className="mx-1">
                                    {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                                </div>
                                {open && <span>{Menu.title}</span>}
                                {open && Menu.subMenus && (
                                    <BsChevronDown className={Menu.isOpen && "rotate-180"} />
                                )}
                            </li>

                            {Menu.subMenus && Menu.isOpen && open && (
                                <ul className="bg-slate-100 m-2 rounded-md">
                                    {Menu.subMenus.map((subMenuItem, idx) => (
                                        <li
                                            key={idx}
                                            className="flex px-5 rounded-md cursor-pointer m-2 text-center hover:bg-gray-300 text-sm py-1"
                                        >
                                            {subMenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </ul>
                <div className="p-2 mx-2 rounded-md cursor-pointer hover:bg-amarillo text-sm items-center gap-x-4">
                    {/* Agrega el botón "Salir" fuera del mapeo */}
                    <div className="mx-1 gap-x-4 flex">
                        <LogOut />
                        {open && <span onClick={handleSalir}>Salir</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar