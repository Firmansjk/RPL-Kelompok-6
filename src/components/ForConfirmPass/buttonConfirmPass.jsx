import { useState } from "react"
import ModalConfirmPass from "./modalConfirmPass"

export default function ButtonConfirmPass(){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <button onClick={() => setOpen(true)}type="submit" className="w-28 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ">Konfirmasi</button>
        
            <ModalConfirmPass open={open} onClose={() => setOpen(false)}>
                <div className="mx-auto my-4 w-40 md:w-60">
                    <p className="text-xl font-bold text-[#F77E21] mb-6">Atur Ulang Password</p>
                </div>

                <div className="mx-auto my-4 w-52 md:w-96">
                    <p className="text-base font-medium text-[#F77E21] mb-6">Cek E-Mail anda segera untuk proses atur ulang password berikutnya</p>
                </div>
            </ModalConfirmPass>
        </div>
    )
}