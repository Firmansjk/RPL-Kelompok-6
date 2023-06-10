import logoOrange from "../image/logo tring.png";

export default function VerificationUser() {
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
                <form action="#" className="flex flex-col items-center">
                    <p className="text-md md:text-lg mb-5 text-center text-[#F77E21] font-semibold">Klik Tombol "Verifikasi E-mail" untuk masuk ke halaman utama</p>
                    <button type="submit" className="w-36 text-xs md:text-sm bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ">Verifikasi E-Mail</button>
                </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}