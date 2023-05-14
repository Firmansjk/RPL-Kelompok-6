import{_ as i,r as c,a as e,F as m,j as t,d as b}from"./app-59a3e9f1.js";const g="/build/assets/login_page-75644e81.png",u="/build/assets/logo tring white-2dc575d0.png";function f(){const{data:r,setData:o,post:s,processing:h,errors:p,reset:n}=i({name:"",email:"",password:"",password_confirmation:""});c.useEffect(()=>()=>{n("password","password_confirmation")},[]);const l=a=>{o(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},d=a=>{a.preventDefault(),s(route("register"))};return e(m,{children:e("div",{className:"min-h-screen py-20 font-Montserrat",style:{backgroundImage:"linear-gradient(160deg, #FFFFFF, #f5aa75)"},children:e("div",{className:"container mx-auto",children:t("div",{className:"flex flex-col xl:h-[34em] content-center lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden",children:[t("div",{className:"w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-repeat-space",style:{backgroundImage:`url(${g})`},children:[e("img",{src:u,className:"w-64 ml-[-1em]",alt:"Logo E-Tring"}),e("div",{children:e("p",{className:"text-white font-bold text-[1.5em]",children:"Sudah Punya Akun?"})}),e(b,{href:route("loginpage"),className:"bg-white mt-10 mb-6 px-6 py-2 rounded-lg text-[#F77E21] font-semibold transition-all hover:bg-[#e4e1e1]",children:e("button",{type:"button",children:"Login Akun"})})]}),t("div",{className:"w-full lg:w-1/2 py-16 px-12 flex flex-col justify-center",children:[e("h2",{className:"text-3xl mb-5 text-center text-[#F77E21] font-extrabold",children:"Register Akun Catering"}),t("form",{onSubmit:d,children:[t("div",{children:[e("label",{htmlFor:"name",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"Username"}),e("input",{type:"name",name:"name",id:"name",value:r.name,autoComplete:"username",onChange:l,className:" mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400",required:""})]}),t("div",{children:[e("label",{htmlFor:"email",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"E-mail"}),e("input",{type:"email",name:"email",id:"email",value:r.email,onChange:l,className:" mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400",required:!0})]}),t("div",{children:[e("label",{htmlFor:"password",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"Password"}),e("input",{type:"password",name:"password",id:"password",value:r.password,onChange:l,className:" mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400",required:!0})]}),t("div",{children:[e("label",{htmlFor:"password_confirmation",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"Confirm Password"}),e("input",{type:"password",name:"password_confirmation",id:"password_confirmation",value:r.password_confirmation,autoComplete:"new-password",onChange:l,className:"bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400",required:!0})]}),e("div",{className:"mt-6 flex justify-center",children:e("button",{className:"w-28 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold ",children:"Register"})})]})]})]})})})})}export{f as default};
