import { useState } from "react"

export default function ButtonEditMenu(){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <button onClick={() => setOpen(true)}type="submit" className="text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2">Edit</button>
        </div>
    )
}