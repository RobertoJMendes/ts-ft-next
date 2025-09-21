"use client"
import instance from "@/app/services/api";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
//    const [error, setError] = useState<string|null>(null)
  //  const [sucess, setSucess] = useState<string|null>(null)
    const [name, setName] = useState<string|"">("")
    const [email, setEmail] = useState<string|"">("")

    const handleSubmit = async (event:React.FormEvent)=>{
        event.preventDefault()
        try {
          const response = await instance.post('/user', {
            name: name,
            email: email
          })
          console.log(response.data)
          setName("")
          setEmail("")
        } catch (error) {
          console.log(error)
        }
    }
  return (
    <main className="flex flex-col gap-2">

        <div className="mt-2 flex justify-between">
            <Link href='/' className="w2 h2" >Inicio</Link>
            <Link href='/users/listar/' className="w2 h2" >Listar</Link>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

            <div className="flex flex-col gap-2" >
                <label htmlFor="name">Nome</label>
                <input type="text" id="name"
                value={name}
                placeholder="Nome Completo"
                onChange={(e)=>setName(e.target.value)}
                className="bg-amber-100 text-black pl-2" />
            </div>

            <div className="flex flex-col gap-2" >
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                value={email}
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                className="bg-amber-100 text-black pl-2" />
            </div>

            <button type="submit" className="bg-fuchsia-700 cursor-pointer">Cadastrar!</button>

        </form>
    
    </main>
  );
}