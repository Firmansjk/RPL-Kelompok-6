import{_ as l,r as p,j as a,a as s,n as c}from"./app-f69b812a.js";import{G as u}from"./GuestLayout-872db314.js";import{I as f}from"./InputError-2561beb8.js";import{I as w}from"./InputLabel-ee203caa.js";import{P as h}from"./PrimaryButton-ab64839d.js";import{T as b}from"./TextInput-4f34cae3.js";import"./ApplicationLogo-41359330.js";function j(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=l({password:""});p.useEffect(()=>()=>{n("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{htmlFor:"password",value:"Password"}),s(b,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:d}),s(f,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{j as default};
