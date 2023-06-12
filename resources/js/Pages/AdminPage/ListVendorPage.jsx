import React, { useState } from "react"
import { Link, useForm, usePage } from '@inertiajs/react';
import PaginationVendor from "../../components/vendorpage/paginationvendor";
import SideBarAdmin from "../../components/adminpage/sidebar";
import HeaderAdmin from "@/Components/adminpage/header";
import ButtonAddCatering from "../../components/adminpage/ForAddCatering/buttonaddCatering";
import ButtonHapusVendor from "@/Components/adminpage/ForDeleteVendor/buttonHapusVendor";

function ListPageAdmin(){
    const { user, users, searchQuery } = usePage().props;
    const {} = useForm();
    const [currentpage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [query, setQuery] = useState(searchQuery || '');

    const lastPostIndex = currentpage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex)
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

    const submitSearch = (e) => {
        e.preventDefault();
        Inertia.get(route('admin.listvendor', { query }));
    };

    return(
        <>
        <div className="mx-auto bg-[#FFF9EB]">
            <div className="min-h-screen flex flex-col">
                <div className ="flex flex-1">
                    <SideBarAdmin/>
                    <main className="bg-white-300 flex-1 overflow-hidden mb-6">
                        <HeaderAdmin/>
                        <div className="flex flex-col mt-20 md:mt-0 mr-2">

                            {/* LIST KATERING */}
                            <div className="block mt-5">
                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-5">
                                    <p className="font-bold text-3xl text-[#F77E21] ml-2">LIST TOKO KATERING</p>
                                </div>

                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row lg:mr-4 ml-6 mr-3 mb-6 justify-between content-center">
                                    <div className="relative w-full md:w-[60%] lg:w-[70%]">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-black border border-[#F77E21] rounded-lg bg-white" placeholder="Cari Toko Katering"/>
                                        <button type="submit" className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2">Search</button>
                                    </div>
                                    <div className="pl-0 mt-6 md:pl-6 md:mt-0 lg:pl-6 lg:mt-0 flex flex-row gap-3">
                                        <ButtonAddCatering/>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mr-5 md:mr-3 lg:mr-3 mb-8">
                                    <div className="rounded shadow bg-white mx-2 w-full">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-[#F77E21] uppercase bg-white">
                                                    <tr className="border-b-2 border-black">
                                                        <th scope="col" className="px-6 py-3">
                                                            No.
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Nama Toko Katering
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Logo Katering
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            E-mail
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Aksi
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-black">
                                                {currentPosts && currentPosts.filter((users) => {
                                                        return query.toLowerCase() === '' ? users : users.name.toLowerCase().includes(query)
                                                    }).map((users, index) => (
                                                        <tr key={users.id} className="bg-white border-b">
                                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-r-2">
                                                                {startIndex + index}
                                                            </th>
                                                            <td className="px-6 py-4 font-bold border-r-2">
                                                                {users.name}
                                                            </td>
                                                            <td className="px-6 py-4 border-r-2">
                                                                <img className="inline-block h-16 w-24 rounded-lg" src={users.photo ? `/upload/vendor_profile/${users.photo}` : menu.img} alt=""/>
                                                            </td>
                                                            <td className="px-6 py-4 border-r-2">
                                                                {users.email}
                                                            </td>
                                                            <td className="px-6 py-4 flex flex-col md:flex-row lg:flex-row gap-2 content-center">
                                                                <ButtonHapusVendor userId={users.id}/>
                                                                <Link href={route('admin.edit.vendor', { id: users.id })}>
                                                                    <button type="submit" className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2">Edit</button>
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
                                    totalPosts={users.length}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentpage}
                                    previousPage={previousPage}
                                    nextPage={nextPagePaketMenu}
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

export default ListPageAdmin