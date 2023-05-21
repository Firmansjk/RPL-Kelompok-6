import { useState} from "react";
import Header from "../../components/userpage/header";
import ButtonShowMorePM from "../../components/userpage/ForPaketMenu/buttonShowMorePM";
import {usePage} from '@inertiajs/react';

export default function SearchMenuPage({users, packets}){
    const [toggleState, setToggleState] = useState(1);
    const { appUrl } = usePage().props;

    const toggleTab  = (index) =>{
        setToggleState(index)
    }

    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="px-2 md:px-[10%] lg:px-44 mb-10 mt-24">
                <div className="flex flex-col justify-center content-center items-center md:block">
                    <div className="mb-2 mt-2 ml-4 mr-3 text-xs md:text-sm md:mb-5 font-medium text-center text-gray-500 border-b border-gray-300">
                        <ul className="flex flex-wrap -mb-px">
                            <li onClick={() => toggleTab(1)} className={toggleState === 1 ? "mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg" : "mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}>
                                <button type="button">Paket Menu</button>
                            </li>
                            <li onClick={() => toggleTab(2)} className={toggleState === 2 ? "mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg" : "mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}>
                                <button type="button">Menu Tambahan</button>
                            </li>
                        </ul>
                    </div>

                    {/* Bagian Paket Menu */}

                    <div className={toggleState === 1 ? "flex flex-col" : "hidden"}>
                        {/* Search Bar */}
                        <div className="mt-5">
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-[#F77E21]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#F77E21] focus:border-[#F77E21]" placeholder="Cari Menu" required/>
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#F77E21] font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                            </div>
                        </div>

                        <div>
                            <div className="mt-10 w-full grid grid-flow-row gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                                <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                    <img
                                    className="rounded-t-lg w-full h-40 object-cover"
                                    src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                    alt="" />
                                    <div className="px-6 pt-6 pb-0">
                                        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                            <div>
                                                <p
                                                className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                                PAKET SUPER MENU 1
                                                </p>
                                                <p
                                                className="mb-3 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                                Toko Katering Anu
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
                                        {/* <ButtonShowMorePM/> */}
                                        <p
                                        className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                        <span>Rp.</span>10000<span>/pax</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                    <img
                                    className="rounded-t-lg w-full h-40 object-cover"
                                    src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                    alt="" />
                                    <div className="px-6 pt-6 pb-0">
                                        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                            <div>
                                                <p
                                                className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                                PAKET SUPER MENU 1
                                                </p>
                                                <p
                                                className="mb-3 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                                Toko Katering Anu
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
                                        {/* <ButtonShowMorePM PacketData={packet}/> */}
                                        <p
                                        className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                        <span>Rp.</span>10000<span>/pax</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Menu Tambahan*/}

                    <div className={toggleState === 2 ? "flex flex-col" : "hidden"}>
                        {/* Search Bar */}
                        <div className="mt-5">
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-[#F77E21]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#F77E21] focus:border-[#F77E21]" placeholder="Cari Menu" required/>
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#F77E21] font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                            </div>
                        </div>

                        <div className="mt-10 w-full grid grid-flow-row gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                            <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                <img
                                className="rounded-t-lg w-full h-40 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div className="px-6 pt-6 pb-0">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                        <div>
                                            <p
                                            className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                            NASI GORENG
                                            </p>
                                            <p
                                            className="mb-3 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                            Toko Katering Anu
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex mb-5">
                                        <p
                                        className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                        <span>Rp.</span>10000
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                <img
                                className="rounded-t-lg w-full h-40 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div className="px-6 pt-6 pb-0">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                        <div>
                                            <p
                                            className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                            NASI GORENG
                                            </p>
                                            <p
                                            className="mb-3 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                            Toko Katering Anu
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex mb-5">
                                        <p
                                        className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                        <span>Rp.</span>10000
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                <img
                                className="rounded-t-lg w-full h-40 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div className="px-6 pt-6 pb-0">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                        <div>
                                            <p
                                            className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                            NASI GORENG
                                            </p>
                                            <p
                                            className="mb-3 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                            Toko Katering Anu
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex mb-5">
                                        <p
                                        className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                        <span>Rp.</span>10000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
)
}