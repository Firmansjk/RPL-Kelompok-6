import { useState } from "react"
import ModalConfirmNP from "./modalConfirmNP"
import { Link } from "react-router-dom"

export default function ButtonConfirmNewPass(){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <button onClick={() => setOpen(true)}type="submit" className="w-36 text-xs md:text-sm bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ">Ubah Password</button>
        
            <ModalConfirmNP open={open} onClose={() => setOpen(false)}>
                <div className="mx-auto my-4 w-52 md:w-72">
                    <p className="text-xl font-bold text-[#F77E21] mb-6">Password Berhasil diubah</p>
                </div>

                <div className="mx-auto my-4 w-52 md:w-96">
                    <p className="text-base font-medium text-[#F77E21] mb-6">Kembali ke Halaman Awal untuk Login ke Akun</p>
                </div>

                <Link to="/">
                  <button className="w-28 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ">Klik disini</button>
                </Link>
            </ModalConfirmNP>
        </div>
    )
}