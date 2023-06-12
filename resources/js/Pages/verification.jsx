import logoOrange from "../image/logo tring.png";
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerificationUser() {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
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
                <h2 className="text-2xl md:text-3xl mb-5 text-center text-[#F77E21] font-extrabold">Verifikasi Masuk</h2>
                <form onSubmit={submit} className="flex flex-col items-center">
                    <p className="text-md md:text-lg mb-5 text-center text-[#F77E21] font-semibold">Klik Tombol "Verifikasi E-mail" untuk masuk ke halaman utama</p>
                    <button disabled={processing} type="submit" className="w-36 text-xs md:text-sm bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ">Verifikasi E-Mail</button>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Log Out
                    </Link>
                </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}