import client from "@/lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";
import { NextRequest, NextResponse } from "next/server";


// app\api\interpretation\route.ts
const database = new Databases(client)

// 删除
async function deleteInterpretation(id:string){
try {
    const response = await database.deleteDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"665328cb0008a8073073",id)
return response

} catch (error) {
    console.log("创建时，出错",error)
    throw new Error("创建时，出错了")
    
}
} 


// getInterpretationByID
async function getInterpretationByID(id:string){
try {
    const response = await database
    
    
    .getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"665328cb0008a8073073",id)
return response

} catch (error) {
    console.log("getInterpretationByID时，出错",error)
    throw new Error("getInterpretationByID时，出错了")
    
}
} 
// edit
async function editInterpretation(
    id: string,data:{term:string,interpretation:string}
  ) {
    try {

         
        const response = await database.updateDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"665328cb0008a8073073",id,data)
    return NextResponse.json({id,response},{status:200})
    
    } catch (error) {
        console.log("edit 时，出错",error)
        throw new Error("edit 时，出错了")
                      
    } 
    }

// api POST
//app\api\interpretation\route.ts
export async function PUT(req:Request,{params}:{params:{id:string}}){
try {
     
    const {id}=params
    console.log(id)
    const {term,interpretation} = await req.json()
console.log({term,interpretation},113 )

const response = await editInterpretation(id,{term,interpretation})
return NextResponse.json({message:"编辑 成功",response},{status:201})
} catch (error) {
return NextResponse.json({err:"编辑 时出错",error},{status:500})

}
}
 
// api DELETE



export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){

    try{
        const {id}=params
const response = await deleteInterpretation(id)
return NextResponse.json({message:"删除时 成功",response},{status:201})

    }
    catch(error){
        return NextResponse.json({err:"删除时 出错",error},{status:500})
    }
    

}




// api getInterpretationByID



export async function GET(req:NextRequest,{params}:{params:{id:string}}){

    try{
        const {id}=params
const response = await getInterpretationByID(id)
return NextResponse.json({message:"getInterpretationByID时 成功",response},{status:201})

    }
    catch(error){
        return NextResponse.json({err:"getInterpretationByID时 出错",error},{status:500})
    }
    

}