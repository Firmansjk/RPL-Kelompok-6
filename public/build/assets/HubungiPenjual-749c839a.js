import{W as i,r as n,j as e,F as m,a as t,d as r}from"./app-5a6d1f2d.js";import{l as g}from"./logo tring-83bb4ec9.js";import{p as h}from"./profile-41b39b38.js";import{i as f}from"./image-63692e15.js";import"./index-f9a0a89d.js";function b(){const{user:l}=i().props,[a,s]=n.useState(!1),[d,p]=n.useState(!1),u=o=>{p(o)};let c=n.useRef();return n.useEffect(()=>{let o=x=>{c.current.contains(x.target)||s(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}}),e(m,{children:e("nav",{className:"fixed w-full flex flex-wrap items-center justify-between px-2 py-1 lg:py-3 lg:px-40 bg-white shadow-lg mb-3 z-10",children:t("div",{ref:c,className:"container mx-auto flex flex-wrap items-center justify-between",children:[t("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[e("img",{src:g,className:"w-28 mt-2",alt:"logo"}),e("button",{onClick:()=>s(!a),className:"relative group block lg:hidden",children:e("div",{className:"relative flex overflow-hidden items-center justify-center w-[30px] h-[30px] transform transition-all",children:t("div",{className:"flex flex-col justify-center gap-1 w-[20px] h-[25px] transform transition-all duration-300 origin-center overflow-hidden",children:[e("div",{className:a===!0?"bg-[#F77E21] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10":"bg-[#F77E21] h-[0.15em] w-7 transform transition-all duration-300 origin-left"}),e("div",{className:a===!0?"bg-[#F77E21] h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75":"bg-[#F77E21] h-[0.15em] w-7 rounded transform transition-all duration-300 delay-75"}),e("div",{className:a===!0?"bg-[#F77E21] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150":"bg-[#F77E21] h-[0.15em] w-7 transform transition-all duration-300 origin-left delay-150"}),t("div",{className:a===!0?"absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12":"absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0",children:[e("div",{className:a===!0?"absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45":"absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"}),e("div",{className:a===!0?"absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45":"absolute bg-[#F77E21] h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300"})]})]})})})]}),e("div",{className:"lg:flex flex-grow items-center"+(a?" flex":" hidden"),children:t("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center",children:[e("li",{className:"nav-item",children:t(r,{href:route("user.home"),className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#F77E21] hover:opacity-75",children:[e("i",{className:"fab fa-facebook-square text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Home"})]})}),e("li",{className:"nav-item",children:t(r,{href:route("user.searchcatering"),className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#F77E21] hover:opacity-75",children:[e("i",{className:"fab fa-twitter text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Katering"})]})}),e("li",{className:"nav-item",children:t(r,{href:route("user.searchmenu"),className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#F77E21] hover:opacity-75",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Menu"})]})}),e("hr",{className:"absolute top-[10.8em] border-t mx-2 border-grey-light w-full lg:hidden"}),t("li",{className:"nav-item",children:[t(r,{href:route("user.profilepage"),className:"lg:hidden px-3 pt-5 pb-2 flex items-center text-xs uppercase font-bold leading-snug text-[#F77E21] hover:opacity-75",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Profil Akun"})]}),e(r,{href:route("user.logout"),method:"post",className:"lg:hidden px-3 pt-1 pb-2 flex items-center text-xs uppercase",children:e("button",{type:"button",className:"text-white bg-[#F77E21] hover:bg-yellow-500 font-medium rounded-full text-xs px-4 py-2 text-center",children:"LOG OUT"})})]}),t("li",{className:"p-1 flex flex-row items-center mr-4",children:[e("button",{onClick:()=>u(!d),className:"hidden lg:block p-1 bg-white border border-2 border-gray-300 rounded-xl",children:e("img",{className:"inline-block h-6 w-6 md:w-8 md:h-8 rounded-full",src:l.photo?`/upload/user_profile/${l.photo}`:h,alt:"Profile Picture"})}),e("div",{id:"ProfileDropDown",className:d===!0?"rounded block shadow-md bg-white absolute mt-40 right-[11em] z-10 overflow-hidden":"rounded hidden shadow-md bg-white absolute mt-48 right-5 z-10",children:t("ul",{className:"list-reset group",children:[e(r,{href:route("user.profilepage"),className:"no-underline px-4 py-2 block text-black hover:bg-[#F77E21] hover:text-white",children:"Profil Akun"}),e("li",{children:e("hr",{className:"border-t mx-2 border-grey-light"})}),e(r,{href:route("user.logout"),method:"post",className:"no-underline px-4 py-2 block text-black hover:bg-[#F77E21] hover:text-white",children:"Logout"})]})})]})]})})]})})})}function E(){const{user:l}=i().props,{users:a}=i().props,s=a.phone.replace(/^0/,"62");return e(m,{children:t("div",{className:"min-h-screen flex flex-col",children:[e(b,{}),t("main",{className:"px-2 flex flex-col justify-center items-center gap-4 md:px-[10%] lg:px-44 mb-10 mt-28 lg:mt-36",children:[e("img",{src:f,alt:"Food Img",className:"w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-3 border border-[#F77E21] border-4 rounded-full object-cover"}),e("p",{className:"mb-2 text-lg md:text-left lg:text-2xl font-bold leading-tight text-neutral-800",children:"Hubungi Toko Via :"}),e("a",{href:`tel:${a.phone}`,className:"self-center w-[15em] md:w-[25em] text-center mb-2 rounded bg-[#F77E21] px-6 py-4 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",children:"Telepon"}),e("a",{href:`https://wa.me/${s}?text=Halo%2C%20permisi%20saya%20${l.name}%20dari%20website%20e-tring.%20Saya%20ingin%20memesan%20catering%20anda.`,className:"self-center w-[15em] md:w-[25em] text-center mb-2 rounded bg-[#F77E21] px-6 py-4 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",children:"WhatsApp"}),e("a",{href:`sms:${a.phone}`,className:"self-center w-[15em] md:w-[25em] text-center mb-2 rounded bg-[#F77E21] px-6 py-4 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",children:"SMS"})]})]})})}export{E as default};
