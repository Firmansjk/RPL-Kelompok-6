import { useState } from "react"
import { useForm } from "@inertiajs/react";
import ModalTambahMenu from "./modalTambahMenu"

export default function ButtonTambahPaket() {
    const[open, setOpen] = useState(false)
    const { data, setData, post, processing, errors } = useForm({
        product_name: '',
        product_desc: '',
      })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(data)
        post('/vendor/tambahpaket', {
            preserveScroll: true,
            onSuccess: () => {
                console.log(res)
            }
        }, data)
    }


    return(
        <div>
            <button type="submit" onClick={() => setOpen(true)} className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4">Tambah</button>
        
            <ModalTambahMenu open={open} onClose={() => setOpen(false)}>
                <div className="mx-auto my-4 w-52 md:w-72">
                    <p className="text-xl font-bold text-[#F77E21] mb-6">Tambah Menu Catering</p>
                </div>

                <form onSubmit={onSubmitHandler}>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-md font-bold text-[#F77E21] text-start">NAMA MENU</label>
                        <input type="text" id="nama_menu" name="nama_menu"  className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Menu Katering" value={data.product_name} onChange={(e) => setData("product_name", e.target.value)}/>
                    </div>
                        
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-md font-bold text-[#F77E21] text-start">ISI MENU</label>
                        <input type="text" id="isi_menu" name="isi_menu"  className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Menu Katering" value={data.product_desc} onChange={(e) => setData("product_desc", e.target.value)}/>
                    </div>
                    
                    <div className="flex gap-4 mt-8">
                        <button className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Tambah Menu</button>
                        <button className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full" onClick={() => setOpen(false)}>Batalkan</button>
                    </div>
                </form>
            </ModalTambahMenu>
        </div>
    )
}