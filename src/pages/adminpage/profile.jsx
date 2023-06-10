import React from "react";
import profileImg from "../../image/profile.png"
import ButtonPhoto from "../../components/vendorpage/ForChangePhoto/buttonPhoto";
import ButtonHapusPhoto from "../../components/vendorpage/ForChangePhoto/buttonHapusPhoto";
import SideBarAdmin from "../../components/adminpage/sidebar";
import HeaderAdmin from "../../components/adminpage/header";

function ProfilePageAdmin () {
    return(
        <>
        <div className="mx-auto bg-[#FFF9EB]">
            <div class="min-h-screen flex flex-col">
                <div className ="flex flex-1">
                    <SideBarAdmin/>
                    <main className="bg-white-300 flex-1 overflow-hidden mb-6">
                        <HeaderAdmin/>
                        <div className="flex flex-col pt-4 mr-3">
                            <div className="flex flex-col items-center md:block mt-40 md:mt-20 ml-6 mr-2">
                                <div className="absolute flex flex-row gap-2 mt-14 md:hidden">
                                    <ButtonPhoto/>
                                    <ButtonHapusPhoto/>
                                </div>
                                <div className="absolute hidden md:flex md:flex-col md:gap-2">
                                    <ButtonPhoto/>
                                    <ButtonHapusPhoto/>
                                </div>
                                <div className="relative overflow-hidden top-[-5em] w-28 h-28 md:w-44 md:h-44 md:left-[1em] md:top-[-4.5em] lg:w-52 lg:h-52 lg:top-[-5.5em] border border-white border-8 rounded-full">
                                    <img className="w-full h-full object-cover" src={profileImg} alt="Profile Img"/>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col mt-[1em] md:flex-row lg:flex-row mx-4 mr-5 mt-[-3.25em] md:mr-0 md:mt-[-2.75em] lg:mr-0 lg:mt-[-3.25em]">
                                <div className="rounded shadow bg-white mx-2 w-full">
                                    <div className="px-6 py-4 border-b border-light-grey">
                                        <div className="font-bold text-xl text-[#F77E21]">PROFIL AKUN</div>
                                    </div>

                                    <form className="border-b border-light-grey">
                                        <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6 my-5">
                                            <div>
                                                <label for="adminname" className="block mb-2 text-sm font-bold text-[#F77E21]">Nama Admin</label>
                                                <input type="text" id="cateringname" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Pojok Dapur"/>
                                            </div>
                                            <div>
                                                <label for="username" className="block mb-2 text-sm font-bold text-[#F77E21]">Username</label>
                                                <input type="text" id="username" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="pojokdapur123"/>
                                            </div>
                                            <div>
                                                <label for="email" className="block mb-2 text-sm font-bold text-[#F77E21]">E-mail</label>
                                                <input type="email" id="email" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="pojokdapur@gmail.com"/>
                                            </div>
                                            <div className="mt-1 md:mt-7 mb-3">
                                                <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-1 text-center">Simpan Data</button>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="px-6 py-4 border-b border-light-grey">
                                        <div className="font-bold text-xl text-[#F77E21]">UBAH PASSWORD</div>
                                    </div>

                                    <form>
                                        <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6 my-5">
                                            <div>
                                                <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Password Sekarang</label>
                                                <input type="password" id="password" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                                            </div>
                                            <div>
                                                <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Password Baru</label>
                                                <input type="password" id="password" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                                            </div>
                                            <div>
                                                <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Konfirmasi Password Baru</label>
                                                <input type="password" id="password" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                                            </div>
                                            <div className="md:mt-7 md:flex md:justify-end">
                                                <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-1 text-center">Ubah Password</button>
                                            </div>
                                        </div>
                                    </form>
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

export default ProfilePageAdmin