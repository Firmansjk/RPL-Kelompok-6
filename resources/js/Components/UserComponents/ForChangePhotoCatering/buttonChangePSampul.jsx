import { useState } from "react"

export default function ButtonChangePSampul(){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <button onClick={() => setOpen(true)}type="submit" className="absolute left-[50%] translate-x-[-50%] top-32 lg:top-52 text-white bg-[#F77E21] hover:bg-yellow-600 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs lg:text-base px-4 py-2 shadow-lg border border-4">Ganti Foto Sampul</button>
        </div>
    )
}