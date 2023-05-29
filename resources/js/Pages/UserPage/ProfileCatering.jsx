import { Link, usePage } from '@inertiajs/react';
import ButtonShowMorePM from "../../components/userpage/ForPaketMenu/buttonShowMorePM";
import Header from "../../Components/userpage/Header";
import img from "../../image/image.png"
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pagination from '@/Components/userpage/pagination';
import ButtonShowMorePMprofil from '@/Components/userpage/ForPaketMenu/buttonShowMorePMprofil';

export default function ProfileCateringPage({ users, packets, products }){
    const { appUrl } = usePage().props;
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const [currentpage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const lastPostIndex = currentpage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = packets.slice(firstPostIndex, lastPostIndex)

    const previousPage = () => {
        if (currentpage !== 1){
            setCurrentPage(currentpage - 1);
        }
    }
    const nextPage = () => {
        if (currentpage !== Math.ceil(packets.length / postsPerPage)) {
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
            <main className="px-2 md:px-[10%] lg:px-44 mb-10 mt-12 lg:mt-16">

                <div className="mt-5 flex flex-col items-center md:block">
                    <img className="w-full h-40 lg:h-72 rounded-2xl object-cover" src={users.sampul ? `/upload/vendor_sampul/${users.sampul}` : img} alt="Food Img"/>
                    <img src={users.photo ? `/upload/vendor_profile/${users.photo}` : img} alt="Profile Picture" className="absolute left-[50%] translate-x-[-50%] top-[12em] md:left-24 md:translate-x-[0] lg:top-[22em] lg:left-52 w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 border border-white border-8 rounded-full object-cover"/>
                    <div className="overflow-hidden relative left-0 md:w-[70%] md:left-[11.5em] lg:left-[16.5em] lg:w-[60%] xl:w-[72%] mt-20 md:mt-4">
                        <h5
                            className="mb-2 text-2xl text-center md:text-left font-bold leading-tight text-neutral-800">
                            {users.name}
                        </h5>
                        <p className="mb-4 text-[0.7em] text-center md:text-left text-black">
                        {users.vendor_info}
                        </p>
                        <p className="text-md font-bold text-black text-center block md:hidden">
                            Alamat : <span className="font-normal">{users.address}</span><br/>
                            No.Telepon : <span className="font-normal">{users.phone}</span>
                        </p>
                        <p className="text-md font-bold text-black hidden md:text-left md:block">
                            Alamat : <span className="font-normal">{users.address}</span> &nbsp;&nbsp; | &nbsp;&nbsp; No.Telepon : <span className="font-normal">{users.phone}</span>
                        </p>
                    </div>
                    {/* Mobile button */}
                    <Link href={`/hubungipenjual/${users.phone}`} class="relative w-44 top-[2em] md:hidden lg:top-[2em] lg:left-12 lg:w-[20em] xl:top-[5.25em] text-center mb-2 rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    Hubungi Penjual
                    </Link>
                    {/* Desktop button */}
                    <Link href={`/hubungipenjual/${users.phone}`} class="relative w-44 top-[2em] hidden md:block md:left-[15.25em] lg:top-[2em] lg:left-[22em] lg:w-[20em] xl:top-[2em] text-center mb-2 rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    Hubungi Penjual
                    </Link>
                </div>
                <hr className="mt-14 border border-[#F77E21] xl:mt-[6em]"/>

                {/* Bagian Paket Menu */}
                <div className="mt-[2.5em] md:mt-9 flex flex-col justify-center content-center items-center md:block">
                    <p className="mb-8 text-2xl text-center md:text-left font-bold leading-tight text-neutral-800">LIST PAKET MENU : </p>
                    <div className="grid w-10/12 gap-x-8 gap-y-12 sm:w-11/12 sm:grid-cols-2 md:w-full md:grid-cols-2 xl:grid-cols-3 mb-8">
                    {currentPosts && currentPosts.map(packet =>(
                        <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                            <img
                            className="rounded-t-lg w-full h-40 object-cover"
                            src={packet.packet_picture ? appUrl + '/' + packet.packet_picture : "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"}
                            alt="" />
                            <div className="px-6 pt-6 pb-0">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                    <div>
                                        <p
                                        className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                        {packet.packet_name}
                                        </p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
                                <ButtonShowMorePMprofil PacketData={packet}/>
                                <p
                                className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                <span>Rp.</span>{packet.packet_price}<span>/pax</span>
                                </p>
                            </div>
                        </div>
                        ))}                        
                    </div>
                    <Pagination 
                        totalPosts={packets.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentpage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                    />
                    <hr className="mt-12 w-full border border-[#F77E21]"/>
                </div>

                {/* Bagian Menu Tambahan */}
                <div className="mt-[2.5em] md:mt-10 flex flex-col justify-center content-center items-center md:block">
                    <p className="mb-8 text-2xl text-center md:text-left font-bold leading-tight text-neutral-800">LIST PILIHAN MENU TAMBAHAN :</p>
                    <Carousel responsive={responsive} swipeable={true} showDots={true} className="pb-8 z-0">
                        {products.map(product => (
                        <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                            <img
                            className="rounded-t-lg w-full h-40 object-cover"
                            src={product.product_picture ? appUrl + '/' + product.product_picture : "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"}
                            alt={product.product_name}
                             />
                            <div className="px-6 pt-6 pb-0">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                    <div>
                                        <p
                                        className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                        {product.product_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex mb-5">
                                    <p
                                    className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                    <span>Rp.</span>{product.product_price}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </Carousel>
                </div>
            </main>
        </div>
        </>
    )
}