import React from "react";
import { useRef } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';


function UpdatePassword () {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, put, processing, errors, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return(
        <>
            <form onSubmit={updatePassword}>
                <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6 my-5">
                    <div>
                        <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Password Sekarang</label>
                        <input 
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password" 
                        id="current_password"
                        className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Password Baru</label>
                        <input 
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password" 
                        id="password" 
                        className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-bold text-[#F77E21]">Konfirmasi Password Baru</label>
                        <input 
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password" className="border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="*******"/>
                    </div>
                    <div className="md:mt-7 md:flex md:justify-end">
                        <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-1 text-center">Ubah Password</button>
                    </div>
                </div>
            </form>
            </>
    )
}

export default UpdatePassword