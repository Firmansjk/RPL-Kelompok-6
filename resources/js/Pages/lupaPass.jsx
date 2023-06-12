import ButtonConfirmPass from "@/Components/vendorpage/ForConfirmPass/buttonConfirmPass";
import logoOrange from "../image/logo tring.png";
import { Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

export default function LupaPassPage({ status }) {
    const { data, setData, post, processing, errors } = useForm({
      email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

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
                <form onSubmit={submit} className="flex flex-col items-center">
                    <div className="w-10/12 lg:w-8/12">
                        <label htmlFor="text" className="block mb-2 text-xs md:text-sm font-bold text-[#F77E21]">Masukkan E-mail</label>
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          value={data.email}
                          isFocused={true}
                          onChange={onHandleChange}
                          className=" mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400" 
                          placeholder="email@something.com" 
                          required=""/>

                    <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center">
                        <ButtonConfirmPass disabled={processing}/>
                    </div>
                </form >
                <Link href={route('loginpage')} className="mt-2 flex flex-col md:flex-row justify-center">
                    <p className="text-sm md:text-base font-medium hover:font-semibold text-[#F77E21]">Kembali ke Halaman Awal</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}