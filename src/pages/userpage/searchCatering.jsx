import { useState } from "react";
import Header from "../../components/userpage/header";
import forkspoon from "../../image/food.png";
import { Link } from "react-router-dom";
import cateringlist from "../../cateringlist.json";
import Pagination from "../../components/userpage/pagination";

export default function SearchCateringPage(){
    const [currentpage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [search, setSearch] = useState('');

    // For pagination
    const lastPostIndex = currentpage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = cateringlist.slice(firstPostIndex, lastPostIndex)
    
    const previousPage = () => {
        if (currentpage !== 1){
            setCurrentPage(currentpage - 1);
        }
    }
    const nextPage = () => {
        if (currentpage !== Math.ceil(cateringlist.length / postsPerPage)) {
            setCurrentPage(currentpage + 1)
        }
        else{
            setCurrentPage(1)
        }
    }

    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="px-2 md:px-[10%] lg:px-44 mb-10 mt-24">
                <div className="mt-5">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-[#F77E21]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#F77E21] focus:border-[#F77E21]" placeholder="Cari Katering" required/>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#F77E21] font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center content-center items-center md:block">
                    <div className="mt-10 grid w-10/12 grid-flow-row gap-x-8 gap-y-12 sm:w-11/12 sm:grid-cols-2 md:w-full md:grid-cols-2 xl:grid-cols-3 mb-8">
                        {currentPosts && currentPosts.filter((catering) => {
                            return search.toLowerCase() === '' ? catering : catering.catering.toLowerCase().includes(search)
                        }).map(catering => ( 
                            <div class="flex flex-col justify-center items-center md:rounded-lg bg-white shadow-lg">
                                <img
                                class="rounded-t-lg w-full h-48 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
                                        <div>
                                            <h5
                                            class="mb-2 text-md text-center lg:text-left font-bold leading-tight text-neutral-800">
                                            {catering.catering}
                                            </h5>
                                            <p class="mb-4 text-xs text-black">
                                            <span>{catering.address}</span> | <span>{catering.numbertelp}</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center gap-3 mb-4">
                                            <img className="w-8" src={forkspoon} alt="forkspoon"></img>
                                            <p class="text-md font-bold text-[#F77E21]">
                                            {catering.totalmenu} <span>Menu</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/profile'>
                                    <button
                                    type="button"
                                    class="mx-10 my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    KUNJUNGI TOKO
                                    </button>
                                </Link>
                            </div>      
                        ))}
                    </div>
                    <Pagination 
                        totalPosts={cateringlist.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentpage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                    />
                </div>
            </main>
        </div>
        </>
    )
}