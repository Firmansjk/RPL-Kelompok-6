import { useState } from "react"
import ModalDelVendor from "./modaldeleteVendor";
import { HiTrash } from "react-icons/hi"
import { Inertia } from '@inertiajs/inertia';

export default function ButtonHapusVendor ({userId}){
    const [open, setOpen] = useState(false)
    const handleDelete = () => {
        Inertia.delete(`/admin/deleteVendor/${userId}`)
    };
    return(
        <div>
            <button onClick={() => setOpen(true)} type="submit" className="text-white bg-red-600 hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-xs px-2 py-2">Hapus</button>
        
            <ModalDelVendor open={open} onClose={() => setOpen(false)}>
                <HiTrash size={56} className="mx-auto text-[#F77E21]"/>
                
                <form>
                    <div className="mx-auto my-4 w-40 md:w-60">
                        <p className="text-lg font-bold text-black mb-4">Hapus</p>
                        <p className="text-sm md:text-sm">Apakah anda yakin mau menghapus Paket Menu ini?</p>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button 
                        onClick={handleDelete}
                        className="btn bg-red-500 text-white font-semibold py-2 rounded-lg w-full">Hapus</button>
                        <button className="btn bg-[#F77E21] text-white font-semibold py-2 rounded-lg w-full" onClick={() => setOpen(false)}>Batalkan</button>
                    </div>
                </form>
            </ModalDelVendor>
        </div>
    )
}