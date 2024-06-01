import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {




async function handleCreate(formData: FormData) {
'use server'
const rawFormData = {
term: formData.get('term'),
interpretation: formData.get('interpretation'),
}
const re = await fetch(`${process.env.APP_URL}/api/interpretation`,{
method:"post"
,headers: {"Content-Type": "application/json",},
body: JSON.stringify(rawFormData)}
)
redirect("/")

}

 







  return (
  <div className="">
<h2 className="font-bold text-3xl my-6">add  new interpreter</h2>

<form className="flex gap-3 flex-col  " action={handleCreate}  >

<input type="text" name="term" placeholder="term" className="py-1 px-4  rounded-md border-red-500
border-4
"  />

<textarea name="interpretation" placeholder="interpretation" rows={4}  className="resize-none border-4 border-red-500
py-1 px-4 rounded-3xl
"


></textarea>

<button 

className="border bg-slate-500 text-white mt-5 py-2 px-10 rounded-2xl cursor-pointer">add interpretion</button>

 





</form>
  </div>)
}
