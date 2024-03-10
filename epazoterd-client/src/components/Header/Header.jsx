import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { checkLogin } from "../../api";

function Header() {
  const [isMenu, setIsMenu] = useState(false)
  const [isMd, setIsMd] = useState(false)
  const [userInfo, setUserInfo] = useState('')

  useEffect(() => {
    async function userData() {
      try {
        const res = await checkLogin()
        setUserInfo(res.data.user)
      } catch (error) {
        console.log(error)
      }
    }

    userData()
  }, [])

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMd(true)
    } else {
      setIsMd(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  function submitLogout() {
    return fetch(`http://localhost:8000/api/auth/logout`, {
      credentials: "include",
      method: "POST",
      body: "",
    }).then(res => window.location.reload(false));
  }

  return (
    <header className="sticky top-0 left-0 right-0 pt-5 z-50 bg-blackBodyBg">
      <div className="md:container mx-auto">
        <div className="flex justify-between items-center">
          <Link to='/'>
            <img src="./logo.png" alt="" className="w-32" />
          </Link>
          {!userInfo.username ? <Link to='login' className="bg-blue-500 text-blackBodyBg px-2 py-1 font-semibold rounded-xl">Iniciar sesion</Link> :
            <div className="relative group">
              <button className="flex items-center justify-center gap-2">Hola, {userInfo.username} <FaChevronDown /></button>
              <div className="text-xs flex flex-col gap-2 w-28 scale-0 group-hover:scale-100 absolute bg-customBlack p-2 rounded-xl">
                <button>
                  <Link to='perfil'>Editar perfil</Link>
                  </button>
                <button onClick={submitLogout}>Cerrar sesion</button>
              </div>
            </div>
          }
          {!isMenu ? <button onClick={() => setIsMenu(true)} className="inline-block md:hidden">
            <IoMdMenu size={'2rem'} />
          </button> : <button onClick={() => setIsMenu(false)} className="inline-block md:hidden">
            <IoMdClose size={'2rem'} />
          </button>

          }
        </div>
        {(isMenu || !isMd) && <nav className="md:mt-2 py-5 md:py-0">
          <ul className="flex flex-col md:flex-row md:items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quienes-somos"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Quienes somos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clases-de-comida"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Clases de comida
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Contacto
              </NavLink>
            </li>
            <button className="bg-secondaryColor text-blackBodyBg font-semibold py-1 px-2 rounded-2xl mt-3 md:mt-0 ml-5 w-fit">
              Reservacion
            </button>
          </ul>
        </nav>}
      </div>
    </header>
  );
}

export default Header;
