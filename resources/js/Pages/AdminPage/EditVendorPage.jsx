import { Link, useForm, usePage } from '@inertiajs/react';
import HeaderAdmin from "@/Components/adminpage/header";
import SideBarAdmin from "@/Components/adminpage/sidebar";

export default function EditCateringPage({ users }){
    const { data, setData, post, processing } = useForm({
        name: users.name,
        email: users.email,
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.update.vendor', { id: users.id }));
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
                                <p className="font-bold text-xl md:text-3xl text-[#F77E21] ml-2">EDIT TOKO KATERING</p>
                            </div>

                            <div className="flex flex-1 flex-col lg:mr-20 lg:ml-20 ml-6 mr-3 mb-6 justify-between content-center bg-white px-6 py-4 rounded-lg">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-6">
                                        <label for="name" className="block mb-2 text-md font-bold text-[#F77E21] text-start">NAMA TOKO KATERING</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            value={data.name} 
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                                            placeholder="Nama Toko Katering"/>
                                    </div>
                                    
                                    <div class="mb-6">
                                        <label for="photo" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">LOGO KATERING</label>
                                        <input
                                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                                        type="file"
                                        id="photo" 
                                        name="photo" 
                                        onChange={(e) => setData('photo', e.target.files[0])}
                                        />
                                        <p className="text-sm font-medium text-[#F77E21] mt-3 text-start">Klik "Pilih File" untuk menambah gambar</p>
                                    </div>

                                    <div class="mb-6">
                                        <label for="email" className="block mb-2 text-md font-bold text-[#F77E21] text-start">E-MAIL</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="username"
                                            value={data.email} 
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="xyz@gmail.com"/>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <button type="submit" className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Simpan Perubahan</button>
                                        <Link href={route('admin.listvendor')} className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full text-center">
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