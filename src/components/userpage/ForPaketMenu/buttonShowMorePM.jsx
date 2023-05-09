import { useState } from "react";
import { Link } from "react-router-dom";
import ModalShowMorePM from "./modalShowMorePM";

export default function ButtonShowMorePM(){
    const[open, setOpen] = useState(false)

    return(
        <div>
            <button
                onClick={() => {
                    setOpen(true)
                }}
                type="button"
                class="ml-0 lg:ml-6 my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                Lihat Menu
            </button>

            <ModalShowMorePM open={open} onClose={() => setOpen(false)}>
                <img
                class="absolute top-0 right-0 rounded-lg w-full h-44 md:h-48 object-cover"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt="" />
                <div className="mt-[10.75em] mt-4 mb-3 w-60 md:mt-48 md:w-72">
                    <div>
                        <p
                        className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                        PAKET SUPER MENU 1
                        </p>
                        <p
                        className="mb-5 text-[0.85em] md:text-left font-semibold leading-tight text-neutral-800">
                        Toko Katering Anu
                        </p>
                        <p className="mb-2 font-semibold text-[0.8em] text-black">
                        Paket terdiri dari :
                        </p>
                        <p className="mb-2 text-[0.75em] text-black flex flex-col gap-1">
                            <p>Nasi Goreng</p>
                            <p>Ayam Saus Lada</p>
                            <p>Es Buah</p>
                            <p>Nasi Goreng</p>
                            <p>Ayam Saus Lada</p>
                            <p>Es Buah</p>
                        </p>
                        <p className="mr-0 mt-5 mb-2 text-lg font-bold leading-tight text-[#F77E21]">
                            <span>Rp.</span>10000
                        </p>
                    </div>
                </div>
                <Link to="/hubungipenjual" class="self-center w-[60%] text-center mb-2 rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    Hubungi Penjual
                </Link>
            </ModalShowMorePM>
        </div>
    )
}