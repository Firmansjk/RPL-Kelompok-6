import{a as e,j as t,r as m,W as p,_ as x,F as g}from"./app-a096219a.js";import{H as v,S as w}from"./sidebar-d234dbf9.js";import{H as y,p as N}from"./header-9fb4c73b.js";import{d as u}from"./index-ccfd559c.js";import F from"./UpdatePassword-0137ebdc.js";import"./logo tring-83bb4ec9.js";import"./logo tring white-ff470b45.js";const k="/build/assets/image-4e5a37a4.png";function P({open:l,onClose:a,children:o}){return e("div",{onClick:a,className:`
        fixed inset-0 flex justify-center items-center transition-colors
        ${l?"visible bg-black/20 z-10":"invisible"}
        `,children:t("div",{onClick:n=>n.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-72 md:w-[30em]
                ${l?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:a,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),o]})})}function C(){const[l,a]=m.useState(null),o=i=>{i.preventDefault();const d=new FormData;d.append("sampul",l),u.Inertia.post("/vendor/sampul/update",d)},n=i=>{a(i.target.files[0])},[c,s]=m.useState(!1);return t("div",{children:[e("button",{onClick:()=>s(!0),type:"submit",className:"relative left-[50%] translate-x-[-50%] top-[-9em] lg:top-[-11em] text-white bg-[#F77E21] hover:bg-yellow-600 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs lg:text-base px-4 py-2 shadow-lg border border-4",children:"Ganti Foto Sampul"}),e(P,{open:c,onClose:()=>s(!1),children:t("form",{onSubmit:o,encType:"multipart/form-data",children:[e("div",{className:"mx-auto my-4 w-40 md:w-60",children:e("p",{className:"text-xl font-bold text-[#F77E21] mb-6",children:"Ganti Foto Sampul"})}),t("div",{className:"mb-6",children:[e("label",{htmlFor:"message",className:"block mb-2 text-sm font-bold text-[#F77E21] text-start",children:"PILIH FOTO"}),e("input",{className:"relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none",type:"file",onChange:n,accept:"image/*"}),e("p",{className:"text-sm font-medium text-[#F77E21] mt-3 text-start",children:'Klik "Pilih File" untuk menambah gambar'})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{type:"submit",className:"btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",children:"Simpan Perubahan"}),e("button",{className:"btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",onClick:()=>s(!1),children:"Batalkan"})]})]})})]})}function E({open:l,onClose:a,children:o}){return e("div",{onClick:a,className:`
        fixed inset-0 flex justify-center items-center transition-colors
        ${l?"visible bg-black/20 z-10":"invisible"}
        `,children:t("div",{onClick:n=>n.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-72 md:w-[30em]
                ${l?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:a,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),o]})})}function b(){const[l,a]=m.useState(!1),[o,n]=m.useState(null);return t("div",{children:[e("button",{onClick:()=>a(!0),type:"submit",className:"text-white bg-[#F77E21] hover:bg-yellow-600 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-4 py-2 md:ml-60 lg:ml-64",children:"Ganti Foto Profil"}),e(E,{open:l,onClose:()=>a(!1),children:t("form",{onSubmit:i=>{i.preventDefault();const d=new FormData;d.append("photo",o),u.Inertia.post("/vendor/profile/update",d)},encType:"multipart/form-data",children:[e("div",{className:"mx-auto my-4 w-40 md:w-60",children:e("p",{className:"text-xl font-bold text-[#F77E21] mb-6",children:"Ganti/Tambah Foto"})}),t("div",{className:"mb-6",children:[e("label",{htmlFor:"message",className:"block mb-2 text-sm font-bold text-[#F77E21] text-start",children:"PILIH FOTO"}),e("input",{className:"relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none",type:"file",accept:"image/*",onChange:i=>{n(i.target.files[0])}}),e("p",{className:"text-sm font-medium text-[#F77E21] mt-3 text-start",children:'Klik "Pilih File" untuk menambah gambar'})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{type:"submit",className:"btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",children:"Simpan Perubahan"}),e("button",{className:"btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",onClick:()=>a(!1),children:"Batalkan"})]})]})})]})}function S({open:l,onClose:a,children:o}){return e("div",{onClick:a,className:`
            fixed inset-0 flex justify-center items-center transition-colors
            ${l?"visible bg-black/20 z-10":"invisible"}
            `,children:t("div",{onClick:n=>n.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-56 md:w-80
                ${l?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:a,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),o]})})}function f(){const[l,a]=m.useState(!1),[o,n]=m.useState(null);return t("div",{children:[e("button",{onClick:()=>a(!0),type:"submit",className:"text-white bg-red-600 hover:bg-red-400 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 md:ml-60 lg:ml-64",children:"Hapus Foto Profil"}),t(S,{open:l,onClose:()=>a(!1),children:[e(v,{size:56,className:"mx-auto text-[#F77E21]"}),t("form",{onSubmit:s=>{s.preventDefault(),u.Inertia.post(route("/vendor/profile/update"),{photo:o})},children:[t("div",{className:"mx-auto my-4 w-40 md:w-60",children:[e("p",{className:"text-lg font-bold text-black mb-4",children:"Hapus"}),e("p",{className:"text-sm md:text-sm",children:"Apakah anda yakin mau menghapus Foto Profil anda?"})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{type:"button",onClick:()=>{u.Inertia.delete(route("vendor.deleteProfile"))},className:"btn bg-red-500 text-white font-semibold py-2 rounded-lg w-full",children:"Hapus"}),e("button",{className:"btn bg-[#F77E21] text-white font-semibold py-2 rounded-lg w-full",onClick:()=>a(!1),children:"Batalkan"})]})]})]})]})}function $(){const{user:l}=p().props,{data:a,setData:o,patch:n,put:c,processing:s,errors:i,reset:d}=x({name:l.name,email:l.email,username:l.username,address:l.address,phone:l.phone,vendor_info:l.vendor_info}),h=r=>{r.preventDefault(),n(route("profile.change"))};return e(g,{children:e("div",{className:"mx-auto bg-[#FFF9EB]",children:e("div",{class:"min-h-screen flex flex-col",children:t("div",{className:"flex flex-1",children:[e(w,{}),t("main",{className:"bg-white-300 flex-1 overflow-hidden mb-6",children:[e(y,{}),t("div",{className:"flex flex-col pt-4 mr-3",children:[t("div",{className:"mt-20 md:mt-0 ml-6 mr-2",children:[e("img",{className:"w-full h-40 lg:h-72 rounded-2xl object-cover",src:l.sampul?`/upload/vendor_sampul/${l.sampul}`:k,alt:"Food Img"}),e(C,{}),t("div",{className:"absolute flex flex-row ap-2 mt-12 md:hidden",children:[e(b,{setData:o,submit:h}),e(f,{})]}),t("div",{className:"absolute hidden md:flex md:flex-col md:gap-2",children:[e(b,{setData:o,submit:h}),e(f,{})]}),e("div",{className:"relative overflow-hidden left-[50%] translate-x-[-50%] top-[-5em] w-28 h-28 md:w-44 md:h-44 md:left-[7em] md:translate-x[0%] md:top-[-4.5em] lg:w-52 lg:h-52 lg:top-[-5.5em] border border-white border-8 rounded-full",children:e("img",{className:"w-full h-full object-cover",src:l.photo?`/upload/vendor_profile/${l.photo}`:N,alt:"Profile Picture"})})]}),e("div",{className:"flex flex-1 flex-col mt-[1em] md:flex-row lg:flex-row mx-4 mr-5 mt-[-3.25em] md:mr-0 md:mt-[-2.75em] lg:mr-0 lg:mt-[-3.25em]",children:t("div",{className:"rounded shadow bg-white mx-2 w-full",children:[e("div",{className:"px-6 py-4 border-b border-light-grey",children:e("div",{className:"font-bold text-xl text-[#F77E21]",children:"PROFIL AKUN"})}),e("form",{onSubmit:h,className:"border-b border-light-grey",children:t("div",{className:"grid gap-6 mb-6 md:grid-cols-2 mx-6 my-5",children:[t("div",{children:[e("label",{htmlFor:"name",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"Nama Katering"}),e("input",{type:"text",id:"name",value:a.name,onChange:r=>o("name",r.target.value),className:"border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Pojok Dapur"})]}),t("div",{children:[e("label",{htmlFor:"username",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"Username"}),e("input",{type:"text",id:"username",name:"username",value:a.username,onChange:r=>o("username",r.target.value),className:"border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"pojokdapur123"})]}),t("div",{children:[e("label",{htmlFor:"email",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"E-mail"}),e("input",{type:"email",id:"email",name:"email",value:a.email,onChange:r=>o("email",r.target.value),className:"border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"pojokdapur@gmail.com"})]}),t("div",{children:[e("label",{htmlFor:"address",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"Alamat Katering"}),e("input",{type:"text",id:"address",name:"address",value:a.address,onChange:r=>o("address",r.target.value),className:"border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Jl. Pajjaiang"})]}),t("div",{children:[e("label",{htmlFor:"number",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"No. Telepon"}),e("input",{type:"tel",id:"number",name:"number",value:a.phone,onChange:r=>o("phone",r.target.value),className:"border border-[#F77E21] text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"0851xxxxxxxx"})]}),t("div",{children:[e("label",{htmlFor:"Deskripsi Katering",className:"block mb-2 text-sm font-bold text-[#F77E21]",children:"Deskripsi Katering"}),e("textarea",{id:"description",name:"description",value:a.vendor_info,onChange:r=>o("vendor_info",r.target.value),className:"border border-[#F77E21] rounded-lg w-full h-24 p-3 text-sm",style:{resize:"none"},placeholder:"Enter some text"})]}),e("div",{className:"mt-1 mb-3",children:e("button",{type:"submit",className:"text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-1 text-center",children:"Simpan Data"})})]})}),e("div",{className:"px-6 py-4 border-b border-light-grey",children:e("div",{className:"font-bold text-xl text-[#F77E21]",children:"UBAH PASSWORD"})}),e(F,{})]})})]})]})]})})})})}export{$ as default};
