import { useState } from "react";
import { Link } from '@inertiajs/react';
import ModalShowMorePM from "./modalShowMorePM";
import {usePage} from '@inertiajs/react';

export default function ButtonShowMorePMprofil({ PacketData }){
    const[open, setOpen] = useState(false);
    const { appUrl } = usePage().props;

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
                src={PacketData.packet_picture ? appUrl + '/' + PacketData.packet_picture : "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"}
                alt="" />
                <div className="mt-[10.75em] mt-4 mb-3 w-60 md:mt-48 md:w-72">
                    <div>
                        <p
                        className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                        {PacketData.packet_name}
                        </p>
                        <p className="mb-2 font-semibold text-[0.8em] text-black">
                        Paket terdiri dari :
                        </p>
                        <p className="mb-2 text-[0.75em] text-black flex flex-col gap-1">
                        {PacketData.packet_desc}
                        </p>
                        <p className="mr-0 mt-5 mb-2 text-lg font-bold leading-tight text-[#F77E21]">
                            <span>Rp.</span>{PacketData.packet_price}
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