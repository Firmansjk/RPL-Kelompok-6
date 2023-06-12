import { Link, useForm, usePage } from '@inertiajs/react';
import HeaderAdmin from '@/Components/adminpage/header';
import SideBarAdmin from '@/Components/adminpage/sidebar';

export default function EditUser({ users }){
    const { data, setData, post, processing } = useForm({
        name: users.name,
        username: users.username,
        email: users.email,
        address: users.address,
        phone: users.phone,
    });
    
    const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.update.user', { id: users.id }));
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
                            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mt-4 mb-5">
                                <p className="font-bold text-xl md:text-3xl text-[#F77E21] ml-2">EDIT USER</p>
                            </div>

                            <div className="flex flex-1 flex-col lg:mr-20 lg:ml-20 ml-6 mr-3 mb-6 justify-between content-center bg-white px-6 py-4 rounded-lg">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-6">
                                        <label for="name" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">Nama User</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            value={data.name} 
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                                            placeholder="Nama Pengguna"/>
                                    </div>

                                    <div class="mb-6">
                                        <label for="username" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">Username</label>
                                        <input 
                                            type="text" 
                                            id="username" 
                                            name="username"
                                            value={data.username} 
                                            onChange={(e) => setData('username', e.target.value)}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                                            placeholder="Nama Paket Menu"/>
                                    </div>

                                    <div class="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">E-mail</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="username"
                                            value={data.email} 
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                                            placeholder="xyz@gmail.com"/>
                                    </div>

                                    <div class="mb-6">
                                        <label for="address" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">Alamat</label>
                                        <input 
                                            type="text" 
                                            id="address" 
                                            name="address"
                                            value={data.address} 
                                            onChange={(e) => setData('address', e.target.value)}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                                            placeholder="Jl. xxxxx"/>
                                    </div>

                                    <div class="mb-6">
                                        <label for="phone" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">No. Telepon</label>
                                        <input 
                                            type="text" 
                                            id="phone"
                                            name='phone' 
                                            value={data.phone} 
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                                            placeholder="0851xxxxx"/>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <button type="submit" className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Simpan Perubahan</button>
                                        <Link href={route('admin.listuser')} className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full text-center">
                                            Batalkan
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        </>
    )
}