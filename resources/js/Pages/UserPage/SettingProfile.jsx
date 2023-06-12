import ButtonPhoto from "@/Components/userpage/ForChangePhoto/buttonPhoto";
import ButtonHapusPhoto from "@/Components/userpage/ForChangePhoto/buttonHapusPhoto";
import Header from "../../Components/userpage/Header";
import { Link, useForm, usePage } from '@inertiajs/react';
import profileImg from "../../image/profile.png"
import React from "react";
import UpdatePassword from "./UpdatePassword";

export default function SettingProfileUserPage(){
    const { user } = usePage().props;
    const { data, setData, patch, put, processing, errors, reset } = useForm({
        name: user.name,
        email: user.email,
        username: user.username,
        address: user.address,
        phone: user.phone,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('user.profile.change'));
    };

    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1 overflow-hidden mb-6 md:mt-24 lg:mt-28 md:px-[10%] lg:px-44">
                <div className="flex flex-col pt-4 mr-3">
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-10 mt-20 md:mt-0">
                        <div className="flex justify-center gap-10">
                            <img className="block h-24 w-24 rounded-full object-center" src={user.photo ? `/upload/user_profile/${user.photo}` : profileImg} alt="Profile Picture"/>
                            <div className="flex flex-col justify-center gap-3">
                                <ButtonPhoto/>
                                <ButtonHapusPhoto/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row">
                        <div className="rounded shadow w-full">
                            <div className="px-6 py-4 border-b border-light-grey">
                                <div className="font-bold text-xl text-[#F77E21]">PROFIL AKUN</div>
                            </div>

                            <form onSubmit={submit} className="border-b border-light-grey">
                                <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6 my-5">
                                    <div>
                                        <label for="name" className="block mb-2 text-sm font-bold text-[#F77E21]">Nama</label>
                                        <input 
                                        type="text" 
                                        id="name" 
                                        value={data.name} 
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="HTS"/>
                                    </div>
                                    <div>
                                        <label for="username" className="block mb-2 text-sm font-bold text-[#F77E21]">Username</label>
                                        <input 
                                        type="text" 
                                        id="username" 
                                        name="username"
                                        value={data.username} 
                                        onChange={(e) => setData('username', e.target.value)} 
                                        className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="hardianto__"/>
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-bold text-[#F77E21]">E-mail</label>
                                        <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={data.email} 
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="hardianto@gmail.com"/>
                                    </div>  
                                    <div>
                                        <label for="address" className="block mb-2 text-sm font-bold text-[#F77E21]">Alamat</label>
                                        <input 
                                        type="text" 
                                        id="address" 
                                        name="address"
                                        value={data.address} 
                                        onChange={(e) => setData('address', e.target.value)}
                                        className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Jl. Satria Kasih"/>
                                    </div>
                                    <div>
                                        <label for="number" className="block mb-2 text-sm font-bold text-[#F77E21]">No. Telepon</label>
                                        <input 
                                        type="tel" 
                                        id="number" 
                                        name="number"
                                        value={data.phone} 
                                        onChange={(e) => setData('phone', e.target.value)} 
                                        className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0851xxxxxxxx"/>
                                    </div>
                                    <div className="md:mt-7 md:flex md:justify-end">
                                        <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-1 text-center">Simpan Data</button>
                                    </div>
                                </div>
                            </form>

                            <div className="px-6 py-4 border-b border-light-grey">
                                <div className="font-bold text-xl text-[#F77E21]">UBAH PASSWORD</div>
                            </div>

                            <UpdatePassword/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}