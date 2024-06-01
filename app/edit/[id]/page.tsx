 

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


 


export default async function Home({ params }: { params: { id: string } }) {
  console.log(params.id)
const r = await fetch(`${process.env.APP_URL}/api/interpretation/${params.id}`)
const re = await r.json()
console.log(re.response)

const {term,interpretation}=re.response

 






const handle=async (formData: FormData)=>{
// const handle=async (e: FormEvent<HTMLButtonElement>,id:string,data:{term:string,interpretation:string})=>{
  'use server'
 
  const data = {
    term: formData.get('term'),
    interpretation: formData.get('interpretation'),
   
  }
  
  console.log(data,"data")
  
const r = await fetch(`${process.env.APP_URL}/api/interpretation/${params.id}`,{
method:"put",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(data)

})

redirect("/")

}
// value={interpretation}
// value={term}
  return (
  <div className="">
<h2 className="font-bold text-3xl my-6">edit interpreter</h2>
<h2>数据号{params.id}</h2>
<form className="flex gap-3 flex-col  "  action={handle}

>

<input type="text" name="term" placeholder="term" className="py-1 px-4  rounded-md border-red-500
border-4
"   defaultValue={term}/>

<textarea name="interpretation" placeholder="interpretation" rows={4}  className="resize-none border-4 border-red-500
py-1 px-4 rounded-3xl"  defaultValue={interpretation} 




></textarea>

<button  className="border bg-slate-500 text-white mt-5 py-2 px-10 rounded-2xl cursor-pointer"

// onClick={(e)=>handle(e,params.id,{term ,interpretation })}

>
  xxxxxxxxxxxxxxxxxxx
  
  
 </button>

 





</form>
  </div>)
}
