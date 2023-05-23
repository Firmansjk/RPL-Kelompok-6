import { Link } from 'react-router-dom';
import sidePict from '../../image/login_page.png';
import logowhite from '../../image/logo tring white.png';

function RegisterPageUser(){
    return(
    <>
    <div className="min-h-screen py-20 font-Montserrat" style={{backgroundImage: 'linear-gradient(160deg, #FFFFFF, #f5aa75)'}}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:h-[34em] content-center lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-repeat-space" style={{backgroundImage: `url(${sidePict})`}}>
            <img src={logowhite} className="w-64 ml-[-1em]" alt="Logo E-Tring"/>
            <div>
              <p className="text-white font-bold text-[1.5em]">Sudah Punya Akun?</p>
            </div>
            <Link to="/loginpage" className="bg-white mt-10 mb-6 px-6 py-2 rounded-lg text-[#F77E21] font-semibold transition-all hover:bg-[#e4e1e1]">
              <button type="button">Login Akun</button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12 flex flex-col justify-center">
            <h2 className="text-3xl mb-5 text-center text-[#F77E21] font-extrabold">Register Akun</h2>
            <form action="#">
              <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-bold text-[#F77E21]">Username</label>
                  <input type="username" name="username" id="username" className="mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full px-2.5 py-1.5 placeholder-gray-400" placeholder="Enter Username" required=""/>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-[#F77E21]">E-mail</label>
                <input type="email" name="email" id="email" className="mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full px-2.5 py-1.5 placeholder-gray-400" placeholder="email@something.com" required=""/>
              </div>
              <div>
                  <label htmlFor="number" className="block mb-2 text-sm font-bold text-[#F77E21]">No. Telepon</label>
                  <input type="number" name="number" id="number" className="mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full px-2.5 py-1.5 placeholder-gray-400" placeholder="0812xxxxx" required=""/>
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full px-2.5 py-1.5 placeholder-gray-400" required=""/>
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Konfirmasi Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full px-2.5 py-1.5 placeholder-gray-400" required=""/>
              </div>
              <div className="mt-6 flex justify-center">
                <Link to="/loginpage">
                  <button className="w-28 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ">Register</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    );
}

export default RegisterPageUser