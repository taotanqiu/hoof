import Link from 'next/link'
import {TYPEinterpretation} from "../page"
import {TYPEitem} from "../../type/index"
import { Dispatch, SetStateAction } from 'react'


 
// handleDelete:($id: string))=>void}
// handleDelete:($id: string) => Promise<void>

export default function Post({item,setinterpretation}:{item:TYPEitem
,setinterpretation:Dispatch<SetStateAction<TYPEitem[]>>

}) {
   

 const  {
  term,
  interpretation,
  $id,
  $createdAt,
  $updatedAt,
  $permissions,
  $databaseId,
  $collectionId,
  } = item

const handleDelete =async ($id:string)=>{
console.log($id)

if (confirm("删除??") ) {
try {
await fetch(`/api/interpretation/${$id}`,{method:"delete"})
setinterpretation((x)=>{
  return x.filter((y)=>y.$id!=$id)
})


} catch (error) {

}
}else{return}

}

  
    return (
        <div>
      
        <div className="p-4 my-2 rounded-md border-b leading-9 bg-slate-500">
          
          <div className="font-bold capitalize">{term}</div>
          <h2>{$id}</h2>
        <div>{interpretation}</div>
        </div>
        
        <div className="flex gap-4 mt-4 justify-end items-center">
          <Link href={`/edit/${$id}`} className="uppercase bg-slate-200 px-4 py-2 round-md mt-3 text-sm font-bold tracking-widest  bg-green-500">edit</Link>
        
        
        <button className="bg-red-500 px-4 py-2 round-md mt-3 text-sm font-bold tracking-widest"
        
 
// onClick={()=>handle($id)}
onClick={ ()=>{ handleDelete($id)}}
//  onClick={(e)=>handle(e,term)}
        >删除</button>
           </div>
           </div>
    )
}






