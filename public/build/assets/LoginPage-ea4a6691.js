import{_ as b,r as u,a as e,F as p,j as t,d as o}from"./app-f69b812a.js";import{l as x}from"./logo tring white-ff470b45.js";import{I as m}from"./InputError-2561beb8.js";const h="/build/assets/login_page-75644e81.png";function N(){const{data:a,setData:n,post:i,processing:d,errors:s,reset:c}=b({email:"",password:"",remember:""});u.useEffect(()=>()=>{c("password")},[]);const r=l=>{n(l.target.name,l.target.type==="checkbox"?l.target.checked:l.target.value)},g=l=>{l.preventDefault(),i(route("login"))};return e(p,{children:e("div",{className:"min-h-screen py-20 font-Montserrat",style:{backgroundImage:"linear-gradient(160deg, #FFFFFF, #f5aa75"},children:e("div",{className:"container mx-auto",children:t("div",{className:"flex flex-col xl:h-[34em] content-center lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden",children:[t("div",{className:"w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-repeat-space",style:{backgroundImage:`url(${h})`},children:[e("img",{src:x,className:"w-64 ml-[-1em]",alt:"img"}),e("div",{children:e("p",{className:"text-white font-bold text-[1.5em]",children:"Belum Punya Akun?"})}),e(o,{href:route("registerpage"),className:"bg-white mt-10 mb-6 px-6 py-2 rounded-lg text-[#F77E21] font-semibold transition-all hover:bg-[#e4e1e1]",children:e("button",{type:"button",children:"Buat Akun Baru"})})]}),t("div",{className:"w-full lg:w-1/2 py-8 px-6 md:py-16 md:px-12 lg:py-16 lg:px-12 flex flex-col justify-center",children:[e("h2",{className:"text-xl md:text-3xl lg:text-3xl mb-10 text-center text-[#F77E21] font-extrabold",children:"Login Akun Catering"}),t("form",{onSubmit:g,children:[t("div",{children:[e("label",{htmlFor:"email",className:"block mb-3 text-sm font-bold text-[#F77E21]",children:"Email"}),e("input",{type:"email",name:"email",id:"email",value:a.email,autoComplete:"username",onChange:r,className:" mb-5 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"}),e(m,{message:s.email,className:"mt-2"})]}),t("div",{children:[e("label",{htmlFor:"password",className:"block mb-3 text-sm font-bold text-[#F77E21]",children:"Password"}),e("input",{type:"password",name:"password",autoComplete:"current-password",id:"password",value:a.password,onChange:r,className:"mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"}),e(m,{message:s.password,className:"mt-2"})]}),t("div",{className:"flex items-center justify-between",children:[t("div",{className:"flex items-start",children:[e("div",{className:"flex items-center h-5",children:e("input",{id:"remember",value:a.remember,onChange:r,"aria-describedby":"remember",type:"checkbox",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"})}),e("div",{className:"ml-3 text-xs md:text-sm lg:text-sm",children:e("label",{htmlFor:"remember",className:"text-[#F77E21] font-semibold",children:"Remember me"})})]}),e(o,{href:route("lupapass"),className:"text-xs md:text-sm lg:text-sm font-semibold text-[#F77E21] hover:underline",children:"Lupa Password?"})]}),e("div",{className:"mt-10 flex justify-center",children:e("button",{disabled:d,className:"w-20 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold",type:"submit",children:"Login "})})]})]})]})})})})}export{N as default};
