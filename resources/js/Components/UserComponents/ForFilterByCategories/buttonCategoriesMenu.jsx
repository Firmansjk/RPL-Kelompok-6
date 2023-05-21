import {useState } from "react"

export default function ButtonCategoriesMenu(){
    const[open, setOpen] = useState(false)

    const openList  = (index) =>{
        setOpen(index)
    }

    return(
        <div className="mt-6">
            <button onClick={() => openList(!open)} id="dropdownCheckboxButton" class="text-white bg-[#F77E21] focus:ring-2 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Cari Berdasarkan <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdownDefaultCheckbox" className={open === true ? "block z-10 w-60 bg-white divide-y divide-gray-100 rounded-lg shadow" : "hidden"}>
                <ul className="p-3 mt-2 space-y-3 text-sm text-gray-800" aria-labelledby="dropdownCheckboxButton">
                    <li>
                        <div className="flex items-center">
                            <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                            <label for="checkbox-item-1" className="ml-2 text-sm font-medium text-gray-800">Paket Menu</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                            <label for="checkbox-item-2" className="ml-2 text-sm font-medium text-gray-800">Menu Pilihan Tambahan</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}