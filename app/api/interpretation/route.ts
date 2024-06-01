import client from "@/lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";
import { NextRequest, NextResponse } from "next/server";

 
// app\api\interpretation\route.ts
const database = new Databases(client)

// 创建
async function createInterpretation(data:{term:string,interpretation:string}){
try {
    const response = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"665328cb0008a8073073",ID.unique(),data)
return response

} catch (error) {
    console.log("创建时，出错",error)
    throw new Error("创建时，出错了")
    
}
}

 
// fetch
async function fetchInterpretation(){
    try {
        const response = await database.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"665328cb0008a8073073",[Query.orderDesc("$createdAt")])
    return response.documents
    
    } catch (error) {
        console.log("fetch时，出错",error)
        throw new Error("fetch时，出错了")
                     
    } 
    }
 
// api POST
//app\api\interpretation\route.ts
export async function POST(req:Request){
try {
   
     
const {term,interpretation} = await  req.json()
console.log({term,interpretation},113 )

const response = await createInterpretation({term,interpretation})
return NextResponse.json({message:"创建成功",response},{status:201})
} catch (error) {
return NextResponse.json({err:"创建时出错",error},{status:500})

}
}
 
// api GET



export async function GET(req:NextRequest){

    try{
const response = await fetchInterpretation()
return NextResponse.json({message:"GET成功",response},{status:201})

    }
    catch(error){
        return NextResponse.json({err:"创建时出错",error},{status:500})
    }
    

}