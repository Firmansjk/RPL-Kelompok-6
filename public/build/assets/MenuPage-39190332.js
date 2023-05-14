import{a as e,j as t,r as s,W as b,F as f}from"./app-a096219a.js";import{H as x,S as g}from"./sidebar-d234dbf9.js";import{H as N}from"./header-9fb4c73b.js";import{d as y}from"./index-ccfd559c.js";import"./logo tring-83bb4ec9.js";import"./logo tring white-ff470b45.js";function w({open:r,onClose:l,children:a}){return e("div",{onClick:l,className:`
            fixed inset-0 flex justify-center items-center transition-colors
            ${r?"visible bg-black/20 z-10":"invisible"}
            `,children:t("div",{onClick:i=>i.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-56 md:w-80
                ${r?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:l,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),a]})})}function k(){const[r,l]=s.useState(!1);return t("div",{children:[e("button",{onClick:()=>l(!0),type:"submit",className:"text-white bg-red-600 hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-xs px-2 py-2",children:"Hapus"}),t(w,{open:r,onClose:()=>l(!1),children:[e(x,{size:56,className:"mx-auto text-[#F77E21]"}),t("form",{children:[t("div",{className:"mx-auto my-4 w-40 md:w-60",children:[e("p",{className:"text-lg font-bold text-black mb-4",children:"Hapus"}),e("p",{className:"text-sm md:text-sm",children:"Apakah anda yakin mau menghapus Paket Menu ini?"})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{className:"btn bg-red-500 text-white font-semibold py-2 rounded-lg w-full",children:"Hapus"}),e("button",{className:"btn bg-[#F77E21] text-white font-semibold py-2 rounded-lg w-full",onClick:()=>l(!1),children:"Batalkan"})]})]})]})]})}function v({open:r,onClose:l,children:a}){return e("div",{onClick:l,className:`
            fixed inset-0 flex justify-center items-center transition-colors
            ${r?"visible bg-black/20 z-10":"invisible"}
            `,children:t("div",{onClick:i=>i.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-72 md:w-[30em]
                ${r?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:l,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),a]})})}function _(){const[r,l]=s.useState(!1);return t("div",{children:[e("button",{onClick:()=>l(!0),type:"submit",className:"text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2",children:"Edit"}),t(v,{open:r,onClose:()=>l(!1),children:[e("div",{className:"mx-auto my-4 w-40 md:w-60",children:e("p",{className:"text-xl font-bold text-[#F77E21] mb-6",children:"Edit Paket Menu"})}),t("form",{children:[t("div",{class:"mb-6",children:[e("label",{for:"paketmenu",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"NAMA PAKET MENU"}),e("input",{type:"text",id:"text",className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Nama Paket Menu"})]}),t("div",{class:"mb-6",children:[e("label",{for:"message",className:"block mb-2 text-sm font-bold text-[#F77E21] text-start",children:"GAMBAR MENU"}),e("input",{className:"relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none",type:"file",id:"formFile"}),e("p",{className:"text-sm font-medium text-[#F77E21] mt-3 text-start",children:'Klik "Pilih File" untuk menambah gambar'})]}),t("div",{class:"mb-6",children:[e("label",{for:"message",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"DAFTAR MENU"}),e("textarea",{id:"message",style:{resize:"none"},className:"block p-2.5 h-28 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400",placeholder:"Daftar Menu"})]}),t("div",{class:"mb-6",children:[e("label",{for:"harga",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"HARGA MENU"}),e("input",{type:"number",id:"number",className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Rp.10000"})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{className:"btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",children:"Simpan Perubahan"}),e("button",{className:"btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",onClick:()=>l(!1),children:"Batalkan"})]})]})]})]})}function E({open:r,onClose:l,children:a}){return e("div",{onClick:l,className:`
            fixed inset-0 flex justify-center items-center transition-colors
            ${r?"visible bg-black/20 z-10":"invisible"}
            `,children:t("div",{onClick:i=>i.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-56 md:w-80
                ${r?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:l,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),a]})})}function M(){const[r,l]=s.useState(!1);return t("div",{children:[e("button",{onClick:()=>l(!0),type:"submit",className:"text-white bg-red-600 hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-xs px-2 py-2",children:"Hapus"}),t(E,{open:r,onClose:()=>l(!1),children:[e(x,{size:56,className:"mx-auto text-[#F77E21]"}),t("form",{children:[t("div",{className:"mx-auto my-4 w-40 md:w-60",children:[e("p",{className:"text-lg font-bold text-black mb-4",children:"Hapus"}),e("p",{className:"text-sm md:text-sm",children:"Apakah anda yakin mau menghapus Menu Catering ini?"})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{className:"btn bg-red-500 text-white font-semibold py-2 rounded-lg w-full",children:"Hapus"}),e("button",{className:"btn bg-[#F77E21] text-white font-semibold py-2 rounded-lg w-full",onClick:()=>l(!1),children:"Batalkan"})]})]})]})]})}function F({open:r,onClose:l,children:a}){return e("div",{onClick:l,className:`
            fixed inset-0 flex justify-center items-center transition-colors
            ${r?"visible bg-black/20 z-10":"invisible"}
            `,children:t("div",{onClick:i=>i.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-72 md:w-[30em]
                ${r?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:l,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),a]})})}function C(){const[r,l]=s.useState(!1);return t("div",{children:[e("button",{onClick:()=>l(!0),type:"submit",className:"text-black bg-[#22D7FF] hover:bg-cyan-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2",children:"Edit"}),t(F,{open:r,onClose:()=>l(!1),children:[e("div",{className:"mx-auto my-4 w-40 md:w-60",children:e("p",{className:"text-xl font-bold text-[#F77E21] mb-6",children:"Edit Menu Catering"})}),t("form",{children:[t("div",{class:"mb-6",children:[e("label",{for:"email",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"NAMA MENU"}),e("input",{type:"text",id:"text",className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Nama Menu Katering"})]}),t("div",{class:"mb-6",children:[e("label",{for:"message",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"GAMBAR MENU"}),e("input",{className:"relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none",type:"file",id:"formFile"}),e("p",{className:"text-sm font-medium text-[#F77E21] mt-3 text-start",children:'Klik "Pilih File" untuk mengganti gambar'})]}),t("div",{class:"mb-6",children:[e("label",{for:"harga",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"HARGA MENU"}),e("input",{type:"number",id:"number",className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Rp.10000"})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{className:"btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",children:"Simpan Perubahan"}),e("button",{className:"btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",onClick:()=>l(!1),children:"Batalkan"})]})]})]})]})}function h({open:r,onClose:l,children:a}){return e("div",{onClick:l,className:`
            fixed inset-0 flex justify-center items-center transition-colors
            ${r?"visible bg-black/20 z-10":"invisible"}
            `,children:t("div",{onClick:i=>i.stopPropagation(),className:`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-72 md:w-[30em]
                ${r?"scale-100 opacity-100":"scale-125 opacity-0"}
                `,children:[e("button",{onClick:l,className:`absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`,children:"X"}),a]})})}function A(){const[r,l]=s.useState(!1),[a,i]=s.useState({product_name:"",product_price:"",product_picture:null}),d=n=>{const{name:o,value:m,files:u}=n.target;i(p=>({...p,[o]:o==="product_picture"?u[0]:m}))};return t("div",{children:[e("button",{type:"submit",onClick:()=>l(!0),className:"text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4",children:"Tambah"}),t(h,{open:r,onClose:()=>l(!1),children:[e("div",{className:"mx-auto my-4 w-52 md:w-72",children:e("p",{className:"text-xl font-bold text-[#F77E21] mb-6",children:"Tambah Menu Catering"})}),t("form",{onSubmit:n=>{n.preventDefault();const o=new FormData;o.append("product_name",a.product_name),o.append("product_price",a.product_price),o.append("product_picture",a.product_picture),y.Inertia.post(route("vendor.add.product"),o,{})},encType:"multipart/form-data",children:[t("div",{className:"mb-6",children:[e("label",{htmlFor:"product_name",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"NAMA MENU"}),e("input",{type:"text",id:"product_name",name:"product_name",value:a.product_name,onChange:d,required:!0,className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Nama Menu Katering"})]}),t("div",{className:"mb-6",children:[e("label",{htmlFor:"product_picture",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"GAMBAR MENU"}),e("input",{className:"relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none",type:"file",accept:"image/*",name:"product_picture",id:"product_picture",onChange:d,required:!0}),e("p",{className:"text-sm font-medium text-[#F77E21] mt-3 text-start",children:'Klik "Pilih File" untuk menambah gambar'})]}),t("div",{className:"mb-6",children:[e("label",{htmlFor:"product_price",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"HARGA MENU"}),e("input",{type:"text",name:"product_price",id:"product_price",value:a.product_price,onChange:d,required:!0,className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Rp.10000"})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{type:"submit",className:"btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",children:"Tambah Menu"}),e("button",{className:"btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",onClick:()=>l(!1),children:"Batalkan"})]})]})]})]})}function P(){const[r,l]=s.useState(!1),[a,i]=s.useState({packet_name:"",packet_price:"",packet_desc:"",packet_picture:null}),d=n=>{const{name:o,value:m,files:u}=n.target;i(p=>({...p,[o]:o==="packet_picture"?u[0]:m}))};return t("div",{children:[e("button",{type:"submit",onClick:()=>l(!0),className:"text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4",children:"Tambah"}),t(h,{open:r,onClose:()=>l(!1),children:[e("div",{className:"mx-auto my-4 w-52 md:w-72",children:e("p",{className:"text-xl font-bold text-[#F77E21] mb-6",children:"Tambah Menu Catering"})}),t("form",{onSubmit:n=>{n.preventDefault();const o=new FormData;o.append("packet_name",a.packet_name),o.append("packet_price",a.packet_price),o.append("packet_picture",a.packet_picture),o.append("packet_desc",a.packet_desc),Inertia.post(route("vendor.add.packet"),o,{})},encType:"multipart/form-data",children:[t("div",{className:"mb-6",children:[e("label",{htmlFor:"packet_name",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"NAMA MENU"}),e("input",{type:"text",id:"packet_name",name:"packet_name",className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Nama Menu Katering",value:a.packet_name,onChange:d,required:!0})]}),t("div",{className:"mb-6",children:[e("label",{htmlFor:"packet_picture",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"GAMBAR MENU"}),e("input",{className:"relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none",type:"file",id:"packet_picture",name:"packet_picture",onChange:d,required:!0}),e("p",{className:"text-sm font-medium text-[#F77E21] mt-3 text-start",children:'Klik "Pilih File" untuk menambah gambar'})]}),t("div",{className:"mb-6",children:[e("label",{htmlFor:"packet_desc",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"DAFTAR MENU"}),e("input",{type:"text",id:"packet_desc",name:"packet_desc",className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Isi Menu Katering",value:a.packet_desc,onChange:d})]}),t("div",{className:"mb-6",children:[e("label",{htmlFor:"packet_price",className:"block mb-2 text-md font-bold text-[#F77E21] text-start",children:"HARGA MENU"}),e("input",{type:"text",id:"packet_price",name:"packet_price",className:"bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5",placeholder:"Rp.10000",value:a.packet_price,onChange:d,required:!0})]}),t("div",{className:"flex gap-4 mt-8",children:[e("button",{type:"submit",className:"btn bg-green-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",children:"Tambah Menu"}),e("button",{className:"btn bg-red-600 text-white text-xs md:text-sm font-semibold py-2 rounded-lg w-full",onClick:()=>l(!1),children:"Batalkan"})]})]})]})]})}function U(r){const[l,a]=s.useState(1),i=n=>{a(n)},{packets:d=[]}=b().props,{products:c=[]}=b().props;return e(f,{children:e("div",{className:"mx-auto bg-[#FFF9EB]",children:e("div",{className:"min-h-screen flex flex-col",children:t("div",{className:"flex flex-1",children:[e(g,{}),t("main",{className:"bg-white-300 flex-1 overflow-hidden mb-6",children:[e(N,{}),t("div",{className:"flex flex-col",children:[e("div",{className:"mb-5 ml-4 mr-3 text-xs md:text-sm font-medium text-center text-gray-500 border-b border-gray-300",children:t("ul",{className:"flex flex-wrap -mb-px",children:[e("li",{onClick:()=>i(1),className:l===1?"mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg":"mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300",children:e("button",{type:"button",children:"Paket Menu"})}),e("li",{onClick:()=>i(2),className:l===2?"mr-2 inline-block p-4 text-[#F77E21] border-b-2 border-[#F77E21] font-bold rounded-t-lg":"mr-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300",children:e("button",{type:"button",children:"Menu Katering"})})]})}),t("div",{className:l===1?"block":"hidden",children:[e("div",{className:"flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-5",children:e("p",{className:"font-bold text-3xl text-[#F77E21] ml-2",children:"LIST PAKET MENU"})}),t("div",{className:"flex flex-1 flex-col md:flex-row lg:flex-row lg:mr-4 ml-6 mr-3 mb-6 justify-between content-center",children:[t("div",{className:"relative w-full md:w-[60%] lg:w-[70%]",children:[e("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e("svg",{"aria-hidden":"true",className:"w-5 h-5 text-black",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e("input",{type:"search",id:"default-search",className:"block w-full p-3 pl-10 text-sm text-black border border-[#F77E21] rounded-lg bg-white",placeholder:"Cari Menu"}),e("button",{type:"submit",className:"text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2",children:"Search"})]}),e("div",{className:"pl-0 mt-6 md:pl-6 md:mt-0 lg:pl-6 lg:mt-0 flex flex-row gap-3",children:e(P,{type:"submit",className:"text-black bg-green-400 hover:bg-green-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4",children:"Tambah"})})]}),e("div",{className:"flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mr-5 md:mr-3 lg:mr-3",children:e("div",{className:"rounded shadow bg-white mx-2 w-full",children:e("div",{className:"overflow-x-auto",children:t("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-[#F77E21] uppercase bg-white",children:t("tr",{className:"border-b-2 border-black",children:[e("th",{scope:"col",className:"px-6 py-3",children:"No."}),e("th",{scope:"col",className:"px-6 py-3",children:"Paket Menu"}),e("th",{scope:"col",className:"px-6 py-3",children:"Gambar Menu"}),e("th",{scope:"col",className:"px-6 py-3",children:"Daftar Menu"}),e("th",{scope:"col",className:"px-6 py-3",children:"Harga Menu"}),e("th",{scope:"col",className:"px-6 py-3 w-[8em] md:w-[15em] lg:w-[15em]",children:"Aksi"})]})}),e("tbody",{className:"text-black",children:d.map(n=>t("tr",{className:"bg-white border-b",children:[e("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap border-r-2",children:"1"}),e("td",{className:"px-6 py-4 font-bold border-r-2",children:n.packet_name}),e("td",{className:"px-6 py-4 border-r-2",children:e("img",{className:"inline-block h-16 w-24 rounded-lg",src:`/upload/vendor_product/${n.packet_picture}`,alt:n.packet_name})}),e("td",{className:"px-6 py-4 border-r-2",children:e("p",{children:n.packet_desc})}),e("td",{className:"px-6 py-4 border-r-2",children:t("p",{children:[e("span",{children:"Rp."}),product.product_price]})}),t("td",{className:"px-6 py-4 flex flex-col md:flex-row lg:flex-row gap-2 content-center",children:[e(k,{}),e(_,{})]})]}))})]})})})})]}),t("div",{className:l===2?"block":"hidden",children:[e("div",{className:"flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mb-5",children:e("p",{className:"font-bold text-3xl text-[#F77E21] ml-2",children:"LIST MENU CATERING"})}),t("div",{className:"flex flex-1 flex-col md:flex-row lg:flex-row lg:mr-4 ml-6 mr-3 mb-6 justify-between content-center",children:[t("div",{className:"relative w-full md:w-[60%] lg:w-[70%]",children:[e("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e("svg",{"aria-hidden":"true",className:"w-5 h-5 text-black",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e("input",{type:"search",id:"default-search",className:"block w-full p-3 pl-10 text-sm text-black border border-[#F77E21] rounded-lg bg-white",placeholder:"Cari Menu"}),e("button",{type:"submit",className:"text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2",children:"Search"})]}),e("div",{className:"pl-0 mt-6 md:pl-6 md:mt-0 lg:pl-6 lg:mt-0 flex flex-row gap-3",children:e(A,{type:"submit",className:"text-black bg-green-400 hover:bg-green-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-4",children:"Tambah"})})]}),e("div",{className:"flex flex-1 flex-col md:flex-row lg:flex-row mx-4 mr-5 md:mr-3 lg:mr-3",children:e("div",{className:"rounded shadow bg-white mx-2 w-full",children:e("div",{className:"overflow-x-auto",children:t("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-[#F77E21] uppercase bg-white",children:t("tr",{className:"border-b-2 border-black",children:[e("th",{scope:"col",className:"px-6 py-3",children:"No."}),e("th",{scope:"col",className:"px-6 py-3",children:"Nama Menu"}),e("th",{scope:"col",className:"px-6 py-3",children:"Gambar Menu"}),e("th",{scope:"col",className:"px-6 py-3",children:"Harga Menu"}),e("th",{scope:"col",className:"px-6 py-3 w-[8em] md:w-[15em] lg:w-[15em]",children:"Aksi"})]})}),e("tbody",{className:"text-black",children:c.map(n=>t("tr",{className:"bg-white border-b",children:[e("td",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap border-r-2",children:"1"}),e("td",{className:"px-6 py-4 font-medium border-r-2",children:n.product_name}),e("td",{className:"px-6 py-4 border-r-2",children:e("img",{className:"inline-block h-16 w-24 rounded-lg",src:`/upload/vendor_product/${n.product_picture}`,alt:n.product_name})}),e("td",{className:"px-6 py-4 font-medium border-r-2",children:t("p",{children:[e("span",{children:"Rp."}),n.product_price]})}),t("td",{className:"px-6 py-4 flex flex-col md:flex-row lg:flex-row gap-2 content-center",children:[e(M,{}),e(C,{})]})]}))})]})})})})]})]})]})]})})})})}export{U as default};
