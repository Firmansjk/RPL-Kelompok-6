import { Link, useForm, usePage } from '@inertiajs/react';
import Header from "@/Components/header";
import SideBar from "@/Components/sidebar";
export default function PageEditMenu({products}){
    const { data, setData, post, processing } = useForm({
        product_name: products.product_name,
        product_price: products.product_price,
        product_picture: null,
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        post(route('vendor.update.product', { id: products.id }));
      };
    
    return(
        <>
        <div className="mx-auto bg-[#FFF9EB]">
            <div className="min-h-screen flex flex-col">
                <div className ="flex flex-1">
                    <SideBar/>
                    <main className="bg-white-300 flex-1 overflow-hidden mb-6">
                        <Header/>
                        <div className="flex flex-col mt-20 md:mt-0 mr-2">
                            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mt-4 mb-5">
                                <p className="font-bold text-xl md:text-3xl text-[#F77E21] ml-2">EDIT MENU TAMBAHAN CATERING</p>
                            </div>

                            <div className="flex flex-1 flex-col lg:mr-20 lg:ml-20 ml-6 mr-3 mb-6 justify-between content-center bg-white px-6 py-4 rounded-lg">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div class="mb-6">
                                        <label for="product_name" className="block mb-2 text-md font-bold text-[#F77E21] text-start">NAMA MENU</label>
                                        <input 
                                        id="product_name" 
                                        name="product_name"
                                        value={data.product_name} 
                                        onChange={(e) => setData('product_name', e.target.value)}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Menu Katering"/>
                                    </div>
                                        
                                    <div class="mb-6">
                                        <label for="product_picture" className="block mb-2 text-md font-bold text-[#F77E21] text-start">GAMBAR MENU</label>
                                        <input
                                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                                        type="file"
                                        id="product_picture" 
                                        name="product_picture"
                                        onChange={(e) => setData('product_picture', e.target.files[0])}
                                        />
                                        <p className="text-sm font-medium text-[#F77E21] mt-3 text-start">Klik "Pilih File" untuk mengganti gambar</p>
                                    </div>

                                    <div class="mb-6">
                                        <label for="product_price" className="block mb-2 text-md font-bold text-[#F77E21] text-start">HARGA MENU</label>
                                        <input 
                                        type="text" 
                                        id="product_price" 
                                        name="product_price"
                                        value={data.product_price} 
                                        onChange={(e) => setData('product_price', e.target.value)}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Rp.10000"/>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <button type='submit' className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Simpan Perubahan</button>
                                        <Link href={route('vendor.all.packet')} className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full text-center">
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