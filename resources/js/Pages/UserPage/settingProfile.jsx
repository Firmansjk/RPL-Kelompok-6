import ButtonPhoto from "../../Components/UserComponents/ForChangePhoto/buttonPhoto";
import ButtonHapusPhoto from "../../Components/UserComponents/ForChangePhoto/buttonHapusPhoto"
import Header from "../../Components/UserComponents/header";
import profileImg from "../../image/UserImage/profile.png"

export default function SettingProfileUserPage(){
    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1 overflow-hidden mb-6 md:mt-24 lg:mt-28 md:px-[10%] lg:px-44">
                <div className="flex flex-col pt-4 mr-3">
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-10 mt-20 md:mt-0">
                        <div className="flex justify-center gap-10">
                            <img className="block h-24 w-24 rounded-full object-center" src={profileImg} alt=""/>
                            <div className="flex flex-col justify-center gap-3">
                                <ButtonPhoto/>
                                <ButtonHapusPhoto/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row">
                        <div className="rounded shadow w-full">
                            <div className="px-6 py-4 border-b border-light-grey">
                                <div className="font-bold text-xl text-[#F77E21]">PROFIL AKUN</div>
                            </div>

                            <form className="border-b border-light-grey">
                                <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6 my-5">
                                    <div>
                                        <label for="cateringname" className="block mb-2 text-sm font-bold text-[#F77E21]">Nama</label>
                                        <input type="text" id="cateringname" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="HTS"/>
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-bold text-[#F77E21]">Username</label>
                                        <input type="text" id="username" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="hardianto__"/>
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-bold text-[#F77E21]">E-mail</label>
                                        <input type="email" id="email" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="hardianto@gmail.com"/>
                                    </div>  
                                    <div>
                                        <label for="address" className="block mb-2 text-sm font-bold text-[#F77E21]">Alamat</label>
                                        <input type="text" id="address" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Jl. Satria Kasih"/>
                                    </div>
                                    <div>
                                        <label for="number" className="block mb-2 text-sm font-bold text-[#F77E21]">No. Telepon</label>
                                        <input type="tel" id="number" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0851xxxxxxxx"/>
                                    </div>
                                    <div className="md:mt-7 md:flex md:justify-end">
                                        <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-1 text-center">Simpan Data</button>
                                    </div>
                                </div>
                            </form>

                            <div className="px-6 py-4 border-b border-light-grey">
                                <div className="font-bold text-xl text-[#F77E21]">UBAH PASSWORD</div>
                            </div>

                            <form>
                                <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6 my-5">
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Password Sekarang</label>
                                        <input type="password" id="password" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Password Baru</label>
                                        <input type="password" id="password" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Konfirmasi Password Baru</label>
                                        <input type="password" id="password" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                                    </div>
                                    <div className="md:mt-7 md:flex md:justify-end">
                                        <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-1 text-center">Ubah Password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}