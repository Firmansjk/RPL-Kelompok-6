import React, { useState } from "react"
import ModalTambahMenu from "./modalTambahMenu"
import { Link, useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function ButtonTambahMenu() {
    const[open, setOpen] = useState(false)
    const [newProduct, setNewProduct] = useState({
        product_name: '',
        product_price: '',
        product_picture: null,
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: name === 'product_picture' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Membuat FormData dan menambahkan data produk ke dalamnya
        const formData = new FormData();
        formData.append('product_name', newProduct.product_name);
        formData.append('product_price', newProduct.product_price);
        formData.append('product_picture', newProduct.product_picture);
    
        // Mengirim data produk ke endpoint Laravel menggunakan Inertia
        Inertia.post(route('vendor.add.product'), formData, {
          
        });
      };

    return(
        <div>
            <button type="submit" onClick={() => setOpen(true)} className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4">Tambah</button>
        
            <ModalTambahMenu open={open} onClose={() => setOpen(false)}>
                <div className="mx-auto my-4 w-52 md:w-72">
                    <p className="text-xl font-bold text-[#F77E21] mb-6">Tambah Menu Catering</p>
                </div>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-6">
                        <label htmlFor="product_name" className="block mb-2 text-md font-bold text-[#F77E21] text-start">NAMA MENU</label>
                        <input type="text" 
                        id="product_name" 
                        name="product_name" 
                        value={newProduct.product_name} 
                        onChange={handleInputChange} 
                        required
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        placeholder="Nama Menu Katering"/>
                    </div>
                        
                    <div className="mb-6">
                        <label htmlFor="product_picture" className="block mb-2 text-md font-bold text-[#F77E21] text-start">GAMBAR MENU</label>
                        <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                        type="file"
                        accept="image/*"
                        name="product_picture"
                        id="product_picture" 
                        onChange={handleInputChange}
                        required/>
                        <p className="text-sm font-medium text-[#F77E21] mt-3 text-start">Klik "Pilih File" untuk menambah gambar</p>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="product_price" className="block mb-2 text-md font-bold text-[#F77E21] text-start">HARGA MENU</label>
                        <input type="text" 
                        name="product_price" 
                        id="product_price" 
                        value={newProduct.product_price}
                        onChange={handleInputChange} 
                        required
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        placeholder="Rp.10000"/>
                    </div>
                    
                    <div className="flex gap-4 mt-8">
                        <button type="submit" className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Tambah Menu</button>
                        <button className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full" onClick={() => setOpen(false)}>Batalkan</button>
                    </div>
                </form>
            </ModalTambahMenu>
        </div>
    )
}