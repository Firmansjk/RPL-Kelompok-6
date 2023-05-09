import React, { useState } from "react"
import SideBar from "../../components/vendorpage/sidebar";
import Header from "../../components/vendorpage/header";
import ButtonHapusPK from "../../components/vendorpage/ForPaketMenu/buttonHapusPK";
import ButtonEP from "../../components/vendorpage/ForPaketMenu/buttonEditPaket";
import ButtonHapusMenu from "../../components/vendorpage/ForMenuKatering/buttonHapusMenu";
import ButtonEditMenu from "../../components/vendorpage/ForMenuKatering/buttonEditMenu";
import ButtonTambahPK from "../../components/vendorpage/ForPaketMenu/buttonTambahPK";
import ButtonTambahMenu from "../../components/vendorpage/ForMenuKatering/buttonTambahMenu";

function MenuPage(){

    const [toggleState, setToggleState] = useState(1);

        const toggleTab  = (index) =>{
            setToggleState(index)
        }

    return(
        <>
        <div className="mx-auto bg-[#FFF9EB]">
            <div className="min-h-screen flex flex-col">
                <div className ="flex flex-1">
                    <SideBar/>
                    <main className="bg-white-300 flex-1 overflow-hidden mb-6">
                        <Header/>
                        <div className="flex flex-col mt-20 md:mt-0 mr-2">
                            <div className="mb-5 ml-4 mr-3 text-xs md:text-sm font-medium text-center text-gray-500 border-b border-gray-300">
                                <ul className="flex flex-wrap -mb-px">
                                    <li onClick={() => toggleTab(1)} className={toggleState === 1 ? "mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg" : "mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}>
                                        <button type="button">Paket Menu</button>
                                    </li>
                                    <li onClick={() => toggleTab(2)} className={toggleState === 2 ? "mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg" : "mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}>
                                        <button type="button">Menu Tambahan</button>
                                    </li>
                                </ul>
                            </div>

                            <div className={toggleState === 1 ? "block" : "hidden"}>
                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-5">
                                    <p className="font-bold text-3xl text-[#F77E21] ml-2">LIST PAKET MENU</p>
                                </div>

                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row lg:mr-4 ml-6 mr-3 mb-6 justify-between content-center">
                                    <div className="relative w-full md:w-[60%] lg:w-[70%]">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-black border border-[#F77E21] rounded-lg bg-white" placeholder="Cari Menu"/>
                                        <button type="submit" className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2">Search</button>
                                    </div>
                                    <div className="pl-0 mt-6 md:pl-6 md:mt-0 lg:pl-6 lg:mt-0 flex flex-row gap-3">
                                        <ButtonTambahPK/>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mr-5 md:mr-3 lg:mr-3">
                                    <div className="rounded shadow bg-white mx-2 w-full">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-[#F77E21] uppercase bg-white">
                                                    <tr className="border-b-2 border-black">
                                                        <th scope="col" className="px-6 py-3">
                                                            No.
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Paket Menu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Gambar Paket Menu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Daftar Menu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Harga Menu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 w-[8em] md:w-[15em] lg:w-[15em]">
                                                            Aksi
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-black">
                                                    <tr className="bg-white border-b">
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-r-2">
                                                            1.
                                                        </th>
                                                        <td className="px-6 py-4 font-bold border-r-2">
                                                            PAKET MENU 3
                                                        </td>
                                                        <td className="px-6 py-4 border-r-2">
                                                            <img className="inline-block h-16 w-24 rounded-lg" src="images/login_page.png" alt=""/>
                                                        </td>
                                                        <td className="px-6 py-4 border-r-2">
                                                            <p>Nasi Kuning</p>
                                                            <p>Nasi Kuning</p>
                                                            <p>Nasi Kuning</p>
                                                            <p>Nasi Kuning</p>
                                                        </td>
                                                        <td className="px-6 py-4 font-semibold border-r-2">
                                                            <p><span>Rp.</span></p>
                                                        </td>
                                                        <td className="px-6 py-4 flex flex-col md:flex-row lg:flex-row gap-2 content-center">
                                                            <ButtonHapusPK/>
                                                            <ButtonEP/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>                                
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={toggleState === 2 ? "block" : "hidden"}>
                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-5">
                                    <p className="font-bold text-3xl text-[#F77E21] ml-2">LIST MENU TAMBAHAN CATERING</p>
                                </div>

                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row lg:mr-4 ml-6 mr-3 mb-6 justify-between content-center">
                                    <div className="relative w-full md:w-[60%] lg:w-[70%]">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-black border border-[#F77E21] rounded-lg bg-white" placeholder="Cari Menu"/>
                                        <button type="submit" className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2">Search</button>
                                    </div>
                                    <div className="pl-0 mt-6 md:pl-6 md:mt-0 lg:pl-6 lg:mt-0 flex flex-row gap-3">
                                        <ButtonTambahMenu/>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mr-5 md:mr-3 lg:mr-3">
                                    <div className="rounded shadow bg-white mx-2 w-full">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-[#F77E21] uppercase bg-white">
                                                    <tr className="border-b-2 border-black">
                                                        <th scope="col" className="px-6 py-3">
                                                            No.
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Nama Menu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Gambar Menu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Harga Menu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 w-[8em] md:w-[15em] lg:w-[15em]">
                                                            Aksi
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-black">
                                                    <tr className="bg-white border-b">
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-r-2">
                                                            1.
                                                        </th>
                                                        <td className="px-6 py-4 font-medium border-r-2">
                                                            Nasi Kuning
                                                        </td>
                                                        <td className="px-6 py-4 border-r-2">
                                                            <img className="inline-block h-16 w-24 rounded-lg" src="images/login_page.png" alt=""/>
                                                        </td>
                                                        <td className="px-6 py-4 font-medium border-r-2">
                                                            <p><span>Rp.</span> </p>
                                                        </td>
                                                        <td className="px-6 py-4 flex flex-col md:flex-row lg:flex-row gap-2 content-center">
                                                            <ButtonHapusMenu/>
                                                            <ButtonEditMenu/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        </>
    )
}

export default MenuPage