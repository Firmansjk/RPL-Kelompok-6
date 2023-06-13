import React from 'react';
import { useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import logo from '../../image/logo tring.png';
import InputError from '@/Components/InputError';

function LoginPageAdmin({ csrf_token }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  });

  useEffect(() => {
    return () => {
        reset('password');
    };
  }, []);


  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
  
    Inertia.post(route('login'), {
      email: data.email,
      password: data.password,
      remember: data.remember,
      _token: csrf_token,
    });
  };
  return (
    <>
    <div className="min-h-screen py-20 font-Montserrat" style={{backgroundImage: 'linear-gradient(160deg, #FFFFFF, #f5aa75'}}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:h-[34em] items-center w-10/12 lg:w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full py-8 px-6 lg:py-8 flex flex-col justify-center items-center">
            <img src={logo} className="w-64 ml-[-1em]" alt="img"/>
            <h2 className="text-xl md:text-3xl lg:text-3xl mb-10 text-center text-[#F77E21] font-extrabold">Login Admin</h2>
            <form onSubmit={submit}>
              <div>
                  <label htmlFor="email" className="block mb-3 text-sm font-bold text-[#F77E21]">Username</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className=" mb-5 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400" 
                    value={data.email} 
                    autoComplete="username"
                    onChange={handleOnChange} 
                    />
                    <InputError message={errors.email} className="mt-2" />
              </div>
              <div>
                  <label htmlFor="password" className="block mb-3 text-sm font-bold text-[#F77E21]">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    autoComplete="current-password"
                    id="password" 
                    value={data.password} 
                    onChange={handleOnChange}
                    className="mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400" 
                    />
                    <InputError message={errors.password} className="mt-2" />
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" value={data.remember} onChange={handleOnChange} aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
                      </div>
                      <div className="ml-3 text-xs md:text-sm lg:text-sm">
                        <label htmlFor="remember" className="text-[#F77E21] font-semibold">Remember me</label>
                      </div>
                  </div>
              </div>
              <div className="mt-10 flex flex-col gap-6 items-center">
                  <button disabled={processing} className="w-20 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPageAdmin;
