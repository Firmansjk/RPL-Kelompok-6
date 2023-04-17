import React from "react";
import SideBar from "@/Components/sidebar";
import Header from "@/Components/header";

export default function DashboardVendor () {
    return(
        <>
        <div className="mx-auto bg-[#FFF9EB]">
            <div className="min-h-screen flex flex-col">
                <div className ="flex flex-1">
                    <SideBar/>
                    <main className="bg-white-300 flex-1 overflow-hidden mb-6">
                        <Header/>
                        <div className="flex flex-col pt-6">
                            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-10">
                                <div className="shadow-lg bg-[#F77E21] border-l-8 border-white mb-2 py-4 pl-4 md:w-1/2 lg:w-1/4 mx-2 rounded-lg">
                                    <div className="p-4 flex flex-col gap-5">
                                        <div className="no-underline text-white text-4xl">
                                            10
                                        </div>
                                        <div className="no-underline text-white text-xl font-bold">
                                            Total Menu
                                        </div>
                                    </div>
                                </div>

                                <div className="shadow-lg bg-[#F77E21] border-l-8 border-white mb-2 py-4 pl-4 md:w-1/2 lg:w-1/4 mx-2 rounded-lg">
                                    <div className="p-4 flex flex-col gap-5">
                                        <div className="no-underline text-white text-4xl">
                                            45
                                        </div>
                                        <div className="no-underline text-white text-xl font-bold">
                                            Jumlah Orderan
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mr-6 md:mr-0 lg:mr-0">
                                <div className="rounded shadow bg-white mx-2 w-full">
                                    <div className="px-6 py-4 border-b border-light-grey">
                                        <div className="font-bold text-xl text-[#F77E21]">Menu Yang Sering Dilihat :</div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-[#F77E21] uppercase bg-white">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Nomor
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Nama Menu
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Gambar Menu
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Paket Menu
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-black">
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                        1.
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Nasi Kuning
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <img className="inline-block h-16 w-24 rounded-lg" src="images/login_page.png" alt=""/>
                                                    </td>
                                                    <td className="px-6 py-4 font-bold">
                                                        PAKET MENU 3
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                        2.
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Nasi Kuning
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <img className="inline-block h-16 w-24 rounded-lg" src="images/login_page.png" alt=""/>
                                                    </td>
                                                    <td className="px-6 py-4 font-bold">
                                                        PAKET MENU 1
                                                    </td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                        3.
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Nasi Kuning
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <img className="inline-block h-16 w-24 rounded-lg" src="images/login_page.png" alt=""/>
                                                    </td>
                                                    <td className="px-6 py-4 font-bold">
                                                        PAKET MENU 2
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        </>
    );
}