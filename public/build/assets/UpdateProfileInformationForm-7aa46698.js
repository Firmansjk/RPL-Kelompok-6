import{W as v,_ as g,j as a,a as e,d as x}from"./app-59a3e9f1.js";import{I as n}from"./InputError-eaab7a17.js";import{I as o}from"./InputLabel-81b8f4e8.js";import{P as y}from"./PrimaryButton-d0a02c86.js";import{T as l}from"./TextInput-bc3b0039.js";import{t as N}from"./transition-ab50c071.js";function S({mustVerifyEmail:c,status:d,className:u}){const r=v().props.auth.user,{data:i,setData:s,patch:f,errors:m,processing:p,recentlySuccessful:h}=g({name:r.name,email:r.email});return a("section",{className:u,children:[a("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),a("form",{onSubmit:t=>{t.preventDefault(),f(route("profile.update"))},className:"mt-6 space-y-6",children:[a("div",{children:[e(o,{htmlFor:"name",value:"Name"}),e(l,{id:"name",className:"mt-1 block w-full",value:i.name,onChange:t=>s("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e(n,{className:"mt-2",message:m.name})]}),a("div",{children:[e(o,{htmlFor:"email",value:"Email"}),e(l,{id:"email",type:"email",className:"mt-1 block w-full",value:i.email,onChange:t=>s("email",t.target.value),required:!0,autoComplete:"username"}),e(n,{className:"mt-2",message:m.email})]}),c&&r.email_verified_at===null&&a("div",{children:[a("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e(x,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),d==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),a("div",{className:"flex items-center gap-4",children:[e(y,{disabled:p,children:"Save"}),e(N,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{S as default};
