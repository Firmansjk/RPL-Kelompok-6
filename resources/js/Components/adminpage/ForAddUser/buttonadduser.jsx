import { useState } from "react"
import ModalAddUser from "./modaladduser"

export default function ButtonAddUser() {
    const[open, setOpen] = useState(false)

    return(
        <div>
            <button type="submit" onClick={() => setOpen(true)} className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4">Tambah</button>
        
        <ModalAddUser open={open} onClose={() => setOpen(false)}>
            <div className="mx-auto my-4 w-40 md:w-60">
                <p className="text-xl font-bold text-[#F77E21] mb-6">Tambah User</p>
            </div>

            <form>
                <div class="mb-6">
                    <label for="namamenu" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">Nama User</label>
                    <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Paket Menu"/>
                </div>

                <div class="mb-6">
                    <label for="username" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">Username</label>
                    <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nama Paket Menu"/>
                </div>

                <div class="mb-6">
                    <label for="email" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">E-mail</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="xyz@gmail.com"/>
                </div>

                <div class="mb-6">
                    <label for="role" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">Role</label>
                    <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Role"/>
                </div>

                <div class="mb-6">
                    <label for="address" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">Alamat</label>
                    <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Jl. xxxxx"/>
                </div>

                <div class="mb-6">
                    <label for="numberhp" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">No. Telepon</label>
                    <input type="text" id="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0851xxxxx"/>
                </div>

                <div className="flex gap-4 mt-8">
                    <button className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Tambah User</button>
                    <button className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full" onClick={() => setOpen(false)}>Batalkan</button>
                </div>
            </form>
        </ModalAddUser>
        </div>
    )
}