import { useEffect, useRef, useState } from "react";
import OrangeLogo from "../../image/logo tring.png"
import profileImg from "../../image/profile.png"
import { Link } from '@inertiajs/react';

export default function HeaderBefore(){
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [toggleState, setToggleState] = useState(false);

    const toggleTab  = (index) =>{
        setToggleState(index)
    }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) =>{
            if (!menuRef.current.contains(event.target)){
                setNavbarOpen(false)
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return(
        <>
        <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-1 lg:py-3 lg:px-40 bg-white shadow-lg mb-3 z-10">
            <div ref={menuRef} className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <img src={OrangeLogo} className="w-28 mt-2" alt="logo"/>
                    <button onClick={() => setNavbarOpen(!navbarOpen)} className="relative group block lg:hidden">
                        <div className="relative flex overflow-hidden items-center justify-center w-[30px] h-[30px] transform transition-all">
                        <div className="flex flex-col justify-center gap-1 w-[20px] h-[25px] transform transition-all duration-300 origin-center overflow-hidden">
                            <div className={navbarOpen === true ? "bg-[#F77E21] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10" : "bg-[#F77E21] h-[0.15em] w-7 transform transition-all duration-300 origin-left"}></div>
                            <div className={navbarOpen === true ? "bg-[#F77E21] h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75" : "bg-[#F77E21] h-[0.15em] w-7 rounded transform transition-all duration-300 delay-75"}></div>
                            <div className={navbarOpen === true ? "bg-[#F77E21] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150" : "bg-[#F77E21] h-[0.15em] w-7 transform transition-all duration-300 origin-left delay-150"}></div>

                            <div className={navbarOpen === true ? "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12" : "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0"}>
                            <div className={navbarOpen === true ? "absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45" : "absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"}></div>
                            <div className={navbarOpen === true ? "absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45" : "absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300"}></div>
                            </div>
                        </div>
                        </div>
                    </button>
                </div>
                <div
                    className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center">
                        <li className="nav-item">
                            <Link href={route('homepage')}
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#F77E21] hover:opacity-75"
                            >
                            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={route('user.searchcatering')}
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#F77E21] hover:opacity-75"
                            >
                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Katering</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={route('user.searchmenu')}
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#F77E21] hover:opacity-75"
                            >
                            <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Menu</span>
                            </Link>
                        </li>

                        {/* Login Logout */}
                        <hr className="absolute top-[10.8em] border-t mx-2 border-grey-light w-full lg:hidden"/>
                        <li className="nav-item">
                            <Link href={route('user.login')}
                            className="px-3 pt-5 pb-2 lg:pt-2 flex items-center text-xs uppercase"
                            >
                            <button type="button" className="text-white bg-[#F77E21] hover:bg-yellow-500 font-medium rounded-full text-xs px-4 py-2 text-center">LOG IN</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}