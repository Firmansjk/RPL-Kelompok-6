import ButtonConfirmNewPass from "@/Components/vendorpage/ForConfirmNewPass/ButtonConfirmNP";
import logoOrange from "../image/logo tring.png";
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';

export default function ResetPassPage({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
      return () => {
          reset('password', 'password_confirmation');
      };
  }, []);

  const onHandleChange = (event) => {
      setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
      e.preventDefault();

      post(route('password.store'));
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
                        <label htmlFor="password" className="block mb-2 text-xs md:text-sm font-bold text-[#F77E21]">Password Baru</label>
                        <input 
                          type="password" 
                          name="password" 
                          id="password" 
                          value={data.password}
                          className=" mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"  
                          autoComplete="new-password"
                          isFocused={true}
                          onChange={onHandleChange}
                          />
                    </div>
                    <div className="w-10/12 lg:w-8/12">
                        <label htmlFor="password_confirmation" className="block mb-2 text-xs md:text-sm font-bold text-[#F77E21]">Konfirmasi Password Baru</label>
                        <input 
                          type="password" 
                          name="password_confirmation" 
                          value={data.password_confirmation}
                          className=" mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400" 
                          autoComplete="new-password"
                          onChange={onHandleChange}/>
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                    <div className="flex justify-center">
                      <ButtonConfirmNewPass disabled={processing}/>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}