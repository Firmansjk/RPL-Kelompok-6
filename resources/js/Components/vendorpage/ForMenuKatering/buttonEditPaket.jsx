import { useState } from "react"
import { useForm } from "@inertiajs/react";
import ModalEditMenu from "./modalEditMenu"

export default function ButtonEditPaket(props){
    const[open, setOpen] = useState(false)
    const { data, setData, post, processing, errors } = useForm({
        product_name: '',
        product_desc: '',
      })

    const updatePaket = (e) => {
        e.preventDefault()
        console.log(data)
        post(`/vendor/updatepaket/${post.id}`, {product_name, product_desc},{
            preserveScroll: true,
            onSuccess: () => {
                console.log(res)
            }
        }, data)
    }
    // const updatePaket = (e) => {
    //     e.preventDefault();
    //     post(`/vendor/updatepaket/${post.id}`, {product_name, product_desc});
    // }
    return(
        <div>
            <button onClick={() => setOpen(true)}type="submit" className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2">Edit</button>
        
            <ModalEditMenu open={open} onClose={() => setOpen(false)}>
                <div className="mx-auto my-4 w-40 md:w-60">
                    <p className="text-xl font-bold text-[#F77E21] mb-6">Edit Menu Catering</p>
                </div>

                <form onSubmit={updatePaket}>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-md font-bold text-[#F77E21] text-start">NAMA PAKET</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Menu Katering" value={data.product_name} onChange={(e) => setData("product_name", e.target.value)}/>
                    </div>
                        
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-md font-bold text-[#F77E21] text-start">ISI PAKET</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Menu Katering" value={data.product_desc} onChange={(e) => setData("product_desc", e.target.value)}/>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button type="submit" className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Simpan Perubahan</button>
                        <button className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full" onClick={() => setOpen(false)}>Batalkan</button>
                    </div>
                </form>
            </ModalEditMenu>
        </div>
    )
}