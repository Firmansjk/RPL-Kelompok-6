import { Link } from "@inertiajs/react";
import ButtonShowMorePM from "../../Components/UserComponents/ForPaketMenu/buttonShowMorePM";
import Header from "../../Components/UserComponents/header";
import img from "../../image/UserImage/image.png"

export default function ProfileCateringPage(){
    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="px-2 md:px-[10%] lg:px-44 mb-10 mt-12 lg:mt-16">
                <div className="mt-5 flex flex-col items-center md:block">
                    <img className="w-full h-40 lg:h-72 rounded-2xl object-cover" src={img} alt="Food Img"/>
                    <img src={img} alt="Food Img" className="absolute left-[50%] translate-x-[-50%] top-[12em] md:left-24 md:translate-x-[0] lg:top-[22em] lg:left-52 w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 border border-white border-8 rounded-full object-cover"/>
                    <div className="overflow-hidden relative left-0 md:w-[70%] md:left-[11.5em] lg:left-[16.5em] lg:w-[60%] xl:w-[72%] mt-20 md:mt-4">
                        <h5
                            className="mb-2 text-2xl text-center md:text-left font-bold leading-tight text-neutral-800">
                            TOKO KATERING
                        </h5>
                        <p className="mb-4 text-[0.7em] text-center md:text-left text-black">
                            Explicabo nemo, natus facilis sapiente veritatis soluta. Nemo eaque nesciunt reiciendis. Dolores fugiat laborum adipisci voluptatem eaque, magni alias vitae qui mollitia, quod quibusdam cumque quisquam maxime veritatis facilis nostrum. Vel, nihil! Iste voluptatibus quod excepturi, illo perspiciatis soluta tempora aspernatur, et obcaecati eligendi laboriosam aperiam iure expedita. Perferendis, est vitae.
                        </p>
                        <p className="text-md font-bold text-black text-center block md:hidden">
                            Alamat : <span className="font-normal">Jl.Pajjaiang</span><br/>
                            No.Telepon : <span className="font-normal">0812xxxxxxxxx</span>
                        </p>
                        <p className="text-md font-bold text-black hidden md:text-left md:block">
                            Alamat : <span className="font-normal">Jl.Pajjaiang</span> &nbsp;&nbsp; | &nbsp;&nbsp; No.Telepon : <span className="font-normal">0812xxxxxxxxx</span>
                        </p>
                    </div>
                    <Link to="/hubungipenjual" class="relative w-44 top-[2em] lg:top-[2em] lg:left-12 lg:w-[20em] xl:top-[5.25em] text-center mb-2 rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    Hubungi Penjual
                    </Link>
                </div>
                <hr className="mt-14 border border-[#F77E21] xl:mt-[6em]"/>

                {/* Bagian Paket Menu */}
                <div className="mt-[2.5em] md:mt-9 flex flex-col justify-center content-center items-center md:block">
                    <p className="mb-8 text-2xl text-center md:text-left font-bold leading-tight text-neutral-800">LIST PAKET MENU : </p>
                    <div className="grid w-10/12 gap-x-8 gap-y-12 sm:w-11/12 sm:grid-cols-2 md:w-full md:grid-cols-2 xl:grid-cols-3">
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
                                <ButtonShowMorePM/>
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
                                <ButtonShowMorePM/>
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
                                <ButtonShowMorePM/>
                                <p
                                className="mr-0 mt-3 lg:mt-0 lg:mr-6 text-sm md:text-right font-semibold leading-tight text-[#F77E21]">
                                <span>Rp.</span>10000<span>/pax</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-12 w-full border border-[#F77E21]"/>
                </div>

                {/* Bagian Menu Tambahan */}
                <div className="mt-[2.5em] md:mt-10 flex flex-col justify-center content-center items-center md:block">
                    <p className="mb-8 text-2xl text-center md:text-left font-bold leading-tight text-neutral-800">LIST PILIHAN MENU TAMBAHAN :</p>
                    <div className="grid w-10/12 gap-x-8 gap-y-12 sm:w-11/12 sm:grid-cols-2 md:w-full md:grid-cols-2 xl:grid-cols-3">
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
            </main>
        </div>
        </>
    )
}