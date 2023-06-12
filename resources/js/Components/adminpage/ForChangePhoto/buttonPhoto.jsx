import { useState } from "react"
import ModalPhoto from "./modalPhoto"
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function ButtonPhoto(){
    const [open, setOpen] = useState(false)

    const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);

    Inertia.post(route('admin.photo.upload'), formData);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };
  
    return(
        <div>
            <button onClick={() => setOpen(true)}type="submit" className="text-white bg-[#F77E21] hover:bg-yellow-600 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-4 py-2 md:ml-60 lg:ml-64">Ganti Foto Profil</button>
        
            <ModalPhoto open={open} onClose={() => setOpen(false)}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mx-auto my-4 w-40 md:w-60">
                        <p className="text-xl font-bold text-[#F77E21] mb-6">Ganti/Tambah Foto</p>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-bold text-[#F77E21] text-start">PILIH FOTO</label>
                        <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                        type="file" 
                        // id="photo" 
                        // name="photo"
                        accept="image/*"
                        onChange={handlePhotoChange}/>
                        <p className="text-sm font-medium text-[#F77E21] mt-3 text-start">Klik "Pilih File" untuk menambah gambar</p>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button type="submit" className="btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full">Simpan Perubahan</button>
                        <button className="btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full" onClick={() => setOpen(false)}>Batalkan</button>
                    </div>
                </form>
            </ModalPhoto>
        </div>
    )
}