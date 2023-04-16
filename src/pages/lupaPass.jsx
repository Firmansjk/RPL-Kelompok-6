import logoOrange from "../image/logo tring.png";
import { Link } from "react-router-dom";

export default function LupaPassPage() {
    return (
      <>
      <div className="min-h-screen py-20 font-Montserrat" style={{backgroundImage: 'linear-gradient(160deg, #FFFFFF, #f5aa75'}}>
        <div className="container mx-auto">
          <div className="flex flex-col xl:h-[34em] content-center lg:flex-row w-10/12 lg:w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full py-8 px-6 flex flex-col gap-6 md:gap-4 justify-center">
                <div className="flex justify-center">
                  <img src={logoOrange} className="w-48 md:w-64 md:mr-4" alt="imgLogo"/>
                </div>
                <h2 className="text-2xl md:text-3xl mb-5 text-center text-[#F77E21] font-extrabold">Atur Ulang Password</h2>
                <form action="#" className="flex flex-col items-center">
                    <div className="w-10/12 lg:w-8/12">
                        <label htmlFor="text" className="block mb-2 text-xs md:text-sm font-bold text-[#F77E21]">Masukkan E-mail / No. Telepon</label>
                        <input type="text" name="text" id="text" className=" mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400" placeholder="email@something.com" required=""/>
                    </div>
    
                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
                        <Link to="/">
                        <button className="w-28 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ">Konfirmasi</button>
                        </Link>
                    </div>

                    <Link to="/" className="mt-6">
                        <p className="text-sm md:text-base font-medium hover:font-semibold text-[#F77E21]">Kembali ke Halaman Awal</p>
                    </Link>
                </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}