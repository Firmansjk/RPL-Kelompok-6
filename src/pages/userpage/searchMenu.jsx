import { useState} from "react";
import Header from "../../components/userpage/header";
import ButtonShowMorePM from "../../components/userpage/ForPaketMenu/buttonShowMorePM";
import test from "../../test.json"
import test2 from "../../test2.json"
import Pagination from "../../components/userpage/pagination";

export default function SearchMenuPage(){
    const [toggleState, setToggleState] = useState(1);
    const [currentpage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [postsPerPage] = useState(6);
    const [users, setUsers] = useState(test);
    const [users2, setUsers2] = useState(test2);
    const [sorted, setSorted] = useState({sorted: "id", reversed: false});
    const [search, setSearch] = useState('');
    const [search2, setSearch2] = useState('');


    // Sorted Function for Paket Menu
    const sortByPriceHightoLow = () => {
        setSorted({sorted: "price", reversed: !sorted.reversed})
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            return userB.price - userA.price
        });
        setUsers(usersCopy)
    };

    const sortByPriceLowtoHigh = () => {
        setSorted({sorted: "price", reversed: !sorted.reversed})
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            return userA.price - userB.price
        });
        setUsers(usersCopy)
    };


    // Sorted Function for Menu Tambahan 
    const sortByPriceHightoLow2 = () => {
        setSorted({sorted: "price", reversed: !sorted.reversed})
        const usersCopy = [...users2];
        usersCopy.sort((userA, userB) => {
            return userB.price - userA.price
        });
        setUsers2(usersCopy)
    };

    const sortByPriceLowtoHigh2 = () => {
        setSorted({sorted: "price", reversed: !sorted.reversed})
        const usersCopy = [...users2];
        usersCopy.sort((userA, userB) => {
            return userA.price - userB.price
        });
        setUsers2(usersCopy)
    };


    const openList  = (index) =>{
        setOpen(index)
    }
    
    const toggleTab  = (index) =>{
        setToggleState(index)
    }

    // For pagination
    const lastPostIndex = currentpage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex)
    const currentPosts2 = users2.slice(firstPostIndex, lastPostIndex)

    const previousPage = () => {
        if (currentpage !== 1){
            setCurrentPage(currentpage - 1);
        }
        else{
            setCurrentPage(currentpage)
        }
    }

    const nextPagePaketMenu = () => {
        if (currentpage !== Math.ceil(test.length / postsPerPage)) {
            setCurrentPage(currentpage + 1)
        }
        else{
            setCurrentPage(1)
        }
    }
    const nextPageMenuPilihan = () => {
        if (currentpage !== Math.ceil(test2.length / postsPerPage)) {
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
                                <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#F77E21] focus:border-[#F77E21]" placeholder="Cari Menu" required/>
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#F77E21] font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                            </div>
                        </div>

                        {/* <!-- Dropdown menu --> */}

                        <div className="mt-8">
                            <button onClick={() => openList(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-[#F77E21] focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mb-2" type="button">Filter Harga<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            <div id="dropdown" action="#" className={open === true ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 flex flex-col" : "hidden"}>
                                <button onClick={sortByPriceHightoLow} className="block px-4 py-2 hover:bg-gray-100 text-sm">Harga Tinggi ke Rendah</button>
                                <button onClick={sortByPriceLowtoHigh} className="block px-4 py-2 hover:bg-gray-100 text-sm">Harga Rendah ke Tinggi</button>
                            </div>
                        </div>

                        {/* List Of Menu */}

                        <div className="flex flex-col gap-12">
                            <div className="mt-10 w-full grid grid-flow-row gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                                {currentPosts && currentPosts.filter((menu) => {
                                    return search.toLowerCase() === '' ? menu : menu.namemenu.toLowerCase().includes(search)
                                }).map(menu => (
                                    <div key={menu.id} className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                        <img
                                        className="rounded-t-lg w-full h-40 object-cover"
                                        src={menu.image}
                                        alt="" />
                                        <div className="px-6 pt-6 pb-0">
                                            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                                <div>
                                                    <p
                                                    className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                                    {menu.namemenu}
                                                    </p>
                                                    <p
                                                    className="mb-3 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                                    {menu.catering}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
                                            <ButtonShowMorePM/>
                                            <p
                                            className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                            <span>Rp.</span>{`${menu.price}`}<span>/pax</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination 
                                totalPosts={test.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentpage}
                                previousPage={previousPage}
                                nextPage={nextPagePaketMenu}
                            />
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
                                <input type="search" onChange={(e) => setSearch2(e.target.value)} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#F77E21] focus:border-[#F77E21]" placeholder="Cari Menu" required/>
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#F77E21] font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                            </div>
                        </div>

                        {/* <!-- Dropdown menu --> */}

                        <div className="mt-8">
                            <button onClick={() => openList(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-[#F77E21] focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mb-2" type="button">Filter Harga<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            <div id="dropdown" action="#" className={open === true ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 flex flex-col" : "hidden"}>
                                <button onClick={sortByPriceHightoLow2} className="block px-4 py-2 hover:bg-gray-100 text-sm">Harga Tinggi ke Rendah</button>
                                <button onClick={sortByPriceLowtoHigh2} className="block px-4 py-2 hover:bg-gray-100 text-sm">Harga Rendah ke Tinggi</button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-12">
                            <div className="mt-10 w-full grid grid-flow-row gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                                {currentPosts2 && currentPosts2.filter((menu) => {
                                    return search2.toLowerCase() === '' ? menu : menu.namemenu.toLowerCase().includes(search2)
                                }).map(menu => (
                                    <div key={menu.id} className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                        <img
                                        className="rounded-t-lg w-full h-40 object-cover"
                                        src={menu.image}
                                        alt="" />
                                        <div className="px-6 pt-6 pb-0">
                                            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                                <div>
                                                    <p
                                                    className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                                    {menu.namemenu}
                                                    </p>
                                                    <p
                                                    className="mb-3 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                                    {menu.catering}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-full flex mb-5">
                                                <p
                                                className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                                <span>Rp.</span>{`${menu.price}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination 
                                    totalPosts={test2.length}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentpage}
                                    previousPage={previousPage}
                                    nextPage={nextPageMenuPilihan}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
)
}