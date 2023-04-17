import { Link } from '@inertiajs/react';
import profileImg from './../../../public/images/profile.png';
import { useEffect, useRef, useState } from "react";

function Header(){
    const [toggleState, setToggleState] = useState(false);

        const toggleTab  = (index) =>{
            setToggleState(index)
        }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setToggleState(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return(
    <>
        <header className="bg-[#F77E21] flex justify-end py-1 mb-4">
            <div className="flex justify-between">
                <div className="p-1 flex flex-row items-center mr-4">
                    <button ref={menuRef} onClick={() => toggleTab(!toggleState)} className="text-[#F77E21] p-2 no-underline font-bold md:text-sm lg:text-sm bg-white rounded-xl">
                        <img className="inline-block h-6 w-6 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-full" src={profileImg} alt=""/>
                    </button>
                    <div id="ProfileDropDown" className={toggleState === true ? "rounded block shadow-md bg-white absolute mt-48 right-5 z-10 overflow-hidden" : "rounded hidden shadow-md bg-white absolute mt-48 right-5 z-10"}>
                        <ul className="list-reset group">
                            <Link to="/profile" className="no-underline px-4 py-2 block text-black hover:bg-[#F77E21] hover:text-white">
                                My Account
                            </Link>
                            <Link to="" className="no-underline px-4 py-2 block text-black hover:bg-[#F77E21] hover:text-white">
                                Notifications
                            </Link>
                            <li><hr className="border-t mx-2 border-grey-light"/></li>
                            <Link to="" className="no-underline px-4 py-2 block text-black hover:bg-[#F77E21] hover:text-white">
                                Logout
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}

export default Header