"use client"
import Image from "next/image";
import Link from "next/link";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import {TYPEitem} from "../type/index"

export interface TYPEinterpretation {
term: string,
interpretation:  string,
$id: string,
}
 
export default  function Home() {
const [interpretation, setinterpretation] = useState<TYPEitem[]>([])
const [isLoading,setIsLoading]=useState<boolean>(true)
const [error,seterror]=useState<string | null>(null)

useEffect(() => {
async function jiu(){


setIsLoading(true)
try {
const re = await fetch(`/api/interpretation`)
if (!re.ok){
seterror("有错误")
setIsLoading(false)
throw new Error("有错")}

const {response,message} = await re.json()
setinterpretation(response)




} catch (error) {
console.log(error)

}finally{setIsLoading(false)}

}
jiu()

}, [])

 

// const handleDelete =async ($id:string)=>{
// console.log($id)

// if (confirm("删除??") ) {
// try {
// await fetch(`/api/interpretation/${$id}`,{method:"delete"})
// setinterpretation(x=>x.filter(y=>y.$id!=$id))


// } catch (error) {

// }
// }else{return}

// }







return (
<div>
{error && <p className="px-3 py-2 teXxt-red-500 text-3xl">{error}</p>}
{isLoading ? <p className="px-3 py-2 teXxt-red-500 text-3xl">正在loading...</p>



:
interpretation &&  interpretation.length >0 ? interpretation.map((item:TYPEitem)=><Post 
key={item.$id} item={item}  setinterpretation={setinterpretation}></Post>):

<p className="px-3 py-2 teXxt-red-500 text-3xl">  没有词条XXX</p>


 

}



</div>
// 
);
}

