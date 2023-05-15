import { useState } from "react"
import ModalEditPK from "./modalEditPaket"
import { Link, useForm, usePage } from '@inertiajs/react';

export default function ButtonEditPaket(){
    const [open, setOpen] = useState(false)
    const { product } = usePage().props;
    const { data, setData, put } = useForm({ product });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('vendor.update.product', { id: productId }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };
    return(
        <div>
            <button onClick={() => setOpen(true)}type="submit" className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2">Edit</button>

            <ModalEditPK open={open} onClose={() => setOpen(false)}>
                <div className="mx-auto my-4 w-40 md:w-60">
                    <p className="text-xl font-bold text-[#F77E21] mb-6">Edit Paket Menu</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div class="mb-6">
                        <label for="packet_name" className="block mb-2 text-md font-bold text-[#F77E21] text-start">NAMA PAKET MENU</label>
                        <input 
                        type="text" 
                        id="packet_name" 
                        name="packet_name"
                        value={data.packet_name} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        placeholder="Nama Paket Menu"/>
                    </div>
                    
                    <div class="mb-6">
                        <label for="message" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">GAMBAR MENU</label>
                        <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                        type="file"
                        id="formFile" />
                        <p className="text-sm font-medium text-[#F77E21] mt-3 text-start">Klik "Pilih File" untuk menambah gambar</p>
                    </div>

                    <div class="mb-6">
                        <label for="packet_desc" className="block mb-2 text-md font-bold text-[#F77E21] text-start">DAFTAR MENU</label>
                        <input 
                        id="packet_desc" 
                        type="text"
                        name="packet_desc"
                        value={data.packet_desc} 
                        onChange={handleInputChange}
                        className="block p-2.5 h-28 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400" 
                        placeholder="Daftar Menu"></input>
                    </div>

                    <div class="mb-6">
                        <label for="packet_price" className="block mb-2 text-md font-bold text-[#F77E21] text-start">HARGA MENU</label>
                        <input 
                        type="text" 
                        id="packet_price" 
                        name="packet_price"
                        value={data.packet_price} 
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        placeholder="Rp.10000"/>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Simpan Perubahan</button>
                        <button className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full" onClick={() => setOpen(false)}>Batalkan</button>
                    </div>
                </form>
            </ModalEditPK>
        </div>
    )
}