import React, { useState, useEffect, process} from "react"
import SideBar from "@/Components/vendorpage/sidebar";
import Header from "@/Components/vendorpage/header";
import ButtonHapusPK from "@/Components/vendorpage/ForPaketMenu/buttonHapusPK";
import ButtonHapusMenu from "@/Components/vendorpage/ForMenuKatering/buttonHapusMenu";
import ButtonTambahMenu from "@/Components/vendorpage/ForMenuKatering/buttonTambahMenu";
import ButtonTambahPaket from "@/Components/vendorpage/ForMenuKatering/buttonTambahPaket";
import { Link, useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import PaginationVendor from "@/Components/vendorpage/paginationvendor";

export default function MenuPage(){
    const { packets, products, appUrl, searchQuery } = usePage().props;
    const {} = useForm();
    const [toggleState, setToggleState] = useState(1);
    const [currentpage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [query, setQuery] = useState(searchQuery || '');

    const toggleTab  = (index1) =>{
            setToggleState(index1)
        }

    const lastPostIndex = currentpage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = packets.slice(firstPostIndex, lastPostIndex)
    const currentPosts2 = products.slice(firstPostIndex, lastPostIndex)
    const startIndex = (currentpage - 1) * postsPerPage + 1;

    const previousPage = () => {
        if (currentpage !== 1){
            setCurrentPage(currentpage - 1);
        }
    }
    const nextPagePaketMenu = () => {
        if (currentpage !== Math.ceil(packets.length / postsPerPage)) {
            setCurrentPage(currentpage + 1)
        }
        else{
            setCurrentPage(1)
        }
    }
    const nextPageMenuPilihan = () => {
        if (currentpage !== Math.ceil(products.length / postsPerPage)) {
            setCurrentPage(currentpage + 1)
        }
        else{
            setCurrentPage(1)
        }
    }
    // const [searchTerm, setSearchTerm] = useState('');
    
    // const [results, setResults] = useState({ packets: [], products: [] });

    const submitSearch = (e) => {
        e.preventDefault();
        Inertia.get(route('vendor.menupage', { query }));
    };

    console.log(appUrl);
    return(
        <>
        <div className="mx-auto bg-[#FFF9EB]">
            <div className="min-h-screen flex flex-col">
                <div className ="flex flex-1">
                    <SideBar/>
                    <main className="bg-white-300 flex-1 overflow-hidden mb-6">
                        <Header/>
                        <div className="flex flex-col">
                            <div className="mb-5 ml-4 mr-3 text-xs md:text-sm font-medium text-center text-gray-500 border-b border-gray-300">
                                <ul className="flex flex-wrap -mb-px">
                                <li onClick={() => toggleTab(1)} className={toggleState === 1 ? "mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg" : "mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}>
                                        <button type="button">Paket Menu</button>
                                    </li>
                                    <li onClick={() => toggleTab(2)} className={toggleState === 2 ? "mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg" : "mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}>
                                    <button type="button">Menu Katering</button>
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
                                            <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <form onSubmit={submitSearch}>
                                            <input 
                                                type="search" 
                                                id="default-search" 
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                className="block w-full p-3 pl-10 text-sm text-black border border-[#F77E21] rounded-lg bg-white" 
                                                placeholder="Cari Menu"/>
                                            <button 
                                                type="submit" 
                                                className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2">
                                                    Search
                                            </button>
                                        </form>
                                    </div>
                                    <div className="pl-0 mt-6 md:pl-6 md:mt-0 lg:pl-6 lg:mt-0 flex flex-row gap-3">
                                        <ButtonTambahPaket type ="submit" className="text-black bg-green-400 hover:bg-green-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4" >Tambah</ButtonTambahPaket>
                                        {/* <button type ="submit" className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4" >Edit Paket</button> */}
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
                                                            Gambar Menu
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
                                                {currentPosts && currentPosts.filter((packet) => {
                                                        return query.toLowerCase() === '' ? packet : packet.packet_name.toLowerCase().includes(query)
                                                    }).map((packet, index) => ( 
                                                    <tr key={packet.id} className="bg-white border-b">
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-r-2">
                                                            {startIndex + index}
                                                        </th>
                                                        <td className="px-6 py-4 font-bold border-r-2">
                                                            {packet.packet_name}
                                                        </td>
                                                        <td className="px-6 py-4 border-r-2">
                                                            <img className="inline-block h-16 w-24 rounded-lg" src={appUrl + '/' + packet.packet_picture} alt={packet.packet_name} />
                                                        </td>
                                                        <td className="px-6 py-4 border-r-2">
                                                            {packet.packet_desc.split('\n').map((line, index) => (
                                                                <p key={index}>{line}</p>
                                                            ))}
                                                        </td>
                                                        <td className="px-6 py-4 border-r-2">
                                                            <p><span>Rp.</span>{packet.packet_price}<span>/pax</span></p>
                                                        </td>
                                                        <td className="px-6 py-4 flex flex-col md:flex-row lg:flex-row gap-2 content-center">
                                                            <ButtonHapusPK packetId={packet.id}/>
                                                            <Link
                                                                href={route('vendor.edit.packet', { id: packet.id })}
                                                                className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2"
                                                                >Edit
                                                            </Link>

                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table> 
                                                                           
                                        </div>
                                    </div>
                                </div>
                                <PaginationVendor
                                    totalPosts={packets.length}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentpage}
                                    previousPage={previousPage}
                                    nextPage={nextPagePaketMenu}
                                />
                            </div>

                            <div className={toggleState === 2 ? "block" : "hidden"}>
                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-5">
                                    <p className="font-bold text-3xl text-[#F77E21] ml-2">LIST MENU CATERING</p>
                                </div>

                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row lg:mr-4 ml-6 mr-3 mb-6 justify-between content-center">
                                    <div className="relative w-full md:w-[60%] lg:w-[70%]">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <form onSubmit={submitSearch}>
                                            <input 
                                                type="search" 
                                                id="default-search" 
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                className="block w-full p-3 pl-10 text-sm text-black border border-[#F77E21] rounded-lg bg-white" 
                                                placeholder="Cari Menu"/>
                                            <button 
                                                type="submit" 
                                                className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2"
                                                >Search
                                            </button>
                                        </form>
                                    </div>
                                    <div className="pl-0 mt-6 md:pl-6 md:mt-0 lg:pl-6 lg:mt-0 flex flex-row gap-3">
                                        <ButtonTambahMenu type ="submit" className="text-black bg-green-400 hover:bg-green-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4">Tambah</ButtonTambahMenu>
                                        {/* <button type ="submit" className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4">Edit Menu</button> */}
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
                                                {currentPosts2 && currentPosts2.filter((product) => {
                                                        return query.toLowerCase() === '' ? product : product.product_name.toLowerCase().includes(query)
                                                    }).map((product, index) => (
                                                    <tr key={index} className="bg-white border-b">
                                                        <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-r-2">
                                                        {startIndex + index}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium border-r-2">
                                                            {product.product_name}
                                                        </td>
                                                        <td className="px-6 py-4 border-r-2">
                                                            <img className="inline-block h-16 w-24 rounded-lg" src={appUrl + '/' + product.product_picture} alt={product.product_name}/>
                                                        </td>
                                                        <td className="px-6 py-4 font-medium border-r-2">
                                                            <p><span>Rp.</span>{product.product_price}</p>
                                                        </td>
                                                        <td className="px-6 py-4 flex flex-col md:flex-row lg:flex-row gap-2 content-center">
                                                            <ButtonHapusMenu productId={product.id}/>
                                                            <Link href={route('vendor.edit.product', { id: product.id })} className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2">
                                                                Edit</Link>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>                                
                                        </div>
                                    </div>
                                </div>
                                <PaginationVendor
                                    totalPosts={products.length}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentpage}
                                    previousPage={previousPage}
                                    nextPage={nextPageMenuPilihan}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        </>
    )
}

// export default MenuPage