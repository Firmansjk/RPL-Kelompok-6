import { Link } from '@inertiajs/react';
import profileImg from '../image/profile.png'
import logowhite from "../image/logo tring white.png"
import {useEffect, useRef, useState} from "react";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

function Header(){
    const [toggleState, setToggleState] = useState(false);

        const toggleTab  = (index) =>{
            setToggleState(index)
        }
    
    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) =>{
            if (!menuRef.current.contains(event.target)){
                setToggleState(false)
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return(
    <>
        <header className="bg-[#F77E21] md:flex justify-end py-1 mb-4 hidden">
            <div className="flex">
                <div ref={menuRef} className="p-1 flex flex-row items-center mr-4">
                    <button onClick={() => toggleTab(!toggleState)} className="text-[#F77E21] p-2 no-underline font-bold md:text-sm lg:text-sm bg-white rounded-xl">
                        <img className="inline-block h-6 w-6 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-full" src={profileImg} alt=""/>
                    </button>
                    <div id="ProfileDropDown" className={toggleState === true ? "rounded block shadow-md bg-white absolute mt-40 right-5 z-10 overflow-hidden" : "rounded hidden shadow-md bg-white absolute mt-48 right-5 z-10"}>
                        <ul className="list-reset group">
                            <Link href={route('vendor.profilepage')} className="no-underline px-4 py-2 block text-black hover:bg-[#F77E21] hover:text-white">
                                Profil Akun
                            </Link>
                            <li><hr className="border-t mx-2 border-grey-light"/></li>
                            <Link href={route('logout')} method="post" className="no-underline px-4 py-2 block text-black hover:bg-[#F77E21] hover:text-white">
                                Logout
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <header className="bg-[#F77E21] flex fixed w-full md:hidden justify-between py-1 z-10">
            <div className="flex flex-row md:hidden gap-3 items-center justify-start p-1 ml-3 mt-2">
                <HiMenuAlt1 onClick={() => toggleTab(!toggleState)} size={26} className={toggleState === true ? "cursor-pointer text-white mb-2 border rounded-lg border-2" : "cursor-pointer text-white mb-2"}/>
                <img src={logowhite} className="w-24" alt="logo"/>
            </div>
            <div className={toggleState === true ? "absolute w-full z-10 top-[4em] transition-all shadow-2xl" : "absolute w-full z-10 top-[-18em] transition-all shadow-2xl"}>
                    <ul class="font-medium flex flex-col py-1 px-4 mt-4 rounded-lg bg-[#F77E21]">
                        <li>
                            <Link href={route('vendor.profilepage')} className="flex flex-row gap-3 items-center py-2 pl-3 my-2 pr-4 text-white focus:bg-white focus:text-[#F77E21] rounded">
                                <AiOutlineUser/>Profil
                            </Link>
                            <Link to='/menu' className="flex flex-row gap-3 items-center py-2 pl-3 my-2 pr-4 text-white focus:bg-white focus:text-[#F77E21] rounded">
                                <HiMenu/>Menu
                            </Link>
                            <li><hr className="border-t mx-2 border-grey-light"/></li>
                            <Link href={route('logout')} method="post"  className="block py-2 pl-3 my-2 pr-4 text-white hover:bg-white hover:text-[#F77E21] rounded">
                                Logout
                            </Link>
                        </li>
                    </ul>
            </div>
        </header>
    </>
    )
}

export default Header