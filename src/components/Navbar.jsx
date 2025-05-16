import { useState } from "react";

const NavBar = () => {
    const nav_items = "hover:cursor-pointer hover:text-dark-green"
    const [menuOpen, setMenuOpen] = useState(false)
    function toogleMenu (){
        setMenuOpen(!menuOpen)
    }

  return (
    <>
        <nav className="fixed top-0 w-full flex items-center justify-between z-50 py-10 font-medium text-lg md:text-[24px] border-b border-[#E1E1E1] bg-white h-[80px]">

          <div>
            <img className="w-50" src="assets/Logo-v2.png" alt="Logo"/>
          </div>
         
          <div className="md:flex md:ml-auto md:mr-auto text-lg hidden items-center justify-center gap-10">
            <a className={nav_items} href="#Para-ti">Para Ti</a>
            <a className={nav_items} href="#testimonios">Nuestros Usuarios</a>
            <a className={nav_items} href="#ComoFunciona">Cómo funciona</a>
            <a className={nav_items} href="#cta">Únete</a>
          </div>

          <div className="md:flex hidden mr-10 gap-2 text-lg">
            <button className=" bg-sky-green rounded-2xl md:py-2 md:px-3 hover:cursor-pointer">
              Iniciar Sesión
            </button>
            <button className="bg-dark-green rounded-2xl py-0 md:py-2 md:px-3 hover:cursor-pointer">
              Registrarse
            </button>
          </div>
          <div className="flex items-center w-10 h-10 md:hidden mr-5">
            <button className="text-gray-700 focus:outline-none" onClick={toogleMenu}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
            </button>
          </div>


      </nav>
          {menuOpen && (
            <div className="md:hidden bg-white border-t mt-10 fixed w-full z-50">
              <a href="#Para-ti" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Para Ti</a>
              <a href="#testimonios" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Nuestros Usuarios</a>
              <a href="#ComoFunciona" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cómo funciona</a>
              <a href="#cta" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Únete</a>
              <a href="#" className="block px-4 py-2 text-[#245e4f] font-bold hover:bg-gray-100">Iniciar Sesion</a>
              <a href="#" className="block px-4 py-2 text-[#245e4f] font-bold hover:bg-gray-100">Registrarse</a>
            </div>
          )}
    </>
  );
};

export default NavBar;
