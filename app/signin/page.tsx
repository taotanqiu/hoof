"use client"
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter()

    const handle = ()=>{
        router.push("/")
         
    }
    return (
        <div>
            <button onClick={handle}>5555555555555</button>
        </div>
    )
}
